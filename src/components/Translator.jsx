import { useEffect } from "react";

const Translator = () => {
    useEffect(() => {
        if (window.google && window.google.translate) return;

        const script = document.createElement("script");
        script.src =
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "en",
                    includedLanguages: "hi,en,ur",
                    layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                },
                "google_translate_element"
            );
        };
    }, []);

    return (
        <div
            id="google_translate_element"
            className="text-sm border rounded px-2 py-1 bg-white"
        />
    );
};

export default Translator;
