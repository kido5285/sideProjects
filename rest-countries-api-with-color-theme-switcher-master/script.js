const iso2tofull = {
    'AF': 'Afghanistan',
    'AL': 'Albania',
    'DZ': 'Algeria',
    'AS': 'American Samoa',
    'AD': 'Andorra',
    'AO': 'Angola',
    'AI': 'Anguilla',
    'AQ': 'Antarctica',
    'AG': 'Antigua and Barbuda',
    'AR': 'Argentina',
    'AM': 'Armenia',
    'AW': 'Aruba',
    'AU': 'Australia',
    'AT': 'Austria',
    'AZ': 'Azerbaijan',
    'BS': 'Bahamas (the)',
    'BH': 'Bahrain',
    'BD': 'Bangladesh',
    'BB': 'Barbados',
    'BY': 'Belarus',
    'BE': 'Belgium',
    'BZ': 'Belize',
    'BJ': 'Benin',
    'BM': 'Bermuda',
    'BT': 'Bhutan',
    'BO': 'Bolivia (Plurinational State of)',
    'BQ': 'Bonaire, Sint Eustatius and Saba',
    'BA': 'Bosnia and Herzegovina',
    'BW': 'Botswana',
    'BV': 'Bouvet Island',
    'BR': 'Brazil',
    'IO': 'British Indian Ocean Territory (the)',
    'BN': 'Brunei Darussalam',
    'BG': 'Bulgaria',
    'BF': 'Burkina Faso',
    'BI': 'Burundi',
    'CV': 'Cabo Verde',
    'KH': 'Cambodia',
    'CM': 'Cameroon',
    'CA': 'Canada',
    'KY': 'Cayman Islands (the)',
    'CF': 'Central African Republic (the)',
    'TD': 'Chad',
    'CL': 'Chile',
    'CN': 'China',
    'CX': 'Christmas Island',
    'CC': 'Cocos (Keeling) Islands (the)',
    'CO': 'Colombia',
    'KM': 'Comoros (the)',
    'CD': 'Congo (the Democratic Republic of the)',
    'CG': 'Congo (the)',
    'CK': 'Cook Islands (the)',
    'CR': 'Costa Rica',
    'HR': 'Croatia',
    'CU': 'Cuba',
    'CW': 'Curaçao',
    'CY': 'Cyprus',
    'CZ': 'Czechia',
    'CI': "Côte d'Ivoire'",
    'DK': 'Denmark',
    'DJ': 'Djibouti',
    'DM': 'Dominica',
    'DO': 'Dominican Republic (the)',
    'EC': 'Ecuador',
    'EG': 'Egypt',
    'SV': 'El Salvador',
    'GQ': 'Equatorial Guinea',
    'ER': 'Eritrea',
    'EE': 'Estonia',
    'SZ': 'Eswatini',
    'ET': 'Ethiopia',
    'FK': 'Falkland Islands (the) [Malvinas]',
    'FO': 'Faroe Islands (the)',
    'FJ': 'Fiji',
    'FI': 'Finland',
    'FR': 'France',
    'GF': 'French Guiana',
    'PF': 'French Polynesia',
    'TF': 'French Southern Territories (the)',
    'GA': 'Gabon',
    'GM': 'Gambia (the)',
    'GE': 'Georgia',
    'DE': 'Germany',
    'GH': 'Ghana',
    'GI': 'Gibraltar',
    'GR': 'Greece',
    'GL': 'Greenland',
    'GD': 'Grenada',
    'GP': 'Guadeloupe',
    'GU': 'Guam',
    'GT': 'Guatemala',
    'GG': 'Guernsey',
    'GN': 'Guinea',
    'GW': 'Guinea-Bissau',
    'GY': 'Guyana',
    'HT': 'Haiti',
    'HM': 'Heard Island and McDonald Islands',
    'VA': 'Holy See (the)',
    'HN': 'Honduras',
    'HK': 'Hong Kong',
    'HU': 'Hungary',
    'IS': 'Iceland',
    'IN': 'India',
    'ID': 'Indonesia',
    'IR': 'Iran (Islamic Republic of)',
    'IQ': 'Iraq',
    'IE': 'Ireland',
    'IM': 'Isle of Man',
    'IL': 'Israel',
    'IT': 'Italy',
    'JM': 'Jamaica',
    'JP': 'Japan',
    'JE': 'Jersey',
    'JO': 'Jordan',
    'KZ': 'Kazakhstan',
    'KE': 'Kenya',
    'KI': 'Kiribati',
    'KP': "Korea (the Democratic People's Republic of)",
    'KR': 'Korea (the Republic of)',
    'KW': 'Kuwait',
    'KG': 'Kyrgyzstan',
    'LA': "Lao People's Democratic Republic (the)",
    'LV': 'Latvia',
    'LB': 'Lebanon',
    'LS': 'Lesotho',
    'LR': 'Liberia',
    'LY': 'Libya',
    'LI': 'Liechtenstein',
    'LT': 'Lithuania',
    'LU': 'Luxembourg',
    'MO': 'Macao',
    'MG': 'Madagascar',
    'MW': 'Malawi',
    'MY': 'Malaysia',
    'MV': 'Maldives',
    'ML': 'Mali',
    'MT': 'Malta',
    'MH': 'Marshall Islands (the)',
    'MQ': 'Martinique',
    'MR': 'Mauritania',
    'MU': 'Mauritius',
    'YT': 'Mayotte',
    'MX': 'Mexico',
    'FM': 'Micronesia (Federated States of)',
    'MD': 'Moldova (the Republic of)',
    'MC': 'Monaco',
    'MN': 'Mongolia',
    'ME': 'Montenegro',
    'MS': 'Montserrat',
    'MA': 'Morocco',
    'MZ': 'Mozambique',
    'MM': 'Myanmar',
    'NA': 'Namibia',
    'NR': 'Nauru',
    'NP': 'Nepal',
    'NL': 'Netherlands (the)',
    'NC': 'New Caledonia',
    'NZ': 'New Zealand',
    'NI': 'Nicaragua',
    'NE': 'Niger (the)',
    'NG': 'Nigeria',
    'NU': 'Niue',
    'NF': 'Norfolk Island',
    'MP': 'Northern Mariana Islands (the)',
    'NO': 'Norway',
    'OM': 'Oman',
    'PK': 'Pakistan',
    'PW': 'Palau',
    'PS': 'Palestine, State of',
    'PA': 'Panama',
    'PG': 'Papua New Guinea',
    'PY': 'Paraguay',
    'PE': 'Peru',
    'PH': 'Philippines (the)',
    'PN': 'Pitcairn',
    'PL': 'Poland',
    'PT': 'Portugal',
    'PR': 'Puerto Rico',
    'QA': 'Qatar',
    'MK': 'Republic of North Macedonia',
    'RO': 'Romania',
    'RU': 'Russian Federation (the)',
    'RW': 'Rwanda',
    'RE': 'Réunion',
    'BL': 'Saint Barthélemy',
    'SH': 'Saint Helena, Ascension and Tristan da Cunha',
    'KN': 'Saint Kitts and Nevis',
    'LC': 'Saint Lucia',
    'MF': 'Saint Martin (French part)',
    'PM': 'Saint Pierre and Miquelon',
    'VC': 'Saint Vincent and the Grenadines',
    'WS': 'Samoa',
    'SM': 'San Marino',
    'ST': 'Sao Tome and Principe',
    'SA': 'Saudi Arabia',
    'SN': 'Senegal',
    'RS': 'Serbia',
    'SC': 'Seychelles',
    'SL': 'Sierra Leone',
    'SG': 'Singapore',
    'SX': 'Sint Maarten (Dutch part)',
    'SK': 'Slovakia',
    'SI': 'Slovenia',
    'SB': 'Solomon Islands',
    'SO': 'Somalia',
    'ZA': 'South Africa',
    'GS': 'South Georgia and the South Sandwich Islands',
    'SS': 'South Sudan',
    'ES': 'Spain',
    'LK': 'Sri Lanka',
    'SD': 'Sudan (the)',
    'SR': 'Suriname',
    'SJ': 'Svalbard and Jan Mayen',
    'SE': 'Sweden',
    'CH': 'Switzerland',
    'SY': 'Syrian Arab Republic',
    'TW': 'Taiwan (Province of China)',
    'TJ': 'Tajikistan',
    'TZ': 'Tanzania, United Republic of',
    'TH': 'Thailand',
    'TL': 'Timor-Leste',
    'TG': 'Togo',
    'TK': 'Tokelau',
    'TO': 'Tonga',
    'TT': 'Trinidad and Tobago',
    'TN': 'Tunisia',
    'TR': 'Turkey',
    'TM': 'Turkmenistan',
    'TC': 'Turks and Caicos Islands (the)',
    'TV': 'Tuvalu',
    'UG': 'Uganda',
    'UA': 'Ukraine',
    'AE': 'United Arab Emirates (the)',
    'GB': 'United Kingdom of Great Britain and Northern Ireland (the)',
    'UM': 'United States Minor Outlying Islands (the)',
    'US': "United States of America (the')",
    'UY': 'Uruguay',
    'UZ': 'Uzbekistan',
    'VU': 'Vanuatu',
    'VE': 'Venezuela (Bolivarian Republic of)',
    'VN': 'Viet Nam',
    'VG': 'Virgin Islands (British)',
    'VI': 'Virgin Islands (U.S.)',
    'WF': 'Wallis and Futuna',
    'EH': 'Western Sahara',
    'YE': 'Yemen',
    'ZM': 'Zambia',
    'ZW': 'Zimbabwe',
    'AX': 'Åland Islands'
}

