import { useState, useEffect } from "react";
import { Building2, Phone, Mail, IndianRupee, FileText, ListRestart, CreditCard, MapPin } from "lucide-react";
import { createAds } from "../service/axios";
import { toast } from "react-toastify";

export default function AdsForm() {
    const emptyForm = {
        orgName: "",
        mobile: "",
        email: "",
        amount: "",
        description: "",
        pan: "",
        gst: "",
        address: "",
        district: "",
        tahseel: "",
        block: "",
        adType: "Website Ads"
    };

    const [formData, setFormData] = useState(emptyForm);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (!isFormValid()) return;

        try {
            setIsSubmitting(true);

            const res = await createAds(formData);

            toast.success(res.data.message);

            if (res.data?.success) {
                setShowSuccess(true);
                clearForm();

                setTimeout(() => {
                    setShowSuccess(false);
                }, 3000);
            }

        } catch (error) {
            console.error("CREATE ADS ERROR:", error);

            alert(
                error?.response?.data?.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const clearForm = () => {
        setFormData(emptyForm);
        try {
            window.localStorage?.removeItem("adsFormData");
        } catch (error) {
            console.log("Storage not available");
        }
    };

    const isFormValid = () => {
        return formData.orgName && formData.mobile && formData.email &&
            formData.amount && formData.description && formData.address &&
            formData.district && formData.tahseel && formData.block;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-indigo-100">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4">
                            <FileText className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">
                            वेबसाइट विज्ञापन
                        </h1>
                        <p className="text-gray-600">कृपया सभी आवश्यक जानकारी सही-सही भरें</p>
                    </div>
                </div>

                {/* Success Message */}
                {showSuccess && (
                    <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4 mb-6 shadow-md">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-green-800">
                                    फॉर्म सफलतापूर्वक सेव हो गया!
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Form Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-indigo-100 overflow-hidden">
                    <div className="p-8">

                        {/* Organization Details Section */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-indigo-200 flex items-center gap-2">
                                <Building2 className="w-5 h-5 text-indigo-600" />
                                संगठन की जानकारी
                            </h2>

                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        संगठन/संस्थान का नाम <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="orgName"
                                        value={formData.orgName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                                        placeholder="संगठन का नाम दर्ज करें"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                            <Phone className="w-4 h-4 text-indigo-600" />
                                            मोबाइल नंबर <span className="text-red-500">*</span>
                                        </label>
                                        <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none" placeholder="+91 XXXXX XXXXX" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                            <Mail className="w-4 h-4 text-indigo-600" />
                                            ईमेल <span className="text-red-500">*</span>
                                        </label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none" placeholder="example@email.com" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Advertisement Details Section */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-indigo-200 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-indigo-600" />
                                विज्ञापन का विवरण
                            </h2>

                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                        <IndianRupee className="w-4 h-4 text-indigo-600" />
                                        अमाउंट <span className="text-red-500">*</span>
                                    </label>
                                    <input type="number" name="amount" value={formData.amount} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none" placeholder="₹ 0.00" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        विवरण <span className="text-red-500">*</span>
                                    </label>
                                    <textarea name="description" value={formData.description} onChange={handleChange} rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none resize-none" placeholder="विज्ञापन का विस्तृत विवरण दर्ज करें..." />
                                </div>
                            </div>
                        </div>

                        {/* Tax Details Section */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-indigo-200 flex items-center gap-2">
                                <CreditCard className="w-5 h-5 text-indigo-600" />
                                कर विवरण (वैकल्पिक)
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        पैन कार्ड
                                    </label>
                                    <input type="text" name="pan" value={formData.pan} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none" placeholder="ABCDE1234F" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        जीएसटी नंबर
                                    </label>
                                    <input type="text" name="gst" value={formData.gst} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none" placeholder="22AAAAA0000A1Z5" />
                                </div>
                            </div>
                        </div>

                        {/* Address Section */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-indigo-200 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-indigo-600" />
                                पता विवरण
                            </h2>

                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        पूरा पता <span className="text-red-500">*</span>
                                    </label>
                                    <textarea name="address" value={formData.address} onChange={handleChange} rows="3" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none resize-none" placeholder="मकान नं., गली, क्षेत्र..." />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            जिला <span className="text-red-500">*</span>
                                        </label>
                                        <input type="text" name="district" value={formData.district} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none" placeholder="जिला" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            तहसील <span className="text-red-500">*</span>
                                        </label>
                                        <input type="text" name="tahseel" value={formData.tahseel} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none" placeholder="तहसील" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            ब्लॉक <span className="text-red-500">*</span>
                                        </label>
                                        <input type="text" name="block" value={formData.block} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none" placeholder="ब्लॉक" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t border-gray-200">
                            <button onClick={handleSubmit} disabled={isSubmitting || !isFormValid()} className="flex-1 sm:flex-none bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 focus:ring-4 focus:ring-indigo-300 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        सबमिट हो रहा है...
                                    </span>
                                ) : (
                                    "सबमिट करें"
                                )}
                            </button>

                            <button onClick={clearForm} className="flex-1 sm:flex-none bg-white border-2 border-red-500 text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 focus:ring-4 focus:ring-red-200 transition-all">
                                <ListRestart />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Footer Note */}
                <div className="text-center mt-6 text-sm text-gray-600">
                    <p>आपकी जानकारी स्वचालित रूप से सुरक्षित की जा रही है</p>
                </div>
            </div>
        </div>
    );
}