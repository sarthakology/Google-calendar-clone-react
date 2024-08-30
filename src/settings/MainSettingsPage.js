import React, { useState } from "react";

const SettingsPage = () => {
  // State for form fields
  const [language, setLanguage] = useState("English (US)");
  const [country, setCountry] = useState("United States");
  const [dateFormat, setDateFormat] = useState("12/31/2024");
  const [timeFormat, setTimeFormat] = useState("1:00pm");
  const [primaryTimeZone, setPrimaryTimeZone] = useState("(GMT+00:00) Coordinated Universal Time");
  const [secondaryTimeZone, setSecondaryTimeZone] = useState("Not selected");
  const [showWorldClock, setShowWorldClock] = useState(false);
  const [defaultDuration, setDefaultDuration] = useState(60);
  const [speedyMeetings, setSpeedyMeetings] = useState(false);
  const [guestPermissions, setGuestPermissions] = useState("Only if the sender is known");
  const [autoAddGoogleMeet, setAutoAddGoogleMeet] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [showSnoozedNotifications, setShowSnoozedNotifications] = useState(true);
  const [playNotificationSounds, setPlayNotificationSounds] = useState(true);
  const [notifyIfResponded, setNotifyIfResponded] = useState(false);
  const [showWeekends, setShowWeekends] = useState(true);
  const [showDeclinedEvents, setShowDeclinedEvents] = useState(false);
  const [showCompletedTasks, setShowCompletedTasks] = useState(true);
  const [showWeekNumbers, setShowWeekNumbers] = useState(false);
  const [shorterEventsSameSize, setShorterEventsSameSize] = useState(false);
  const [reduceBrightnessPastEvents, setReduceBrightnessPastEvents] = useState(true);
  const [sideBySideCalendars, setSideBySideCalendars] = useState(false);
  const [startWeekOn, setStartWeekOn] = useState("Sunday");
  const [customView, setCustomView] = useState("4 days");
  const [alternateCalendars, setAlternateCalendars] = useState("None");
  const [gmailEvents, setGmailEvents] = useState(true);
  const [emailEventPrivacy, setEmailEventPrivacy] = useState("Only me");
  const [keyboardShortcuts, setKeyboardShortcuts] = useState(false);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form state for now
    console.log({
      language,
      country,
      dateFormat,
      timeFormat,
      primaryTimeZone,
      secondaryTimeZone,
      showWorldClock,
      defaultDuration,
      speedyMeetings,
      guestPermissions,
      autoAddGoogleMeet,
      notifications,
      showSnoozedNotifications,
      playNotificationSounds,
      notifyIfResponded,
      showWeekends,
      showDeclinedEvents,
      showCompletedTasks,
      showWeekNumbers,
      shorterEventsSameSize,
      reduceBrightnessPastEvents,
      sideBySideCalendars,
      startWeekOn,
      customView,
      alternateCalendars,
      gmailEvents,
      emailEventPrivacy,
      keyboardShortcuts
    });
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Language and region</h1>
      <form onSubmit={handleSubmit}>
        {/* Language and Region */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Language</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option>Afrikaans</option>
            <option>azərbaycan</option>
            <option>Bahasa Indonesia</option>
            <option>Català</option>
            <option>Cymraeg</option>
            <option>Dansk</option>
            <option>Deutsch</option>
            <option>English (UK)</option>
            <option>English (US)</option>
            <option>Español</option>
            <option>Español (Latinoamérica)</option>
            <option>euskara</option>
            <option>Filipino</option>
            <option>Français</option>
            <option>Français (Canada)</option>
            <option>galego</option>
            <option>Hrvatski</option>
            <option>isiZulu</option>
            <option>Italiano</option>
            <option>Kiswahili</option>
            <option>Latviešu</option>
            <option>Lietuvių</option>
            <option>Magyar</option>
            <option>Melayu</option>
            <option>Nederlands</option>
            <option>Norsk (bokmål)</option>
            <option>Polski</option>
            <option>Português (Brasil)</option>
            <option>Português (Portugal)</option>
            <option>Română</option>
            <option>Slovenčina</option>
            <option>Slovenščina</option>
            <option>Suomi</option>
            <option>Svenska</option>
            <option>Tiếng Việt</option>
            <option>Türkçe</option>
            <option>íslenska</option>
            <option>Čeština</option>
            <option>Ελληνικά</option>
            <option>беларуская</option>
            <option>Български</option>
            <option>монгол</option>
            <option>Русский</option>
            <option>Српски</option>
            <option>Українська</option>
            <option>қазақ тілі</option>
            <option>Հայերեն</option>
            <option>עברית</option>
            <option>العربية</option>
            <option>اُردُو</option>
            <option>فارسی</option>
            <option>नेपाली</option>
            <option>मराठी</option>
            <option>हिन्दी</option>
            <option>বাংলা</option>
            <option>ਪੰਜਾਬੀ</option>
            <option>ગુજરાતી</option>
            <option>தமிழ்</option>
            <option>తెలుగు</option>
            <option>ಕನ್ನಡ</option>
            <option>മലയാളം</option>
            <option>සිංහල</option>
            <option>ภาษาไทย</option>
            <option>ລາວ</option>
            <option>မြန်မာ</option>
            <option>ქართული</option>
            <option>አማርኛ</option>
            <option>ខ្មែរ</option>
            <option>中文 (香港)</option>
            <option>中文（简体）</option>
            <option>中文（繁體）</option>
            <option>日本語</option>
            <option>한국어</option>
          </select>
        </div>




        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Country</label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option>Afghanistan (‫افغانستان‬‎)</option>
            <option>Åland Islands (Åland)</option>
            <option>Albania (Shqipëri)</option>
            <option>Algeria</option>
            <option>American Samoa</option>
            <option>Andorra</option>
            <option>Angola</option>
            <option>Anguilla</option>
            <option>Antarctica</option>
            <option>Antigua & Barbuda</option>
            <option>Argentina</option>
            <option>Armenia (Հայաստան)</option>
            <option>Aruba</option>
            <option>Ascension Island</option>
            <option>Australia</option>
            <option>Austria (Österreich)</option>
            <option>Azerbaijan (Azərbaycan)</option>
            <option>Bahamas</option>
            <option>Bahrain (‫البحرين‬‎)</option>
            <option>Bangladesh (বাংলাদেশ)</option>
            <option>Barbados</option>
            <option>Belarus (Беларусь)</option>
            <option>Belgium</option>
            <option>Belize</option>
            <option>Benin (Bénin)</option>
            <option>Bermuda</option>
            <option>Bhutan (འབྲུག)</option>
            <option>Bolivia</option>
            <option>Bosnia & Herzegovina (Bosna i Hercegovina)</option>
            <option>Botswana</option>
            <option>Bouvet Island</option>
            <option>Brazil (Brasil)</option>
            <option>British Indian Ocean Territory</option>
            <option>British Virgin Islands</option>
            <option>Brunei</option>
            <option>Bulgaria (България)</option>
            <option>Burkina Faso</option>
            <option>Burundi (Uburundi)</option>
            <option>Cambodia (កម្ពុជា)</option>
            <option>Cameroon (Cameroun)</option>
            <option>Canada</option>
            <option>Canary Islands (Canarias)</option>
            <option>Cape Verde (Kabu Verdi)</option>
            <option>Caribbean Netherlands</option>
            <option>Cayman Islands</option>
            <option>Central African Republic (République centrafricaine)</option>
            <option>Ceuta & Melilla (Ceuta y Melilla)</option>
            <option>Chad (Tchad)</option>
            <option>Chile</option>
            <option>China (中国)</option>
            <option>Christmas Island</option>
            <option>Clipperton Island</option>
            <option>Cocos (Keeling) Islands</option>
            <option>Colombia</option>
            <option>Comoros (‫جزر القمر‬‎)</option>
            <option>Congo - Brazzaville (Congo-Brazzaville)</option>
            <option>Congo - Kinshasa (Jamhuri ya Kidemokrasia ya Kongo)</option>
            <option>Cook Islands</option>
            <option>Costa Rica</option>
            <option>Côte d’Ivoire</option>
            <option>Croatia (Hrvatska)</option>
            <option>Cuba</option>
            <option>Curaçao</option>
            <option>Cyprus (Κύπρος)</option>
            <option>Czechia (Česko)</option>
            <option>Denmark (Danmark)</option>
            <option>Diego Garcia</option>
            <option>Djibouti</option>
            <option>Dominica</option>
            <option>Dominican Republic (República Dominicana)</option>
            <option>Ecuador</option>
            <option>Egypt (‫مصر‬‎)</option>
            <option>El Salvador</option>
            <option>Equatorial Guinea (Guinea Ecuatorial)</option>
            <option>Eritrea (ኤርትራ)</option>
            <option>Estonia (Eesti)</option>
            <option>Eswatini</option>
            <option>Ethiopia</option>
            <option>Falkland Islands (Islas Malvinas)</option>
            <option>Faroe Islands (Føroyar)</option>
            <option>Fiji</option>
            <option>Finland (Suomi)</option>
            <option>France</option>
            <option>French Guiana (Guyane française)</option>
            <option>French Polynesia (Polynésie française)</option>
            <option>French Southern Territories (Terres australes françaises)</option>
            <option>Gabon</option>
            <option>Gambia</option>
            <option>Georgia (საქართველო)</option>
            <option>Germany (Deutschland)</option>
            <option>Ghana (Gaana)</option>
            <option>Gibraltar</option>
            <option>Greece (Ελλάδα)</option>
            <option>Greenland (Kalaallit Nunaat)</option>
            <option>Grenada</option>
            <option>Guadeloupe</option>
            <option>Guam</option>
            <option>Guatemala</option>
            <option>Guernsey</option>
            <option>Guinea (Guinée)</option>
            <option>Guinea-Bissau (Guiné-Bissau)</option>
            <option>Guyana</option>
            <option>Haiti (Haïti)</option>
            <option>Heard & McDonald Islands</option>
            <option>Honduras</option>
            <option>Hong Kong (香港)</option>
            <option>Hungary (Magyarország)</option>
            <option>Iceland (Ísland)</option>
            <option>India (भारत)</option>
            <option>Indonesia</option>
            <option>Iran (‫ایران‬‎)</option>
            <option>Iraq (‫العراق‬‎)</option>
            <option>Ireland</option>
            <option>Isle of Man</option>
            <option>Israel (‫ישראל‬‎)</option>
            <option>Italy (Italia)</option>
            <option>Jamaica</option>
            <option>Japan (日本)</option>
            <option>Jersey</option>
            <option>Jordan (‫الأردن‬‎)</option>
            <option>Kazakhstan (Казахстан)</option>
            <option>Kenya</option>
            <option>Kiribati</option>
            <option>Kosovo (Kosovë)</option>
            <option>Kuwait (‫الكويت‬‎)</option>
            <option>Kyrgyzstan (Кыргызстан)</option>
            <option>Laos (ລາວ)</option>
            <option>Latvia (Latvija)</option>
            <option>Lebanon</option>
            <option>Lesotho</option>
            <option>Liberia</option>
            <option>Libya (‫ليبيا‬‎)</option>
            <option>Liechtenstein</option>
            <option>Lithuania (Lietuva)</option>
            <option>Luxembourg</option>
            <option>Macao (澳門)</option>
            <option>Madagascar (Madagasikara)</option>
            <option>Malawi</option>
            <option>Malaysia</option>
            <option>Maldives</option>
            <option>Mali</option>
            <option>Malta</option>
            <option>Marshall Islands</option>
            <option>Martinique</option>
            <option>Mauritania (‫موريتانيا‬‎)</option>
            <option>Mauritius (Moris)</option>
            <option>Mayotte</option>
            <option>Mexico (México)</option>
            <option>Micronesia</option>
            <option>Moldova (Republica Moldova)</option>
            <option>Monaco</option>
            <option>Mongolia (Монгол)</option>
            <option>Montenegro (Crna Gora)</option>
            <option>Montserrat</option>
            <option>Morocco</option>
            <option>Mozambique (Moçambique)</option>
            <option>Myanmar (Burma) (မြန်မာ)</option>
            <option>Namibia (Namibië)</option>
            <option>Nauru</option>
            <option>Nepal (नेपाल)</option>
            <option>Netherlands (Nederland)</option>
            <option>New Caledonia (Nouvelle-Calédonie)</option>
            <option>New Zealand</option>
            <option>Nicaragua</option>
            <option>Niger (Nijar)</option>
            <option>Nigeria</option>
            <option>Niue</option>
            <option>Norfolk Island</option>
            <option>Northern Mariana Islands</option>
            <option>North Korea (북한)</option>
            <option>North Macedonia (Северна Македонија)</option>
            <option>Norway (Norge)</option>
            <option>Oman (‫عُمان‬‎)</option>
            <option>Pakistan (‫پاکستان‬‎)</option>
            <option>Palau</option>
            <option>Palestine (‫فلسطين‬‎)</option>
            <option>Panama (Panamá)</option>
            <option>Papua New Guinea</option>
            <option>Paraguay</option>
            <option>Peru (Perú)</option>
            <option>Philippines</option>
            <option>Pitcairn Islands</option>
            <option>Poland (Polska)</option>
            <option>Portugal</option>
            <option>Puerto Rico</option>
            <option>Qatar (‫قطر‬‎)</option>
            <option>Réunion (La Réunion)</option>
            <option>Romania (România)</option>
            <option>Russia (Россия)</option>
            <option>Rwanda</option>
            <option>Samoa</option>
            <option>San Marino</option>
            <option>Sao Tome & Principe</option>
            <option>Saudi Arabia (‫المملكة العربية السعودية‬‎)</option>
            <option>Senegal (Sénégal)</option>
            <option>Serbia (Србија)</option>
            <option>Seychelles</option>
            <option>Sierra Leone</option>
            <option>Singapore</option>
            <option>Sint Eustatius</option>
            <option>Sint Maarten</option>
            <option>Slovakia (Slovensko)</option>
            <option>Slovenia (Slovenija)</option>
            <option>Solomon Islands</option>
            <option>Somalia (Soomaaliya)</option>
            <option>South Africa</option>
            <option>South Georgia & South Sandwich Islands</option>
            <option>South Korea (대한민국)</option>
            <option>South Sudan (‫جنوب السودان‬‎)</option>
            <option>Spain (España)</option>
            <option>Sri Lanka (ශ්‍රී ලංකා)</option>
            <option>St. Barthélemy</option>
            <option>St. Helena</option>
            <option>St. Kitts & Nevis</option>
            <option>St. Lucia</option>
            <option>St. Martin</option>
            <option>St. Pierre & Miquelon</option>
            <option>St. Vincent & Grenadines</option>
            <option>Sudan (‫السودان‬‎)</option>
            <option>Suriname</option>
            <option>Svalbard & Jan Mayen</option>
            <option>Sweden (Sverige)</option>
            <option>Switzerland (Schweiz)</option>
            <option>Syria (‫سوريا‬‎)</option>
            <option>Taiwan (台灣)</option>
            <option>Tajikistan</option>
            <option>Tanzania</option>
            <option>Thailand (ไทย)</option>
            <option>Timor-Leste</option>
            <option>Togo</option>
            <option>Tokelau</option>
            <option>Tonga</option>
            <option>Trinidad & Tobago</option>
            <option>Tunisia (‫تونس‬‎)</option>
            <option>Turkey (Türkiye)</option>
            <option>Turkmenistan</option>
            <option>Turks & Caicos Islands</option>
            <option>Tuvalu</option>
            <option>Uganda</option>
            <option>Ukraine (Україна)</option>
            <option>United Arab Emirates (‫الإمارات العربية المتحدة‬‎)</option>
            <option>United Kingdom</option>
            <option>United States</option>
            <option>Uruguay</option>
            <option>Uzbekistan (Oʻzbekiston)</option>
            <option>Vanuatu</option>
            <option>Vatican City (Città del Vaticano)</option>
            <option>Venezuela</option>
            <option>Vietnam (Việt Nam)</option>
            <option>Wallis & Futuna</option>
            <option>Western Sahara (‫الصحراء الغربية‬‎)</option>
            <option>Yemen (‫اليمن‬‎)</option>
            <option>Zambia</option>
            <option>Zimbabwe</option>
          </select>
        </div>






        {/* Date and Time Format */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Date Format</label>
          <select
            value={dateFormat}
            onChange={(e) => setDateFormat(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option>DD/MM/YYY</option>
            <option>MM/DD/YYYY</option>
            <option>YYYY-MM-DD</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Time Format</label>
          <select
            value={timeFormat}
            onChange={(e) => setTimeFormat(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option>1:00pm</option>
            <option>13:00</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Time Zones */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-6">Time zone</h1>
          <label className="block text-lg font-medium mb-2">Primary Time Zone</label>
          <select
            value={primaryTimeZone}
            onChange={(e) => setPrimaryTimeZone(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="GMT+05:30">(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
            <option value="GMT-12:00">(GMT-12:00) International Date Line West</option>
            <option value="GMT-11:00">(GMT-11:00) Midway Island, Samoa</option>
            <option value="GMT-10:00">(GMT-10:00) Hawaii</option>
            <option value="GMT-09:00">(GMT-09:00) Alaska</option>
            <option value="GMT-08:00">(GMT-08:00) Pacific Time (US & Canada)</option>
            <option value="GMT-07:00">(GMT-07:00) Mountain Time (US & Canada)</option>
            <option value="GMT-06:00">(GMT-06:00) Central Time (US & Canada)</option>
            <option value="GMT-05:00">(GMT-05:00) Eastern Time (US & Canada)</option>
            <option value="GMT-04:00">(GMT-04:00) Atlantic Time (Canada)</option>
            <option value="GMT-03:30">(GMT-03:30) Newfoundland</option>
            <option value="GMT-03:00">(GMT-03:00) Brazil, Buenos Aires, Georgetown</option>
            <option value="GMT-02:00">(GMT-02:00) Mid-Atlantic</option>
            <option value="GMT-01:00">(GMT-01:00) Azores, Cape Verde Islands</option>
            <option value="GMT+00:00">(GMT+00:00) Greenwich Mean Time: Dublin, Edinburgh, London</option>
            <option value="GMT+01:00">(GMT+01:00) Brussels, Copenhagen, Madrid, Paris</option>
            <option value="GMT+02:00">(GMT+02:00) Kaliningrad, South Africa</option>
            <option value="GMT+03:00">(GMT+03:00) Baghdad, Riyadh, Moscow, St. Petersburg</option>
            <option value="GMT+03:30">(GMT+03:30) Tehran</option>
            <option value="GMT+04:00">(GMT+04:00) Abu Dhabi, Muscat, Baku, Tbilisi</option>
            <option value="GMT+04:30">(GMT+04:30) Kabul</option>
            <option value="GMT+05:00">(GMT+05:00) Ekaterinburg, Islamabad, Karachi, Tashkent</option>
            <option value="GMT+05:45">(GMT+05:45) Kathmandu</option>
            <option value="GMT+06:00">(GMT+06:00) Almaty, Dhaka, Colombo</option>
            <option value="GMT+06:30">(GMT+06:30) Yangon (Rangoon)</option>
            <option value="GMT+07:00">(GMT+07:00) Bangkok, Hanoi, Jakarta</option>
            <option value="GMT+08:00">(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi</option>
            <option value="GMT+09:00">(GMT+09:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</option>
            <option value="GMT+09:30">(GMT+09:30) Adelaide, Darwin</option>
            <option value="GMT+10:00">(GMT+10:00) Brisbane, Canberra, Melbourne, Sydney</option>
            <option value="GMT+11:00">(GMT+11:00) Magadan, Solomon Islands, New Caledonia</option>
            <option value="GMT+12:00">(GMT+12:00) Auckland, Wellington, Fiji, Kamchatka</option>
            <option value="GMT+13:00">(GMT+13:00) Nuku'alofa</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Secondary Time Zone</label>
          <select
            value={secondaryTimeZone}
            onChange={(e) => setSecondaryTimeZone(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option>Not selected</option>
            <option value="GMT-12:00">(GMT-12:00) International Date Line West</option>
            <option value="GMT-11:00">(GMT-11:00) Midway Island, Samoa</option>
            <option value="GMT-10:00">(GMT-10:00) Hawaii</option>
            <option value="GMT-09:00">(GMT-09:00) Alaska</option>
            <option value="GMT-08:00">(GMT-08:00) Pacific Time (US & Canada)</option>
            <option value="GMT-07:00">(GMT-07:00) Mountain Time (US & Canada)</option>
            <option value="GMT-06:00">(GMT-06:00) Central Time (US & Canada)</option>
            <option value="GMT-05:00">(GMT-05:00) Eastern Time (US & Canada)</option>
            <option value="GMT-04:00">(GMT-04:00) Atlantic Time (Canada)</option>
            <option value="GMT-03:30">(GMT-03:30) Newfoundland</option>
            <option value="GMT-03:00">(GMT-03:00) Brazil, Buenos Aires, Georgetown</option>
            <option value="GMT-02:00">(GMT-02:00) Mid-Atlantic</option>
            <option value="GMT-01:00">(GMT-01:00) Azores, Cape Verde Islands</option>
            <option value="GMT+00:00">(GMT+00:00) Greenwich Mean Time: Dublin, Edinburgh, London</option>
            <option value="GMT+01:00">(GMT+01:00) Brussels, Copenhagen, Madrid, Paris</option>
            <option value="GMT+02:00">(GMT+02:00) Kaliningrad, South Africa</option>
            <option value="GMT+03:00">(GMT+03:00) Baghdad, Riyadh, Moscow, St. Petersburg</option>
            <option value="GMT+03:30">(GMT+03:30) Tehran</option>
            <option value="GMT+04:00">(GMT+04:00) Abu Dhabi, Muscat, Baku, Tbilisi</option>
            <option value="GMT+04:30">(GMT+04:30) Kabul</option>
            <option value="GMT+05:00">(GMT+05:00) Ekaterinburg, Islamabad, Karachi, Tashkent</option>
            <option value="GMT+05:30">(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
            <option value="GMT+05:45">(GMT+05:45) Kathmandu</option>
            <option value="GMT+06:00">(GMT+06:00) Almaty, Dhaka, Colombo</option>
            <option value="GMT+06:30">(GMT+06:30) Yangon (Rangoon)</option>
            <option value="GMT+07:00">(GMT+07:00) Bangkok, Hanoi, Jakarta</option>
            <option value="GMT+08:00">(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi</option>
            <option value="GMT+09:00">(GMT+09:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</option>
            <option value="GMT+09:30">(GMT+09:30) Adelaide, Darwin</option>
            <option value="GMT+10:00">(GMT+10:00) Brisbane, Canberra, Melbourne, Sydney</option>
            <option value="GMT+11:00">(GMT+11:00) Magadan, Solomon Islands, New Caledonia</option>
            <option value="GMT+12:00">(GMT+12:00) Auckland, Wellington, Fiji, Kamchatka</option>
            <option value="GMT+13:00">(GMT+13:00) Nuku'alofa</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <h1 className="text-2xl font-semibold mb-6">World clock</h1>

        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={showWorldClock}
              onChange={(e) => setShowWorldClock(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-lg">Show World Clock</span>
          </label>
        </div>
         <h1 className="text-2xl font-semibold mb-6">Event settings</h1>
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Default Duration (minutes)</label>
          <input
            type="number"
            value={defaultDuration}
            onChange={(e) => setDefaultDuration(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={speedyMeetings}
              onChange={(e) => setSpeedyMeetings(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-lg">Speedy Meetings (end early)</span>
          </label>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Guest Permissions</label>
          <select
            value={guestPermissions}
            onChange={(e) => setGuestPermissions(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option>Only if the sender is known</option>
            <option>Always allow</option>
            <option>Never allow</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={autoAddGoogleMeet}
              onChange={(e) => setAutoAddGoogleMeet(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-lg">Automatically add Google Meet video calls</span>
          </label>
        </div>
        <h1 className="text-2xl font-semibold mb-6">Notification settings</h1>

        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-lg">Enable Notifications</span>
          </label>
        </div>

        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={showSnoozedNotifications}
              onChange={(e) => setShowSnoozedNotifications(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-lg">Show Snoozed Notifications</span>
          </label>
        </div>

        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={playNotificationSounds}
              onChange={(e) => setPlayNotificationSounds(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-lg">Play Notification Sounds</span>
          </label>
        </div>

        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={notifyIfResponded}
              onChange={(e) => setNotifyIfResponded(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-lg">Notify If Responded</span>
          </label>
        </div>

        <h1 className="text-2xl font-semibold mb-6">View options</h1>
        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={showWeekends}
              onChange={(e) => setShowWeekends(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-lg">Show Weekends</span>
          </label>
        </div>

        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={showDeclinedEvents}
              onChange={(e) => setShowDeclinedEvents(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-lg">Show Declined Events</span>
          </label>
        </div>

        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={showCompletedTasks}
              onChange={(e) => setShowCompletedTasks(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-lg">Show Completed Tasks</span>
          </label>
        </div>

        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={showWeekNumbers}
              onChange={(e) => setShowWeekNumbers(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-lg">Show Week Numbers</span>
          </label>
        </div>

        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={shorterEventsSameSize}
              onChange={(e) => setShorterEventsSameSize(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-lg">Shorter Events Same Size</span>
          </label>
        </div>

        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={reduceBrightnessPastEvents}
              onChange={(e) => setReduceBrightnessPastEvents(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-lg">Reduce Brightness of Past Events</span>
          </label>
        </div>

        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={sideBySideCalendars}
              onChange={(e) => setSideBySideCalendars(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-lg">Display Calendars Side by Side</span>
          </label>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Start Week On</label>
          <select
            value={startWeekOn}
            onChange={(e) => setStartWeekOn(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option>Sunday</option>
            <option>Monday</option>
            <option>Saturday</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Custom View</label>
          <select
            value={customView}
            onChange={(e) => setCustomView(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option>1 day</option>
            <option>2 days</option>
            <option>3 days</option>
            <option>4 days</option>
            <option>5 days</option>
            <option>6 days</option>
            <option>7 days</option>
            <option>2 weeks</option>
            <option>3 weeks</option>
            <option>4 weeks</option>
            <option>Week</option>
            <option>Month</option>
          </select>
        </div>


        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Alternate Calendars</label>
          <select
            value={alternateCalendars}
            onChange={(e) => setAlternateCalendars(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option>None</option>
            <option>Chinese Simplified</option>
            <option>Chinese Traditional</option>
            <option>Hebrew</option>
            <option>Hijri - Civil</option>
            <option>Hijri - Kuwaiti</option>
            <option>Hijri - Saudi</option>
            <option>Indian - Hindu (Saka)</option>
            <option>Korean</option>
            <option>Persian</option>
          </select>
        </div>



        <h1 className="text-2xl font-semibold mb-6">Events from Gmail</h1>

        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={gmailEvents}
              onChange={(e) => setGmailEvents(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-lg">Show Gmail Events</span>
          </label>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Email Event Privacy</label>
          <select
            value={emailEventPrivacy}
            onChange={(e) => setEmailEventPrivacy(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option>Calendar default</option>
            <option>Private</option>
            <option>Only me</option>
          </select>
        </div>

        <h1 className="text-2xl font-semibold mb-6">Keyboard shortcuts</h1>
        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={keyboardShortcuts}
              onChange={(e) => setKeyboardShortcuts(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-lg">Enable Keyboard Shortcuts</span>
          </label>
        </div>

        {/* Save Changes Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;