const iso3tofull = {
    'AFG': "Afghanistan",	
    'ALB': "Albania",	
    'DZA': "Algeria",	
    'ASM': "American Samoa",	
    'AND': "Andorra",	
    'AGO': "Angola",	
    'AIA': "Anguilla",	
    'ATA': "Antarctica",	
    'ATG': "Antigua and Barbuda",	
    'ARG': "Argentina",	
    'ARM': "Armenia",	
    'ABW': "Aruba",	
    'AUS': "Australia",	
    'AUT': "Austria",	
    'AZE': "Azerbaijan",	
    'BHS': "Bahamas (the)",	
    'BHR': "Bahrain",	
    'BGD': "Bangladesh",	
    'BRB': "Barbados",	
    'BLR': "Belarus",	
    'BEL': "Belgium",	
    'BLZ': "Belize",	
    'BEN': "Benin",	
    'BMU': "Bermuda",	
    'BTN': "Bhutan",	
    'BOL': "Bolivia (Plurinational State of)",	
    'BES': "Bonaire, Sint Eustatius and Saba",	
    'BIH': "Bosnia and Herzegovina",	
    'BWA': "Botswana",	
    'BVT': "Bouvet Island",	
    'BRA': "Brazil",	
    'IOT': "British Indian Ocean Territory (the)",	
    'BRN': "Brunei Darussalam",	
    'BGR': "Bulgaria",	
    'BFA': "Burkina Faso",	
    'BDI': "Burundi",	
    'CPV': "Cabo Verde",	
    'KHM': "Cambodia",	
    'CMR': "Cameroon",	
    'CAN': "Canada",	
    'CYM': "Cayman Islands (the)",	
    'CAF': "Central African Republic (the)",	
    'TCD': "Chad",	
    'CHL': "Chile",	
    'CHN': "China",	
    'CXR': "Christmas Island",	
    'CCK': "Cocos (Keeling) Islands (the)",	
    'COL': "Colombia",	
    'COM': "Comoros (the)",	
    'COD': "Congo (the Democratic Republic of the)",	
    'COG': "Congo (the)",	
    'COK': "Cook Islands (the)",	
    'CRI': "Costa Rica",	
    'HRV': "Croatia",	
    'CUB': "Cuba",	
    'CUW': "Curaçao",	
    'CYP': "Cyprus",	
    'CZE': "Czechia",	
    'CIV': "Côte d'Ivoire",	
    'DNK': "Denmark",	
    'DJI': "Djibouti",	
    'DMA': "Dominica",	
    'DOM': "Dominican Republic (the)",	
    'ECU': "Ecuador",	
    'EGY': "Egypt",	
    'SLV': "El Salvador",	
    'GNQ': "Equatorial Guinea",	
    'ERI': "Eritrea",	
    'EST': "Estonia",	
    'SWZ': "Eswatini",	
    'ETH': "Ethiopia",	
    'FLK': "Falkland Islands (the) [Malvinas]",	
    'FRO': "Faroe Islands (the)",	
    'FJI': "Fiji",	
    'FIN': "Finland",	
    'FRA': "France",	
    'GUF': "French Guiana",	
    'PYF': "French Polynesia",	
    'ATF': "French Southern Territories (the)",	
    'GAB': "Gabon",	
    'GMB': "Gambia (the)",	
    'GEO': "Georgia",	
    'DEU': "Germany",	
    'GHA': "Ghana",	
    'GIB': "Gibraltar",	
    'GRC': "Greece",	
    'GRL': "Greenland",	
    'GRD': "Grenada",	
    'GLP': "Guadeloupe",	
    'GUM': "Guam",	
    'GTM': "Guatemala",	
    'GGY': "Guernsey",	
    'GIN': "Guinea",	
    'GNB': "Guinea-Bissau",	
    'GUY': "Guyana",	
    'HTI': "Haiti",	
    'HMD': "Heard Island and McDonald Islands",	
    'VAT': "Holy See (the)",	
    'HND': "Honduras",	
    'HKG': "Hong Kong",	
    'HUN': "Hungary",	
    'ISL': "Iceland",	
    'IND': "India",	
    'IDN': "Indonesia",	
    'IRN': "Iran (Islamic Republic of)",	
    'IRQ': "Iraq",	
    'IRL': "Ireland",	
    'IMN': "Isle of Man",	
    'ISR': "Israel",	
    'ITA': "Italy",	
    'JAM': "Jamaica",	
    'JPN': "Japan",	
    'JEY': "Jersey",	
    'JOR': "Jordan",	
    'KAZ': "Kazakhstan",	
    'KEN': "Kenya",	
    'KIR': "Kiribati",	
    'PRK': "Korea (the Democratic People's Republic of)",	
    'KOR': "Korea (the Republic of)",	
    'KWT': "Kuwait",	
    'KGZ': "Kyrgyzstan",	
    'LAO': "Lao People's Democratic Republic (the)",	
    'LVA': "Latvia",	
    'LBN': "Lebanon",	
    'LSO': "Lesotho",	
    'LBR': "Liberia",	
    'LBY': "Libya",	
    'LIE': "Liechtenstein",	
    'LTU': "Lithuania",	
    'LUX': "Luxembourg",	
    'MAC': "Macao",	
    'MDG': "Madagascar",	
    'MWI': "Malawi",	
    'MYS': "Malaysia",	
    'MDV': "Maldives",	
    'MLI': "Mali",	
    'MLT': "Malta",	
    'MHL': "Marshall Islands (the)",	
    'MTQ': "Martinique",	
    'MRT': "Mauritania",	
    'MUS': "Mauritius",	
    'MYT': "Mayotte",	
    'MEX': "Mexico",	
    'FSM': "Micronesia (Federated States of)",	
    'MDA': "Moldova (the Republic of)",	
    'MCO': "Monaco",	
    'MNG': "Mongolia",	
    'MNE': "Montenegro",	
    'MSR': "Montserrat",	
    'MAR': "Morocco",	
    'MOZ': "Mozambique",	
    'MMR': "Myanmar",	
    'NAM': "Namibia",	
    'NRU': "Nauru",	
    'NPL': "Nepal",	
    'NLD': "Netherlands (the)",	
    'NCL': "New Caledonia",	
    'NZL': "New Zealand",	
    'NIC': "Nicaragua",	
    'NER': "Niger (the)",	
    'NGA': "Nigeria",	
    'NIU': "Niue",	
    'NFK': "Norfolk Island",	
    'MNP': "Northern Mariana Islands (the)",	
    'NOR': "Norway",	
    'OMN': "Oman",	
    'PAK': "Pakistan",	
    'PLW': "Palau",	
    'PSE': "Palestine, State of",	
    'PAN': "Panama",	
    'PNG': "Papua New Guinea",	
    'PRY': "Paraguay",	
    'PER': "Peru",	
    'PHL': "Philippines (the)",	
    'PCN': "Pitcairn",	
    'POL': "Poland",	
    'PRT': "Portugal",	
    'PRI': "Puerto Rico",	
    'QAT': "Qatar",	
    'MKD': "Republic of North Macedonia",	
    'ROU': "Romania",	
    'RUS': "Russian Federation (the)",	
    'RWA': "Rwanda",	
    'REU': "Réunion",	
    'BLM': "Saint Barthélemy",	
    'SHN': "Saint Helena, Ascension and Tristan da Cunha",	
    'KNA': "Saint Kitts and Nevis",	
    'LCA': "Saint Lucia",	
    'MAF': "Saint Martin (French part)",	
    'SPM': "Saint Pierre and Miquelon",	
    'VCT': "Saint Vincent and the Grenadines",	
    'WSM': "Samoa",	
    'SMR': "San Marino",	
    'STP': "Sao Tome and Principe",	
    'SAU': "Saudi Arabia",	
    'SEN': "Senegal",	
    'SRB': "Serbia",	
    'SYC': "Seychelles",	
    'SLE': "Sierra Leone",	
    'SGP': "Singapore",	
    'SXM': "Sint Maarten (Dutch part)",	
    'SVK': "Slovakia",	
    'SVN': "Slovenia",	
    'SLB': "Solomon Islands",	
    'SOM': "Somalia",	
    'ZAF': "South Africa",	
    'SGS': "South Georgia and the South Sandwich Islands",	
    'SSD': "South Sudan",	
    'ESP': "Spain",	
    'LKA': "Sri Lanka",	
    'SDN': "Sudan (the)",	
    'SUR': "Suriname",	
    'SJM': "Svalbard and Jan Mayen",	
    'SWE': "Sweden",	
    'CHE': "Switzerland",	
    'SYR': "Syrian Arab Republic",	
    'TWN': "Taiwan (Province of China)",	
    'TJK': "Tajikistan",	
    'TZA': "Tanzania, United Republic of",	
    'THA': "Thailand",	
    'TLS': "Timor-Leste",	
    'TGO': "Togo",	
    'TKL': "Tokelau",	
    'TON': "Tonga",	
    'TTO': "Trinidad and Tobago",	
    'TUN': "Tunisia",	
    'TUR': "Turkey",	
    'TKM': "Turkmenistan",	
    'TCA': "Turks and Caicos Islands (the)",	
    'TUV': "Tuvalu",	
    'UGA': "Uganda",	
    'UKR': "Ukraine",	
    'ARE': "United Arab Emirates (the)",	
    'GBR': "United Kingdom of Great Britain and Northern Ireland (the)",	
    'UMI': "United States Minor Outlying Islands (the)",
    'USA': "United States of America (the)",
    'URY': "Uruguay",
    'UZB': "Uzbekistan",
    'VUT': "Vanuatu",
    'VEN': "Venezuela (Bolivarian Republic of)",
    'VNM': "Viet Nam",
    'VGB': "Virgin Islands (British)",
    'VIR': "Virgin Islands (U.S.)",
    'WLF': "Wallis and Futuna",
    'ESH': "Western Sahara",
    'YEM': "Yemen",
    'ZMB': "Zambia",
    'ZWE': "Zimbabwe",
    'ALA': "Åland Islands"	
}

