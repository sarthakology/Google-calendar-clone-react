import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    english: { 
        translation: 
        {
            "greeting": "Hello, Welcome!",
            "login": "Login to your account",
            "yEmail": "Your email",
            "Password": "Password",
            "Login": "Login",
            "nAccount": "Don't have an account? ",
            "signuphere": "Sign up here",
            "createanaccount": "Create an account",
            "youremail": "Your email",
            "password": "Password",
            "confirmpassword": "Confirm password",
            "iacceptthe": "I accept the ",
            "termsandConditions": "Terms and Conditions",
            "alreadyhaveanaccount": "Already have an account? ",
            "loginhere": "Login here",
            "today": "Today",
            "admin": "Admin",
            "screenSaver": "Screen Saver",
            "help": "Help",
            "training": "Training",
            "updates": "Updates",
            "sendfeedbacktoCDAC": "Send feedback to C-DAC",
            "settings": "Settings",
            "trash": "Trash",
            "densityandcolor": "Density and color",
            "getaddons": "Get add-ons",
            "goFullScreen": "Go Full Screen",
            "home": "Home",
            "hi": "Hi",
            "create": "Create",
            "addtitle": "Add title",
            "addadescription": "Add a description",
            "save": "Save",
            "events": "Events",
            "title": "Title",
            "description": "Description",
            "label": "Label",
            "day": "Day",
            "noeventsavailable": "No events available",
            "loadingprofilepleasewait": "Loading profile, please wait...",
            "name": "Name",
            "gender": "Gender",
            "role": "Role",
            "phoneNumber": "Phone Number",
            "email": "Email",
            "saveChanges": "Save Changes",
            "editProfile": "Edit Profile",
            "logout": "Logout",
            "languageandRegion": "Language and Region",
            "language": "Language",
            "selectalanguage": "Select a language",
            "country": "Country",
            "selectacountry": "Select a country",
            "dateFormat": "Date Format",
            "selectadateformat": "Select a date format",
            "timeFormat": "Time Format",
            "timeZone": "Time Zone",
            "primaryTimeZone": "Primary Time Zone",
            "selectatimezone": "Select a timezone",
            "secondaryTimeZone": "Secondary Time Zone",
            "notselected": "Not selected",
            "startWeekOn": "Start Week On",
            "noadminaccess": "No admin access",
            "adminDashboard": "Admin Dashboard",
            "delete": "Delete",
            "editCountries": "Edit Countries",
            "addCountry": "Add Country",
            "newcountry": "New country",
            "editFormats": "Edit Formats",
            "addFormat": "Add Format",
            "newformat": "New format",
            "editLanguages": "Edit Languages",
            "addLanguage": "Add Language",
            "newlanguage": "New language",
            "editTimezones": "Edit Timezones",
            "addTimezone": "Add Timezone",
            "newtimezone": "New timezone"
        }         
    },
    hindi: { 
        translation: {
            "greeting": "नमस्ते, स्वागत है!",
            "login": "अपने खाते में लॉगिन करें",
            "yEmail": "आपका ईमेल",
            "Password": "पासवर्ड",
            "Login": "लॉगिन",
            "nAccount": "क्या आपका खाता नहीं है? ",
            "signuphere": "यहाँ साइन अप करें",
            "createanaccount": "खाता बनाएं",
            "youremail": "आपका ईमेल",
            "password": "पासवर्ड",
            "confirmpassword": "पासवर्ड की पुष्टि करें",
            "iacceptthe": "मैं स्वीकार करता हूँ ",
            "termsandConditions": "नियम और शर्तें",
            "alreadyhaveanaccount": "क्या आपका खाता पहले से है? ",
            "loginhere": "यहाँ लॉगिन करें",
            "today": "आज",
            "admin": "प्रशासक",
            "screenSaver": "स्क्रीन सेवर",
            "help": "मदद",
            "training": "प्रशिक्षण",
            "updates": "अपडेट्स",
            "sendfeedbacktoCDAC": "सी-डैक को फीडबैक भेजें",
            "settings": "सेटिंग्स",
            "trash": "कचरा",
            "densityandcolor": "घनत्व और रंग",
            "getaddons": "ऐड-ऑन प्राप्त करें",
            "goFullScreen": "पूर्ण स्क्रीन पर जाएं",
            "home": "मुख पृष्ठ",
            "hi": "नमस्ते",
            "create": "बनाएं",
            "addtitle": "शीर्षक जोड़ें",
            "addadescription": "विवरण जोड़ें",
            "save": "सहेजें",
            "events": "घटनाएँ",
            "title": "शीर्षक",
            "description": "विवरण",
            "label": "लेबल",
            "day": "दिन",
            "noeventsavailable": "कोई घटनाएँ उपलब्ध नहीं हैं",
            "loadingprofilepleasewait": "प्रोफ़ाइल लोड हो रही है, कृपया प्रतीक्षा करें...",
            "name": "नाम",
            "gender": "लिंग",
            "role": "भूमिका",
            "phoneNumber": "फ़ोन नंबर",
            "email": "ईमेल",
            "saveChanges": "परिवर्तन सहेजें",
            "editProfile": "प्रोफ़ाइल संपादित करें",
            "logout": "लॉग आउट करें",
            "languageandRegion": "भाषा और क्षेत्र",
            "language": "भाषा",
            "selectalanguage": "एक भाषा चुनें",
            "country": "देश",
            "selectacountry": "एक देश चुनें",
            "dateFormat": "दिनांक प्रारूप",
            "selectadateformat": "एक दिनांक प्रारूप चुनें",
            "timeFormat": "समय प्रारूप",
            "timeZone": "समय क्षेत्र",
            "primaryTimeZone": "प्राथमिक समय क्षेत्र",
            "selectatimezone": "एक समय क्षेत्र चुनें",
            "secondaryTimeZone": "माध्यमिक समय क्षेत्र",
            "notselected": "चयनित नहीं",
            "startWeekOn": "सप्ताह की शुरुआत",
            "noadminaccess": "प्रशासक पहुंच नहीं है",
            "adminDashboard": "प्रशासक डैशबोर्ड",
            "delete": "हटाएं",
            "editCountries": "देश संपादित करें",
            "addCountry": "देश जोड़ें",
            "newcountry": "नया देश",
            "editFormats": "प्रारूप संपादित करें",
            "addFormat": "प्रारूप जोड़ें",
            "newformat": "नया प्रारूप",
            "editLanguages": "भाषाएँ संपादित करें",
            "addLanguage": "भाषा जोड़ें",
            "newlanguage": "नई भाषा",
            "editTimezones": "समय क्षेत्र संपादित करें",
            "addTimezone": "समय क्षेत्र जोड़ें",
            "newtimezone": "नया समय क्षेत्र"
        }
    },
    french: { 
        translation: 
        {
            "greeting": "Bonjour, Bienvenue!",
            "login": "Connectez-vous à votre compte",
            "yEmail": "Votre e-mail",
            "Password": "Mot de passe",
            "Login": "Connexion",
            "nAccount": "Vous n'avez pas de compte ? ",
            "signuphere": "Inscrivez-vous ici",
            "createanaccount": "Créer un compte",
            "youremail": "Votre e-mail",
            "password": "Mot de passe",
            "confirmpassword": "Confirmez le mot de passe",
            "iacceptthe": "J'accepte les ",
            "termsandConditions": "Termes et Conditions",
            "alreadyhaveanaccount": "Vous avez déjà un compte ? ",
            "loginhere": "Connectez-vous ici",
            "today": "Aujourd'hui",
            "admin": "Administrateur",
            "screenSaver": "Économiseur d'écran",
            "help": "Aide",
            "training": "Formation",
            "updates": "Mises à jour",
            "sendfeedbacktoCDAC": "Envoyer des commentaires à C-DAC",
            "settings": "Paramètres",
            "trash": "Corbeille",
            "densityandcolor": "Densité et couleur",
            "getaddons": "Obtenir des modules complémentaires",
            "goFullScreen": "Passer en plein écran",
            "home": "Accueil",
            "hi": "Salut",
            "create": "Créer",
            "addtitle": "Ajouter un titre",
            "addadescription": "Ajouter une description",
            "save": "Sauvegarder",
            "events": "Événements",
            "title": "Titre",
            "description": "Description",
            "label": "Étiquette",
            "day": "Jour",
            "noeventsavailable": "Aucun événement disponible",
            "loadingprofilepleasewait": "Chargement du profil, veuillez patienter...",
            "name": "Nom",
            "gender": "Genre",
            "role": "Rôle",
            "phoneNumber": "Numéro de téléphone",
            "email": "E-mail",
            "saveChanges": "Enregistrer les modifications",
            "editProfile": "Modifier le profil",
            "logout": "Se déconnecter",
            "languageandRegion": "Langue et région",
            "language": "Langue",
            "selectalanguage": "Sélectionnez une langue",
            "country": "Pays",
            "selectacountry": "Sélectionnez un pays",
            "dateFormat": "Format de date",
            "selectadateformat": "Sélectionnez un format de date",
            "timeFormat": "Format de temps",
            "timeZone": "Fuseau horaire",
            "primaryTimeZone": "Fuseau horaire principal",
            "selectatimezone": "Sélectionnez un fuseau horaire",
            "secondaryTimeZone": "Fuseau horaire secondaire",
            "notselected": "Non sélectionné",
            "startWeekOn": "Commencer la semaine le",
            "noadminaccess": "Pas d'accès administrateur",
            "adminDashboard": "Tableau de bord administrateur",
            "delete": "Supprimer",
            "editCountries": "Modifier les pays",
            "addCountry": "Ajouter un pays",
            "newcountry": "Nouveau pays",
            "editFormats": "Modifier les formats",
            "addFormat": "Ajouter un format",
            "newformat": "Nouveau format",
            "editLanguages": "Modifier les langues",
            "addLanguage": "Ajouter une langue",
            "newlanguage": "Nouvelle langue",
            "editTimezones": "Modifier les fuseaux horaires",
            "addTimezone": "Ajouter un fuseau horaire",
            "newtimezone": "Nouveau fuseau horaire"
        }         
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'english',
        fallbackLng: 'english',
    });

export default i18n;
