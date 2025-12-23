// core.js - Core language management functions (English only)

// Language management
function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', 'en');
}

function getLanguage() {
    return 'en'; // Always English
}

// Static translation lookup
function getTranslation(key) {
    const keys = key.split('.');
    let value = translations.en;
    
    for (let k of keys) {
        value = value ? value[k] : undefined;
        if (!value) return key;
    }
    
    return value;
}

// Dynamic translation lookup
function getDynamicTranslation(simulator, category, key) {
    try {
        return dynamicTranslations.en[simulator][category][key] || key;
    } catch (e) {
        return key;
    }
}

// Initialize empty objects that will be populated by other modules
let dynamicTranslations = { en: {} };