const languageiso2tofull = {
    'aa':'Afar',
    'ab':'Abkhazian',
    'ae':'Avestan',
    'af':'Afrikaans',
    'ak':'Akan',
    'am':'Amharic',
    'an':'Aragonese',
    'ar':'Arabic',
    'as':'Assamese',
    'av':'Avaric',
    'ay':'Aymara',
    'az':'Azerbaijani',
    'ba':'Bashkir',
    'be':'Belarusian',
    'bg':'Bulgarian',
    'bh':'Bihari languages',
    'bi':'Bislama',
    'bm':'Bambara',
    'bn':'Bengali',
    'bo':'Tibetan',
    'br':'Breton',
    'bs':'Bosnian',
    'ca':'Catalan; Valencian',
    'ce':'Chechen',
    'ch':'Chamorro',
    'co':'Corsican',
    'cr':'Cree',
    'cs':'Czech',
    'cu':'Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic',
    'cv':'Chuvash',
    'cy':'Welsh',
    'da':'Danish',
    'de':'German',
    'dv':'Divehi; Dhivehi; Maldivian',
    'dz':'Dzongkha',
    'ee':'Ewe',
    'el':'"Greek, Modern (1453-)"',
    'en':'English',
    'eo':'Esperanto',
    'es':'Spanish; Castilian',
    'et':'Estonian',
    'eu':'Basque',
    'fa':'Persian',
    'ff':'Fulah',
    'fi':'Finnish',
    'fj':'Fijian',
    'fo':'Faroese',
    'fr':'French',
    'fy':'Western Frisian',
    'ga':'Irish',
    'gd':'Gaelic; Scottish Gaelic',
    'gl':'Galician',
    'gn':'Guarani',
    'gu':'Gujarati',
    'gv':'Manx',
    'ha':'Hausa',
    'he':'Hebrew',
    'hi':'Hindi',
    'ho':'Hiri Motu',
    'hr':'Croatian',
    'ht':'Haitian; Haitian Creole',
    'hu':'Hungarian',
    'hy':'Armenian',
    'hz':'Herero',
    'ia':'Interlingua (International Auxiliary Language Association)',
    'id':'Indonesian',
    'ie':'Interlingue; Occidental',
    'ig':'Igbo',
    'ii':'Sichuan Yi; Nuosu',
    'ik':'Inupiaq',
    'io':'Ido',
    'is':'Icelandic',
    'it':'Italian',
    'iu':'Inuktitut',
    'ja':'Japanese',
    'jv':'Javanese',
    'ka':'Georgian',
    'kg':'Kongo',
    'ki':'Kikuyu; Gikuyu',
    'kj':'Kuanyama; Kwanyama',
    'kk':'Kazakh',
    'kl':'Kalaallisut; Greenlandic',
    'km':'Central Khmer',
    'kn':'Kannada',
    'ko':'Korean',
    'kr':'Kanuri',
    'ks':'Kashmiri',
    'ku':'Kurdish',
    'kv':'Komi',
    'kw':'Cornish',
    'ky':'Kirghiz; Kyrgyz',
    'la':'Latin',
    'lb':'Luxembourgish; Letzeburgesch',
    'lg':'Ganda',
    'li':'Limburgan; Limburger; Limburgish',
    'ln':'Lingala',
    'lo':'Lao',
    'lt':'Lithuanian',
    'lu':'Luba-Katanga',
    'lv':'Latvian',
    'mg':'Malagasy',
    'mh':'Marshallese',
    'mi':'Maori',
    'mk':'Macedonian',
    'ml':'Malayalam',
    'mn':'Mongolian',
    'mr':'Marathi',
    'ms':'Malay',
    'mt':'Maltese',
    'my':'Burmese',
    'na':'Nauru',
    'nb':'"Bokmål, Norwegian; Norwegian Bokmål"',
    'nd':'"Ndebele, North; North Ndebele"',
    'ne':'Nepali',
    'ng':'Ndonga',
    'nl':'Dutch; Flemish',
    'nn':'"Norwegian Nynorsk; Nynorsk, Norwegian"',
    'no':'Norwegian',
    'nr':'"Ndebele, South; South Ndebele"',
    'nv':'Navajo; Navaho',
    'ny':'Chichewa; Chewa; Nyanja',
    'oc':'Occitan (post 1500)',
    'oj':'Ojibwa',
    'om':'Oromo',
    'or':'Oriya',
    'os':'Ossetian; Ossetic',
    'pa':'Panjabi; Punjabi',
    'pi':'Pali',
    'pl':'Polish',
    'ps':'Pushto; Pashto',
    'pt':'Portuguese',
    'qu':'Quechua',
    'rm':'Romansh',
    'rn':'Rundi',
    'ro':'Romanian; Moldavian; Moldovan',
    'ru':'Russian',
    'rw':'Kinyarwanda',
    'sa':'Sanskrit',
    'sc':'Sardinian',
    'sd':'Sindhi',
    'se':'Northern Sami',
    'sg':'Sango',
    'si':'Sinhala; Sinhalese',
    'sk':'Slovak',
    'sl':'Slovenian',
    'sm':'Samoan',
    'sn':'Shona',
    'so':'Somali',
    'sq':'Albanian',
    'sr':'Serbian',
    'ss':'Swati',
    'st':'"Sotho, Southern"',
    'su':'Sundanese',
    'sv':'Swedish',
    'sw':'Swahili',
    'ta':'Tamil',
    'te':'Telugu',
    'tg':'Tajik',
    'th':'Thai',
    'ti':'Tigrinya',
    'tk':'Turkmen',
    'tl':'Tagalog',
    'tn':'Tswana',
    'to':'Tonga (Tonga Islands)',
    'tr':'Turkish',
    'ts':'Tsonga',
    'tt':'Tatar',
    'tw':'Twi',
    'ty':'Tahitian',
    'ug':'Uighur; Uyghur',
    'uk':'Ukrainian',
    'ur':'Urdu',
    'uz':'Uzbek',
    've':'Venda',
    'vi':'Vietnamese',
    'vo':'Volapük',
    'wa':'Walloon',
    'wo':'Wolof',
    'xh':'Xhosa',
    'yi':'Yiddish',
    'yo':'Yoruba',
    'za':'Zhuang; Chuang',
    'zh':'Chinese',
    'zu':'Zulu'
}

