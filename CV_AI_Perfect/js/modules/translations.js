const translations = {
    it: {
        "app.title": "Generatore di CV",
        "app.generate": "Genera Anteprima",
        "personal-info": "Informazioni Personali",
        // Tutte le altre traduzioni...
    },
    en: {
        "app.title": "CV Generator",
        "app.generate": "Generate Preview",
        "personal-info": "Personal Information",
        // ...
    }
    // Altre lingue...
};

function initTranslations() {
    document.getElementById('language-select').addEventListener('change', (e) => {
        const lang = e.target.value;
        updateTexts(lang);
    });
}

function updateTexts(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key] || translations['it'][key];
    });
}