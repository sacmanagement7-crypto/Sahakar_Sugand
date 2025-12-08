import React, { useState } from "react";
import { X } from "lucide-react";
import SubscriptionPage from "./SubscriptionPage";

const SubscriptionPopup = ({ onClose, onSuccess }) => {
  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-[9999]">
      <div className="bg-white max-w-3xl overflow-y-auto relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
        >
          <X size={20} />
        </button>

        {/* Your subscription form */}
        <SubscriptionPage
          onSuccess={() => {
            onSuccess();
          }}
        />
      </div>
    </div>
  );
};

export default SubscriptionPopup;