function iso2ToFull(key) {
    if(iso2tofull.hasOwnProperty(key.toUpperCase())) {
        return iso2tofull[key.toUpperCase()];
    } else {
        return key;
    }
}

function iso3ToFull(key) {
    if(iso3tofull.hasOwnProperty(key.toUpperCase())) {
        return iso3tofull[key.toUpperCase()];
    } else {
        return key;
    }
}

function ArrIso2ToFull(arr) {
    var fullkey = '';
    if(arr.length > 1) {
        arr.forEach((key, index) => {
            if(index > 0) {
                if(iso2tofull.hasOwnProperty(key.toUpperCase())) {
                    fullkey += ', ' + iso2tofull[key.toUpperCase()];
                } 
            } else {
                if(iso2tofull.hasOwnProperty(key.toUpperCase())) {
                    fullkey += iso2tofull[key.toUpperCase()];
                }
            }
        })
    } else if(arr.length == 1) {
        fullkey = iso2tofull[arr[0].toUpperCase()];
    }
    return fullkey;
}

function languageArrIso2ToFull(arr) {
    var fullkey = '';
    if(arr.length > 1) {
        arr.forEach((key, index) => {
            if(index > 0) {
                if(languageiso2tofull.hasOwnProperty(key.toLowerCase())) {
                    fullkey += ', ' + languageiso2tofull[key.toLowerCase()];
                } 
            } else {
                if(languageiso2tofull.hasOwnProperty(key.toLowerCase())) {
                    fullkey += languageiso2tofull[key.toLowerCase()];
                }
            }
        })
    } else if(arr.length == 1) {
        fullkey = languageiso2tofull[arr[0].toLowerCase()];
    }
    return fullkey;
}

function ArrIso3ToFull(arr) {
    var fullkey = '';
    arr.forEach((key, index) => {
        if(index > 0) {
            if(iso3tofull.hasOwnProperty(key.toUpperCase())) {
                fullkey += ', ' + iso3tofull[key.toUpperCase()];
            } 
        } else {
            if(iso2tofull.hasOwnProperty(key.toUpperCase())) {
                fullkey += iso3tofull[key.toUpperCase()];
            }
        }
    })
    return  fullkey;
}



function api(link) {
    fetch(link)
    .then(response => response.json())
    .then(data => {
        console.log(data.length, data)
        var theData = '';
        if(data.hasOwnProperty('message')) {
            document.querySelector('.page1').innerHTML = 'No result:('
        } else {
            data.forEach(data => {
                theData += `
                <div class="country" onclick='detail(this)'>
                     <div class="hidden-data" style="display: none;">${theData}</div>
                     <img src="https://flagcdn.com/w320/${data.alpha2Code.toLowerCase()}.png"> 
                     <div class="info">
                         <span class="name">${data.name}</span>
                         <span class="key">Population<span class="value">: ${numberWithCommas(data.population)}</span></span>
                         <span class="key">Region<span class="value">: ${data.region}</span></span>
                         <span class="key">Capital<span class="value">: ${data.capital}</span></span>
                     </div>
                </div>`
                document.querySelector('.page1').innerHTML = theData;
            })
        }
    })
}

function search(value) {
    setTimeout(() => {
        var element = document.querySelector('.real-page1'),
        style = window.getComputedStyle(element),
        background = style.getPropertyValue('background-color');
        if(background === 'rgb(250, 250, 250)') {
            Array.from(document.querySelectorAll('.country')).forEach(elem => elem.classList.remove('dark'));
        } else {
            Array.from(document.querySelectorAll('.country')).forEach(elem => elem.classList.add('dark'));
        }
    }, 1000)
    var theFullData = '';
    if(value.trim() === '') {
        firstLoadapi();
    } else {
        fetch(`https://restcountries.eu/rest/v2/name/${value.trim()}`)
        .then(response => response.json())
        .then(data => {
            if(data.status == 404) {
                theFullData = 'No result:('
                document.querySelector('.page1').innerHTML = theFullData;
            } else {
                data.forEach(data => {
                    var theData = JSON.stringify(data);
                    theFullData += 
                    `
                    <div class="country" onclick='detail(this)'>
                         <div class="hidden-data" style="display: none;">${theData}</div>
                         <img src="https://flagcdn.com/w320/${data.alpha2Code.toLowerCase()}.png"> 
                         <div class="info">
                             <span class="name">${data.name}</span>
                             <span class="key">Population<span class="value">: ${numberWithCommas(data.population)}</span></span>
                             <span class="key">Region<span class="value">: ${data.region}</span></span>
                             <span class="key">Capital<span class="value">: ${data.capital}</span></span>
                         </div>
                    </div>
                    `
                    document.querySelector('.page1').innerHTML = theFullData;
                })
            }
        })
    }
}

function firstLoadapi() {
    var fulldata = '';
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(response => response.json())
    .then(thedata => thedata.forEach(data => {
            var theData = JSON.stringify(data)
            fulldata += `
            <div class="country" onclick='detail(this)'>
                 <div class="hidden-data" style="display: none;">${theData}</div>
                 <img src="https://flagcdn.com/w320/${data.alpha2Code.toLowerCase()}.png"> 
                 <div class="info">
                     <span class="name">${data.name}</span>
                     <span class="key">Population<span class="value">: ${numberWithCommas(data.population)}</span></span>
                     <span class="key">Region<span class="value">: ${data.region}</span></span>
                     <span class="key">Capital<span class="value">: ${data.capital}</span></span>
                 </div>
            </div>`
            document.querySelector('.page1').innerHTML = fulldata;
        })
    )
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

firstLoadapi('https://restcountries.eu/rest/v1/all/');


function Validate() {
    var val = document.querySelector('.searchbar').value;

    if (!val.match(/^[a-zA-Z]+$/)) 
    {

        return false;
    }

    return true;
}

function area() {
    if(document.querySelector('.choices').classList.contains('selected')) {
        document.querySelector('.choices').classList.remove('selected');
        document.querySelector('.selections i').style.transform = 'rotate(0deg)'
        document.querySelector('.row1 .choices').style.pointerEvents = 'none';
    } else {
        document.querySelector('.choices').classList.add('selected');
        document.querySelector('.selections i').style.transform = 'rotate(180deg)';
        document.querySelector('.row1 .choices').style.pointerEvents = 'auto';
    }
}

function detail(obj) {
    var data = JSON.parse(obj.querySelector('.hidden-data').innerHTML);
    var languages = [];
    data.languages.forEach(language => languages.push(language.iso639_1))
    var currencies = [];
    data.currencies.forEach(currency => currencies.push(currency.code + currency.symbol))
    document.querySelector('.real-page1').style.display = 'none';
    document.querySelector('.real-page2').style.display = 'block';
    var page2 = document.querySelector('.real-page2');
    var flagHolder = page2.querySelector('.row2 .column1');
    flagHolder.innerHTML = `<img src="https://flagcdn.com/w320/${data.alpha2Code.toLowerCase()}.png">`
    page2.querySelector('.name').innerHTML = data.name;
    page2.querySelector('.native-name .value').innerHTML = ` ${data.nativeName}`;
    page2.querySelector('.population .value').innerHTML = ` ${numberWithCommas(data.population)}`;
    page2.querySelector('.region .value').innerHTML = ` ${data.region}`;
    page2.querySelector('.sub-region .value').innerHTML = ` ${data.subregion}`;
    page2.querySelector('.capital .value').innerHTML = ` ${data.capital}`;
    page2.querySelector('.top-level-domain .value').innerHTML = ` ${data.topLevelDomain.join(', ')}`;
    page2.querySelector('.currencies .value').innerHTML = ` ${currencies}`;
    page2.querySelector('.languages .value').innerHTML = ` ${languageArrIso2ToFull(languages)}`;
    
    console.log( data, data.languages, data.currencies) 
    if(data.borders.length > 0) {
        data.borders.forEach((border, index) => {
            if(index == 0) {
                page2.querySelector('.borders').innerHTML = `<div class="border" onclick="borders('${iso3ToFull(border)}')">${iso3ToFull(border)}</div>`;
            } else {
                page2.querySelector('.borders').innerHTML += `<div class="border" onclick="borders('${iso3ToFull(border)}')">${iso3ToFull(border)}</div>`;
            }
        })
    } else {
        page2.querySelector('.borders').innerHTML = 'No borders';
    }
}

function back() {
    document.querySelector('.real-page1').style.display = 'block';
    document.querySelector('.real-page2').style.display = 'none';
}

function borders(name) {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => response.json())
    .then(data => data.forEach(data => {
        var languages = [];
        data.languages.forEach(language => languages.push(language.iso639_1))
        var currencies = [];
        data.currencies.forEach(currency => currencies.push(currency.code + currency.symbol))
        document.querySelector('.real-page1').style.display = 'none';
        document.querySelector('.real-page2').style.display = 'block';
        var page2 = document.querySelector('.real-page2');
        var flagHolder = page2.querySelector('.row2 .column1');
        flagHolder.innerHTML = `<img src="https://flagcdn.com/w320/${data.alpha2Code.toLowerCase()}.png">`
        page2.querySelector('.name').innerHTML = data.name;
        page2.querySelector('.native-name .value').innerHTML = ` ${data.nativeName}`;
        page2.querySelector('.population .value').innerHTML = ` ${numberWithCommas(data.population)}`;
        page2.querySelector('.region .value').innerHTML = ` ${data.region}`;
        page2.querySelector('.sub-region .value').innerHTML = ` ${data.subregion}`;
        page2.querySelector('.capital .value').innerHTML = ` ${data.capital}`;
        page2.querySelector('.top-level-domain .value').innerHTML = ` ${data.topLevelDomain.join(', ')}`;
        page2.querySelector('.currencies .value').innerHTML = ` ${currencies}`;
        page2.querySelector('.languages .value').innerHTML = ` ${languageArrIso2ToFull(languages)}`;
        if(data.borders.length > 0) {
            data.borders.forEach((border, index) => {
                if(index == 0) {
                    page2.querySelector('.borders').innerHTML = `<div class="border" onclick="borders('${iso3ToFull(border)}')">${iso3ToFull(border)}</div>`;
                } else {
                    page2.querySelector('.borders').innerHTML += `<div class="border" onclick="borders('${iso3ToFull(border)}')">${iso3ToFull(border)}</div>`;
                }
            })
        } else {
            page2.querySelector('.borders').innerHTML = 'No borders';
        }
    }))
}

function filterRegion(region) {
    var fulldata = '';
    fetch(`https://restcountries.eu/rest/v2/region/${region}`)
    .then(response => response.json())
    .then(thedata => thedata.forEach(data => {
            var theData = JSON.stringify(data)
            fulldata += `
            <div class="country" onclick='detail(this)'>
                 <div class="hidden-data" style="display: none;">${theData}</div>
                 <img src="https://flagcdn.com/w320/${data.alpha2Code.toLowerCase()}.png"> 
                 <div class="info">
                     <span class="name">${data.name}</span>
                     <span class="key">Population<span class="value">: ${numberWithCommas(data.population)}</span></span>
                     <span class="key">Region<span class="value">: ${data.region}</span></span>
                     <span class="key">Capital<span class="value">: ${data.capital}</span></span>
                 </div>
            </div>`
            document.querySelector('.page1').innerHTML = fulldata;
        })
    )
    setTimeout(() => {
        var element = document.querySelector('.real-page1'),
        style = window.getComputedStyle(element),
        background = style.getPropertyValue('background-color');
        if(background === 'rgb(250, 250, 250)') {
            Array.from(document.querySelectorAll('.country')).forEach(elem => elem.classList.remove('dark'));
        } else {
            Array.from(document.querySelectorAll('.country')).forEach(elem => elem.classList.add('dark'));
        }
    }, 1000)
}

function theme(obj) {
    var icon = obj.querySelector('i')
    var element = document.querySelector('.real-page1'),
    style = window.getComputedStyle(element),
    background = style.getPropertyValue('background-color');
    if(background === 'rgb(250, 250, 250)') {
        icon.style.color = 'rgb(255, 255, 255)';
        obj.querySelector('#mode').style.color = '#fff';
        element.style.background = '#000';
        document.querySelector('nav').style.backgroundColor = 'hsl(207, 26%, 17%)';
        document.querySelector('nav').style.color = '#fff';
        document.querySelector('.searchbar').style.color ='#fff';
        document.querySelector('.searchbar').style.backgroundColor = 'hsl(207, 26%, 17%)';
        document.querySelector('.searchbar').classList.add('placeHolder');
        document.querySelector('.typebox i').style.color = '#fff';
        document.querySelector('.typebox').style.backgroundColor = 'hsl(207, 26%, 17%)';
        document.querySelector('.row1 .selections').style.backgroundColor = 'hsl(207, 26%, 17%)';
        document.querySelector('.row1 .selections').style.color = '#fff';
        document.querySelector('.row1 .choices').style.backgroundColor = 'hsl(207, 26%, 17%)';
        document.querySelector('.row1 .choices').style.color = '#fff';
        Array.from(document.querySelectorAll('.country')).forEach(elem => elem.classList.add('dark'));
        document.querySelector('.real-page2').style.backgroundColor = 'hsl(200, 15%, 8%)';       
        document.querySelector('.real-page2 button').style.backgroundColor = 'hsl(207, 26%, 17%)';
        document.querySelector('.real-page2 button').style.color = '#fff';
        document.querySelector('.real-page2 button i').style.color = '#fff';
        document.querySelector('.real-page2').style.color = '#fff';   
        Array.from(document.querySelectorAll('.real-page2 .border')).forEach(border => border.style.backgroundColor = 'hsl(207, 26%, 17%)')      
    } else {
        icon.style.color = 'rgb(0, 0, 0)';
        obj.querySelector('#mode').style.color = '#000';
        element.style.background = 'rgb(250, 250, 250)';
        document.querySelector('nav').style.backgroundColor = 'rgb(250, 250, 250)';
        document.querySelector('nav').style.color = '#000';
        document.querySelector('.searchbar').style.color ='#000';
        document.querySelector('.searchbar').style.backgroundColor = '#fff';
        document.querySelector('.searchbar').classList.remove('placeHolder');
        document.querySelector('.typebox i').style.color = 'rgba(0, 0, 0, 0.7)';
        document.querySelector('.typebox').style.backgroundColor = '#fff';
        document.querySelector('.row1 .selections').style.backgroundColor = '#fff';
        document.querySelector('.row1 .selections').style.color = '#000';
        document.querySelector('.row1 .choices').style.backgroundColor = '#fff';
        document.querySelector('.row1 .choices').style.color = '#000';
        Array.from(document.querySelectorAll('.country')).forEach(elem => elem.classList.remove('dark'));
        document.querySelector('.real-page2').style.backgroundColor = 'rgb(250, 250, 250)';
        document.querySelector('.real-page2').style.color = '#000';       
        document.querySelector('.real-page2 button').style.backgroundColor = '#fff';
        document.querySelector('.real-page2 button').style.color = '#000';
        document.querySelector('.real-page2 button i').style.color = '#000'; 
        Array.from(document.querySelectorAll('.real-page2 .border')).forEach(border => border.style.backgroundColor = '#fff')      
    }
}