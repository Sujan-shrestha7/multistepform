import React, { useState } from "react";

interface StepProps {
  nextStep: () => void;
  handleChange: (input: string, value: any) => void;
  values: any;
}

const StepOne: React.FC<StepProps> = ({ nextStep, handleChange, values }) => {
  const [errors, setErrors] = useState("");
  const [province, setProvince] = useState<string>("");
  const [municipality, setMunicipality] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const areasOfExpertise = {
    "IT Technicians": [
      "Laptop Technician",
      "Computer Technician",
      "CC Camera Technician",
      "Printer Technician",
      "Networking Technician",
      "Intercom Technician",
      "Projector Technician",
    ],
    Automobiles: [
      "Bike Repairing (2-wheeler)",
      "Car Repairing (4-wheeler)",
      "Bus/ Truck Repairing",
      "JCB/ Excavator Repairing",
    ],
    "Home Appliances": [
      "House Wiring",
      "Vacuum Cleaning",
      "Mixture Technician",
      "Kitchen Chimni",
      "Solar Technician",
      "Water Dispenser",
      "Refrigerator Technician",
      "Air Conditioner",
      "Heater Technician",
      "Washing Machine",
      "Plumbler",
      "Fan Technician",
      "Fire Extinguisher",
      "Oven Technician",
      "Water Geyser",
    ],
    "Professional Services": [
      "Graphic Designer",
      "Motion Graphic Designer",
      "3D Animation Designer",
      "Typing",
      "Video Editor",
      "Photographer",
      "Videographer",
      "Drone Pilot",
      "Teaching",
      "Home Tuition",
      "IELTS Facilitator",
      "PTE Facilitator",
    ],
  };

  const provinces = [
    {
      name: "Koshi Province",
      districts: [
        "Bhojpur",
        "Dhankuta",
        "Ilam",
        "Jhapa",
        "Khotang",
        "Morang",
        "Okhaldhunga",
        "Panchthar",
        "Sankhuwasabha",
        "Solukhumbu",
        "Sunsari",
        "Taplejung",
        "Tehrathum",
        "Udayapur",
      ],
    },
    {
      name: "Madhesh Province",
      districts: [
        "Bara",
        "Dhanusha",
        "Mahottari",
        "Parsa",
        "Rautahat",
        "Saptari",
        "Sarlahi",
        "Siraha",
      ],
    },
    {
      name: "Bagmati Province",
      districts: [
        "Bhaktapur",
        "Chitwan",
        "Dhading",
        "Dolakha",
        "Kathmandu",
        "Kavrepalanchok",
        "Lalitpur",
        "Makwanpur",
        "Nuwakot",
        "Ramechhap",
        "Rasuwa",
        "Sindhuli",
        "Sindhupalchok",
      ],
    },
    {
      name: "Gandaki Province",
      districts: [
        "Baglung",
        "Gorkha",
        "Kaski",
        "Lamjung",
        "Manang",
        "Mustang",
        "Myagdi",
        "Nawalpur",
        "Parbat",
        "Syangja",
        "Tanahun",
      ],
    },
    {
      name: "Lumbini Province",
      districts: [
        "Arghakhanchi",
        "Banke",
        "Bardiya",
        "Dang",
        "Gulmi",
        "Kapilvastu",
        "Parasi",
        "Palpa",
        "Pyuthan",
        "Rolpa",
        "Rukum East",
        "Rupandehi",
      ],
    },
    {
      name: "Karnali Province",
      districts: [
        "Dailekh",
        "Dolpa",
        "Humla",
        "Jajarkot",
        "Jumla",
        "Kalikot",
        "Mugu",
        "Rukum West",
        "Salyan",
        "Surkhet",
      ],
    },
    {
      name: "Sudurpashchim Province",
      districts: [
        "Achham",
        "Baitadi",
        "Bajhang",
        "Bajura",
        "Dadeldhura",
        "Darchula",
        "Doti",
        "Kailali",
        "Kanchanpur",
      ],
    },
  ];
  const municipalitiesData: Record<string, string[]> = {
    Bhojpur: [
      "Bhojpur Municipality",
      "Shadanand Municipality",
      "Hatuwagadhi Rural Municipality",
      "Ramprasad Rai Rural Municipality",
      "Aamchok Rural Municipality",
      "Tyamke Maiyum Rural Municipality",
      "Arun Rural Municipality",
      "Pauwadungma Rural Municipality",
      "Salpasilichho Rural Municipality",
    ],
    Dhankuta: [
      "Dhankuta Municipality",
      "Mahalaxmi Municipality",
      "Sangurigadhi Rural Municipality",
      "Chaubise Rural Municipality",
      "Chhathar Jorpati Rural Municipality",
      "Khalsa Chhintang Sahidbhumi Rural Municipality",
    ],
    Ilam: [
      "Ilam Municipality",
      "Suryodaya Municipality",
      "Deumai Municipality",
      "Mai Municipality",
      "Phakphokthum Rural Municipality",
      "Mai Jogmai Rural Municipality",
      "Chulachuli Rural Municipality",
      "Rong Rural Municipality",
      "Mangsebung Rural Municipality",
      "Sandakpur Rural Municipality",
    ],
    Jhapa: [
      "Mechinagar Municipality",
      "Birtamod Municipality",
      "Damak Municipality",
      "Bhadrapur Municipality",
      "Shivasatakshi Municipality",
      "Arjundhara Municipality",
      "Gauradaha Municipality",
      "Kankai Municipality",
      "Sundar Haraicha Municipality",
      "Belbari Municipality",
      "Kachankawal Rural Municipality",
      "Buddha Shanti Rural Municipality",
      "Barhadashi Rural Municipality",
      "Jhapa Rural Municipality",
      "Gaurigunj Rural Municipality",
      "Haldibari Rural Municipality",
    ],
    Khotang: [
      "Diktel Rupakot Majhuwagadhi Municipality",
      "Halesi Tuwachung Municipality",
      "Khotehang Rural Municipality",
      "Diprung Rural Municipality",
      "Aiselukharka Rural Municipality",
      "Jantedhunga Rural Municipality",
      "Kepilasgadhi Rural Municipality",
      "Barahpokhari Rural Municipality",
      "Lamidanda Rural Municipality",
      "Sakela Rural Municipality",
    ],
    Morang: [
      "Sundar Haraicha Municipality", // note: sometimes overlaps with Jhapa / adjacent
      "Letang Municipality",
      "Ratuwamai Municipality",
      "Pathari Shanischare Municipality",
      "Rangeli Municipality",
      "Urlabari Municipality",
      "Sunawarshi Municipality",
      "Belbari Municipality",
      "Katahari Rural Municipality",
      "Jahada Rural Municipality",
      "Budi Ganga Rural Municipality",
      "Biratnagar Metropolitan City",
    ],
    Okhaldhunga: [
      "Siddhicharan Municipality",
      // rural municipalities, e.g. etc.
    ],
    Panchthar: [
      "Phidim Municipality",
      // rural municipalities
    ],
    Sankhuwasabha: [
      "Khandbari Municipality",
      // rural municipalities
    ],
    Solukhumbu: [
      "Solu Dudhkunda Municipality",
      // rural municipalities
    ],
    Sunsari: [
      "Inaruwa Municipality",
      "Dharan Sub-Metropolitan City",
      "Itahari Sub-Metropolitan City",
      "Baraha Municipality",
      // rural municipalities
    ],
    Taplejung: [
      "Phungling Municipality",
      // rural municipalities
    ],
    Tehrathum: [
      "Myanglung Municipality",
      "Laligurans Municipality",
      "Triyuga Municipality", // (if boundary / naming mis-assign)
      // rural municipalities
    ],
    Udayapur: [
      "Triyuga Municipality",
      "Katari Municipality",
      "Chaudandigadhi Municipality",
      "Belaka Municipality",
      // rural municipalities
    ],
    Parsa: [
      "Birgunj Metropolitan City",
      "Pokhariya Municipality",
      "Bahudarmai Municipality",
      "Parsagadhi Municipality",
      "Bindabasini Rural Municipality",
      "Dhobini Rural Municipality",
      "Chhipaharmai Rural Municipality",
      "Jagarnathpur Rural Municipality",
      "Jirabhawani Rural Municipality",
      "Kalikamai Rural Municipality",
      "Pakaha Mainpur Rural Municipality",
      "Paterwa Sugauli Rural Municipality",
      "Sakhuwa Prasauni Rural Municipality",
      "Thori Rural Municipality",
    ],
    Siraha: [
      "Lahan Municipality",
      "Siraha Municipality",
      "Golbazar Municipality",
      "Mirchaiya Municipality",
      "Kalyanpur Municipality",
      "Dhangadhimai Municipality",
      "Sukhipur Municipality",
      "Karjanha Municipality",
      "Laxmipur Patari Rural Municipality",
      "Bariyarpatti Rural Municipality",
      "Arnama Rural Municipality",
      "Aurahi Rural Municipality",
      "Bhagwanpur Rural Municipality",
      "Bishnupur Rural Municipality",
      "Naraha Rural Municipality",
      "Sakhuwa Nankarkatti Rural Municipality",
      "Navarajpur Rural Municipality",
    ],
    Mahottari: [
      "Gaushala Municipality",
      // plus 3 municipalities + 12 rural municipalities total in Mahottari :contentReference[oaicite:0]{index=0}
      // Some known rural ones:
      "Pipara Rural Municipality",
      "Ekdara Rural Municipality",
      "Samsi Rural Municipality",
      // ... (others to fill)
    ],
    Saptari: [
      "Rajbiraj Municipality",
      "Hanumannagar Kankalini Municipality",
      "Kanchanrup Municipality",
      "Surunga Municipality",
      "Dakneshwori Municipality",
      "Bodebarsain Municipality",
      // rural municipalities:
      "Balini Bihul Rural Municipality", // example (name may vary)
      "Belhi Chapena Rural Municipality",
      "Bishnupur Rural Municipality",
      "Mahadeva Rural Municipality",
      "Tirahut Rural Municipality",
      "Tilathi Koiladi Rural Municipality",
      "Chhinnamasta Rural Municipality",
      // etc :contentReference[oaicite:1]{index=1}
    ],
    Sarlahi: [
      "Malangwa Municipality",
      "Haripur Municipality",
      "Lalbandi Municipality",
      "Barahathwa Municipality",
      "Balara Municipality",
      "Godaita Municipality",
      "Basbariya Rural Municipality",
      "Bishnu Rural Municipality",
      "Brahampuri Rural Municipality",
      "Chakraghatta Rural Municipality",
      "Chandranagar Rural Municipality",
      "Dhankaul Rural Municipality",
      "Kaudena Rural Municipality",
      "Parsa Rural Municipality", // note different from Parsa district
      "Ramnagar Rural Municipality",
      "Ishworpur Municipality",
    ],
    Dhanusha: [
      "Janakpur Sub-Metropolitan City",
      "Mithila Municipality",
      "Sabaila Municipality",
      "Hansapur Rural Municipality",
      "Ganeshman Charnath Municipality",
      "Nagarain Rural Municipality",
      // etc. :contentReference[oaicite:2]{index=2}
    ],
    Bara: [
      "Kalaiya Sub-Metropolitan City",
      "Jitpur Simara Sub-Metropolitan City",
      // plus municipalities, rural ones in Bara district :contentReference[oaicite:3]{index=3}
    ],
    Rautahat: [
      "Gaur Municipality",
      "Chandrapur Municipality",
      "Garuda Municipality",
      "Gujara Municipality",
      "Durga Bhagwati Municipality",
      "Ishanath Municipality",
      "Brindaban Municipality",
      "Dewahi Gonahi Municipality",
      "Paroha Rural Municipality",
      "Maulapur Municipality",
      "Madhav-Narayan Municipality",
      "Rajpur Rural Municipality",
      "Katahariya Municipality",
      // etc. :contentReference[oaicite:4]{index=4}
    ],
    Sindhuli: [
      "Dudhauli Municipality",
      "Kamalamai Municipality",
      "Tinpatan Rural Municipality",
      "Hariharpurgadhi Rural Municipality",
      "Golanjor Rural Municipality",
      "Marin Rural Municipality",
      "Sunkoshi Rural Municipality",
      "Phikkal Rural Municipality",
      "Ghyanglekh Rural Municipality",
    ],
    Ramechhap: [
      "Manthali Municipality",
      "Ramechhap Municipality",
      "Umakunda Rural Municipality",
      "Khandadevi Rural Municipality",
      "Gokulganga Rural Municipality",
      "Doramba Rural Municipality",
      "Likhu Rural Municipality",
      "Sunapati Rural Municipality",
    ],
    Dolakha: [
      "Bhimeshwar Municipality",
      "Jiri Municipality",
      "Bigu Rural Municipality",
      "Sailung Rural Municipality",
      "Melung Rural Municipality",
      "Baiteshwor Rural Municipality",
      "Tamakoshi Rural Municipality",
      "Gaurishankar Rural Municipality",
      "Kalinchok Rural Municipality",
    ],
    Bhaktapur: [
      "Bhaktapur Municipality",
      "Changunarayan Municipality",
      "Madhyapur Thimi Municipality",
      "Suryabinayak Municipality",
    ],
    Dhading: [
      "Nilkantha Municipality",
      "Dhunibesi Municipality",
      "Gajuri Rural Municipality",
      "Benighat Rorang Rural Municipality",
      "Galchhi Rural Municipality",
      "Gangajamuna Rural Municipality",
      "Jwalamukhi Rural Municipality",
      "Khaniyabash Rural Municipality",
      "Netrawati Dabjong Rural Municipality",
      "Rubi Valley Rural Municipality",
      "Siddhalek Rural Municipality",
      "Thakre Rural Municipality",
      "Tripurasundari Rural Municipality",
    ],
    Kathmandu: [
      "Kathmandu Metropolitan City",
      "Kirtipur Municipality",
      "Gokarneshwor Municipality",
      "Budhanilkantha Municipality",
      "Tokha Municipality",
      "Tarakeshwar Municipality",
      "Nagarjun Municipality",
      "Shankharapur Municipality",
      "Dakshinkali Municipality",
      "Chandragiri Municipality",
    ],
    Kavrepalanchok: [
      "Dhulikhel Municipality",
      "Banepa Municipality",
      "Panauti Municipality",
      "Mandandeupur Municipality",
      "Namobuddha Municipality",
      "Temal Rural Municipality",
      "Bethanchowk Rural Municipality",
      "Chaurideurali Rural Municipality",
      "Mahabharat Rural Municipality",
      "Roshi Rural Municipality",
      "Bhumlu Rural Municipality",
      "Khanikhola Rural Municipality",
    ],
    Lalitpur: [
      "Lalitpur Metropolitan City",
      "Godawari Municipality",
      "Mahalaxmi Municipality",
      "Bagmati Rural Municipality",
      "Konjyosom Rural Municipality",
      "Mahankal Rural Municipality",
    ],
    Nuwakot: [
      "Belkotgadhi Municipality",
      "Bidur Municipality",
      "Kakani Rural Municipality",
      "Shivapuri Rural Municipality",
      "Dupcheshwor Rural Municipality",
      "Likhu Rural Municipality",
      "Myagang Rural Municipality",
      "Tadi Rural Municipality",
      "Tarakeshwor Rural Municipality",
      "Kispang Rural Municipality",
      "Panchakanya Rural Municipality",
      "Suryagadhi Rural Municipality",
    ],
    Rasuwa: [
      "Briddim / Sub-municipality? (if any)", // Rasuwa has very few
      "Kalika Rural Municipality",
      "Naukunda Rural Municipality",
      "Uttargaya Rural Municipality",
      "Gosaikunda Rural Municipality",
      "Aamachodingmo Rural Municipality",
    ],
    Sindhupalchok: [
      "Chautara Sangachokgadhi Municipality",
      "Barhabise Municipality",
      "Melamchi Municipality",
      "Balephi Rural Municipality",
      "Bhotekoshi Rural Municipality",
      "Helambu Rural Municipality",
      "Indrawati Rural Municipality",
      "Jugal Rural Municipality",
      "Lisangkhu Pakhar Rural Municipality",
      "Panchpokhari Thangpal Rural Municipality",
      "Tripurasundari Rural Municipality",
      "Sunkoshi Rural Municipality", // note: some name overlaps with others
    ],
    Chitwan: [
      "Bharatpur Metropolitan City",
      "Kalika Municipality",
      "Khairahani Municipality",
      "Ratnanagar Municipality",
      "Madi Municipality",
      "Rapti Municipality",
      "Ichchhakamana Rural Municipality",
      "Other Rural Municipalities…", // you can insert rest
    ],
    Makwanpur: [
      "Hetauda Sub-Metropolitan City",
      "Thaha Municipality",
      "Bakaiya Rural Municipality",
      "Indrasarowar Rural Municipality",
      "Bhimphedi Rural Municipality",
      "Kailash Rural Municipality",
      "Bagmati Rural Municipality",
      "Manahari Rural Municipality",
      "Raksirang Rural Municipality",
      "Makawanpurgadhi Rural Municipality",
    ],
    Baglung: [
      "Baglung Municipality",
      "Galkot Municipality",
      "Jaimini Municipality",
      "Dhorpatan Municipality",
      "Badigad Rural Municipality",
      "Kathekhola Rural Municipality",
      "Nisikhola Rural Municipality",
      "Taman Khola Rural Municipality",
      "Tarakhola Rural Municipality",
    ],
    Gorkha: [
      "Gorkha Municipality",
      "Palungtar Municipality",
      "Sahid Lakhan Rural Municipality",
      "Ajirkot Rural Municipality",
      "Gandaki Rural Municipality",
      "Dharche Rural Municipality",
      "Sulikot Rural Municipality",
      "Bhimsen Thapa Rural Municipality",
      "Chumanubri Rural Municipality",
    ],
    Kaski: [
      "Pokhara Metropolitan City",
      "Other municipalities…", // some municipalities and rural ones
      // Rural ones include … (not all named here)
    ],
    Lamjung: [
      "Besisahar Municipality",
      "Madhya Nepal Municipality",
      "Rainas Municipality",
      "Sundarbazar Municipality",
      // rural municipalities … (need full list)
    ],
    Manang: [
      // Entirely rural/local units; no urban municipalities
      "Chame Rural Municipality",
      "Narshong Rural Municipality",
      "Narpa Bhumi Rural Municipality",
      "Manang Ingshyang Rural Municipality",
    ],
    Mustang: [
      "Lo-Manthang Rural Municipality",
      "Thasang Rural Municipality",
      "Gharapjhong Rural Municipality",
      "Lo-Ghekar Damodarkunda Rural Municipality",
      "Waragung Muktikhsetra Rural Municipality",
    ],
    Myagdi: [
      "Beni Municipality",
      // rural municipalities: (partial list)
      "– …",
    ],
    Nawalpur: [
      "Kawasoti Municipality",
      "Devchuli Municipality",
      "Gaindakot Municipality",
      "Madhyabindu Municipality",
      // rural municipalities also present
    ],
    Parbat: [
      "Kusma Municipality",
      "Phalebas Municipality",
      // rural municipalities such as Bihadi etc.
    ],
    Syangja: [
      "Putalibazar Municipality",
      "Bhirikot Municipality",
      "Chapakot Municipality",
      "Galyang Municipality",
      "Waling Municipality",
      "Kaligandaki Rural Municipality",
      "Arjun Chaupari Rural Municipality",
      "Phedikhola Rural Municipality",
      "Aandhikhola Rural Municipality",
      "Biruwa Rural Municipality",
      "Harinas Rural Municipality",
    ],
    Tanahun: [
      "Bhanu Municipality",
      "Byas Municipality",
      "Shuklagandaki Municipality",
      // rural municipalities in Tanahun (some)
    ],
    Arghakhanchi: [
      "Bhumekasthan Municipality",
      "Sitganga Municipality",
      "Sandhikharka Municipality",
      "Panini Rural Municipality",
      "Chhatradev Rural Municipality",
      "Malarani Rural Municipality",
    ],
    Banke: [
      "Nepalgunj Sub-Metropolitan City",
      "Kohalpur Municipality",
      "Janaki Rural Municipality",
      "Narainapur Rural Municipality",
      "Duduwa Rural Municipality",
      // plus other rural municipalities in Banke
    ],
    Bardiya: [
      "Gulariya Municipality",
      "Rajapur Municipality",
      "Thakurbaba Municipality",
      "Bansgadhi Municipality",
      "Barbardiya Municipality",
      "Madhuwan Municipality",
      "Badhaiyatal Rural Municipality",
      "Geruwa Rural Municipality",
      // etc.
    ],
    Dang: [
      "Ghorahi Sub-Metropolitan City",
      "Tulsipur Sub-Metropolitan City",
      "Lamahi Municipality",
      "Rapti Rural Municipality",
      "Bangalachuli Rural Municipality",
      "Gadhawa Rural Municipality",
      "Babai Rural Municipality",
      "Dangisharan Rural Municipality",
      "Rajpur Rural Municipality",
      "Shantinagar Rural Municipality",
    ],
    "Eastern Rukum": [
      // local units, rural & municipalities
    ],
    Gulmi: [
      "Resunga Municipality",
      "Musikot Municipality",
      "Ruru Rural Municipality",
      "Isma Rural Municipality",
      "Madane Rural Municipality",
      "Malika Rural Municipality",
      "Chatrakot Rural Municipality",
      "Satyawati Rural Municipality",
      "Chandrakot Rural Municipality",
      "Kaligandaki Rural Municipality",
      "Gulmidarbar Rural Municipality",
    ],
    Kapilvastu: [
      "Kapilbastu Municipality",
      "Krishnanagar Municipality",
      "Banganga Municipality",
      "Maharajgunj Municipality",
      "Shivaraj Municipality",
      "Buddhabhumi Municipality",
      "Mayadevi Rural Municipality",
      "Yasodhara Rural Municipality",
      "Bijayanagar Rural Municipality",
      "Shuddhodhan Rural Municipality",
    ],
    Parasi: [
      "Bardaghat Municipality",
      "Sunwal Municipality",
      "Ramgram Municipality",
      "Susta Rural Municipality",
      // others rural municipalities in Parasi
    ],
    Palpa: [
      "Tansen Municipality",
      "Rampur Municipality",
      "Rambha Rural Municipality",
      "Tinau Rural Municipality",
      "Nisdi Rural Municipality",
      "Mathagadhi Rural Municipality",
      "Ribdikot Rural Municipality",
      "Purbakhola Rural Municipality",
      "Bagnaskali Rural Municipality",
      "Rainadevi Rural Municipality",
    ],
    Pyuthan: [
      "Pyuthan Municipality",
      "Sworgadwary Municipality",
      "Ayirabati Rural Municipality",
      "Gaumukhi Rural Municipality",
      "Jhimruk Rural Municipality",
      "Naubahini Rural Municipality",
      "Mandavi Rural Municipality",
      "Mallarani Rural Municipality",
      "Sarumarani Rural Municipality",
    ],
    Rolpa: [
      "Rolpa Municipality",
      "Madi Rural Municipality",
      "Thawang Rural Municipality",
      "Sunchhahari Rural Municipality",
      "Lungri Rural Municipality",
      "Gangadev Rural Municipality",
      "Tribeni Rural Municipality",
      "Pariwartan Rural Municipality",
      "Runtigadi Rural Municipality",
      "Sunil Smriti Rural Municipality",
    ],
    Rupandehi: [
      "Tilottama Municipality",
      "Lumbini Sanskritik Municipality",
      "Sainamaina Municipality",
      "Siddharthanagar Municipality",
      "Devdaha Municipality",
      "Mayadevi Rural Municipality",
      "Gaidhawa Rural Municipality",
      "Kotahimai Rural Municipality",
      "Siyari Rural Municipality",
      "Rohini Rural Municipality",
      "Sammarimai Rural Municipality",
      "Kanchan Rural Municipality",
      "Omsatiya Rural Municipality",
      "Shuddhodhan Rural Municipality",
      "Marchawari Rural Municipality",
    ],
    Dailekh: [
      "Gurans Rural Municipality",
      "Bhairabi Rural Municipality",
      "Naumule Rural Municipality",
      "Mahabu Rural Municipality",
      "Thantikandh Rural Municipality",
      "Bhagawatimai Rural Municipality",
      "Dungeshwar Rural Municipality",
    ],
    Dolpa: [
      "Thuli Bheri Municipality",
      "Tripurasundari Municipality",
      "Dolpo Buddha Rural Municipality",
      "She Phoksundo Rural Municipality",
      "Jagadulla Rural Municipality",
      "Mudkechula Rural Municipality",
      "Kaike Rural Municipality",
      "Chharka Tangsong Rural Municipality",
    ],
    Humla: [
      "Simkot Municipality",
      "Kharpunath Rural Municipality",
      "Namkha Rural Municipality",
      "Adanchuli Rural Municipality",
      "Chankheli Rural Municipality",
      "Kumakh Rural Municipality",
      "Sanni Triveni Rural Municipality",
      "Sarkegad Rural Municipality",
      "Sinja Rural Municipality",
      "Soru Rural Municipality",
    ],
    Jajarkot: [
      "Chhedagad Municipality",
      "Bheri Municipality",
      "Shivalaya Rural Municipality",
      "Chhatradev Rural Municipality",
      "Bajura Rural Municipality",
      "Khatyad Rural Municipality",
      "Kapurkot Rural Municipality",
      "Jagadulla Rural Municipality",
      "Mudkechula Rural Municipality",
    ],
    Jumla: [
      "Chandannath Municipality",
      "Sinja Rural Municipality",
      "Guthichaur Rural Municipality",
      "Tila Rural Municipality",
      "Pachaljharana Rural Municipality",
      "Kankasundari Rural Municipality",
      "Kapurkot Rural Municipality",
      "Khatyad Rural Municipality",
    ],
    Kalikot: [
      "Manma Municipality",
      "Pachaljharana Rural Municipality",
      "Kapurkot Rural Municipality",
      "Khatyad Rural Municipality",
      "Kumakh Rural Municipality",
      "Siddha Kumakh Rural Municipality",
      "Gurans Rural Municipality",
      "Bhagawatimai Rural Municipality",
    ],
    Mugu: [
      "Gamgadhi Municipality",
      "Chharka Tangsong Rural Municipality",
      "Khatyad Rural Municipality",
      "Kapurkot Rural Municipality",
      "Kumakh Rural Municipality",
      "Sanni Triveni Rural Municipality",
      "Sarkegad Rural Municipality",
      "Sinja Rural Municipality",
      "Soru Rural Municipality",
    ],
    "Rukum (West)": [
      "Musikot Municipality",
      "Triveni Rural Municipality",
      "Sanni Triveni Rural Municipality",
      "Sarkegad Rural Municipality",
      "Sinja Rural Municipality",
      "Soru Rural Municipality",
    ],
    Salyan: [
      "Salyan Municipality",
      "Triveni Rural Municipality",
      "Sanni Triveni Rural Municipality",
      "Sarkegad Rural Municipality",
      "Sinja Rural Municipality",
      "Soru Rural Municipality",
    ],
    Surkhet: [
      "Birendranagar Municipality",
      "Bheriganga Municipality",
      "Barahatal Rural Municipality",
      "Gurans Rural Municipality",
      "Hima Rural Municipality",
      "Kumakh Rural Municipality",
      "Kumakh Rural Municipality",
      "Sanni Triveni Rural Municipality",
      "Sarkegad Rural Municipality",
      "Sinja Rural Municipality",
      "Soru Rural Municipality",
    ],
    Achham: [
      "Mangalsen Municipality",
      "Kamalbazar Municipality",
      "Mellekh Rural Municipality",
      "Chaurpati Rural Municipality",
      "Bhageshwor Rural Municipality",
      "Sanphebagar Rural Municipality",
      "Purna Rural Municipality",
      "Jalpa Rural Municipality",
      "Kailash Rural Municipality",
      "Ramaroshan Rural Municipality",
    ],
    Bajhang: [
      "Chainpur Municipality",
      "Durgathali Municipality",
      "Bungal Municipality",
      "Sakla Rural Municipality",
      "Himalchuli Rural Municipality",
      "Jaya Prithvi Nagar Rural Municipality",
      "Jaya Prithvi Nagar Rural Municipality",
      "Masta Rural Municipality",
      "Panchadewal Binayak Rural Municipality",
    ],
    Bajura: [
      "Budhiganga Municipality",
      "Gaumul Rural Municipality",
      "Himalaya Rural Municipality",
      "Pandav Gupha Rural Municipality",
      "Swamikartik Khapar Rural Municipality",
      "Triveni Rural Municipality",
      "Bichhya Rural Municipality",
    ],
    Dadeldhura: [
      "Amargadhi Municipality",
      "Parshuram Municipality",
      "Shiva Prithvi Municipality",
      "Bhimdatta Municipality",
      "Baitadi Rural Municipality",
      "Doti Rural Municipality",
    ],
    Darchula: [
      "Darchula Municipality",
      "Mahakali Municipality",
      "Byas Rural Municipality",
      "Shiva Prithvi Rural Municipality",
      "Baitadi Rural Municipality",
      "Doti Rural Municipality",
      "Kailali Rural Municipality",
    ],
    Doti: [
      "Dipayal Silgadhi Municipality",
      "Shikhar Municipality",
      "Badikedar Rural Municipality",
      "Purbichauki Rural Municipality",
      "Jorayal Rural Municipality",
      "Shivalaya Rural Municipality",
      "Bajura Rural Municipality",
    ],
    Kailali: [
      "Dhangadhi Sub-Metropolitan City",
      "Attariya Municipality",
      "Tikapur Municipality",
      "Lamki Chuha Municipality",
      "Ghodaghodi Municipality",
      "Godawari Municipality",
      "Bardagoriya Municipality",
      "Janaki Rural Municipality",
      "Krishnapur Rural Municipality",
      "Kailali Rural Municipality",
    ],
    Kanchanpur: [
      "Mahendranagar Municipality",
      "Shuklaphanta Municipality",
      "Beldandi Municipality",
      "Krishnapur Municipality",
      "Kanchanpur Rural Municipality",
      "Belauri Rural Municipality",
      "Bhimdutta Rural Municipality",
    ],
  };

  const handleCheckboxChange = (expertise: string) => {
    const selected = values.expertise || [];
    if (selected.includes(expertise)) {
      handleChange(
        "expertise",
        selected.filter((item: string) => item !== expertise)
      );
    } else {
      handleChange("expertise", [...selected, expertise]);
    }
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!values.expertise || values.expertise.length === 0) {
      setErrors("Please select at least one area of expertise.");
      return;
    }
    setErrors("");
    nextStep();
  };

  return (
    <form onSubmit={handleNext} className="max-w-xl text-white mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Personal Information
      </h2>

      {/* Full Name */}
      <input
        type="text"
        placeholder="Full Name"
        value={values.fullName}
        onChange={(e) => handleChange("fullName", e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        required
      />

      {/* Contact Number */}
      <input
        type="tel"
        placeholder="Contact Number"
        value={values.contact}
        onChange={(e) => handleChange("contact", e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        required
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email Address"
        value={values.email}
        onChange={(e) => handleChange("email", e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        required
      />

      {/* Address Section */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Address</h3>
      <div className="flex flex-wrap gap-[25px] gap-y-[20px] justify-between">
        {/* Province + District */}
        <div className="flex flex-wrap gap-[30px] gap-y-[15px] justify-between">
          {/* Province Dropdown */}
          <select
            value={values.province}
            onChange={(e) => {
              handleChange("province",e.target.value);
              setDistrict("");
              setMunicipality("");
            }}
            className="text-[16px] text-[#fff] py-2 px-3 w-[273px] bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option className="bg-[#000000]" value="">
              Select Province
            </option>
            {provinces.map((prov) => (
              <option
                className="bg-[#000000] text-[#fff]"
                key={prov.name}
                value={prov.name}
              >
                {prov.name}
              </option>
            ))}
          </select>

          {/* District Dropdown */}
          <select
            value={values.district}
            onChange={(e) => {
              handleChange("district",e.target.value);
              setMunicipality("");
            }}
            className="text-[16px] text-[#fff] py-2 px-3 w-[273px] bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            disabled={!values.province}
          >
            <option className="bg-[#000000]" value="">
              {province ? "Select District" : "Select Province First"}
            </option>
            {provinces
              .find((p) => p.name === values.province)
              ?.districts.map((d) => (
                <option className="bg-[#000000] text-[#fff]" key={d} value={d}>
                  {d}
                </option>
              ))}
          </select>
        </div>

        {/* Municipality + Address */}
        <div className="flex flex-wrap gap-[30px] gap-y-[15px] justify-between">
          {/* Municipality Dropdown */}
          <select
            value={municipality}
            onChange={(e) => setMunicipality(e.target.value)}
            className="text-[16px] text-[#fff] py-2 px-3 w-[273px] bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            disabled={!values.district}
          >
            <option className="bg-[#000000]" value="">
              {values.district ? "Select Municipality" : "Select District First"}
            </option>
            {(municipalitiesData[values.district] || []).map((m) => (
              <option className="bg-[#000000] text-[#fff]" key={m} value={m}>
                {m}
              </option>
            ))}
          </select>

          {/* Detailed Address */}
          <input
            type="text"
            placeholder="Ward No / Tole / House No..."
            className="text-[#fff] text-[14px] pl-[10px] py-2 w-[273px] bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>

      {/* Areas of Expertise */}
      <h3 className="text-lg font-semibold mt-6 mb-2">
        What is your area of expertise? <span className="text-red-500">*</span>
      </h3>

      {Object.entries(areasOfExpertise).map(([category, items]) => (
        <div key={category} className="mb-4">
          <h4 className="font-semibold text-blue-700">{category}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
            {items.map((item) => (
              <label key={item} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={values.expertise?.includes(item) || false}
                  onChange={() => handleCheckboxChange(item)}
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      ))}

      {errors && <p className="text-red-600 mb-3">{errors}</p>}

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 w-full mt-4"
      >
        Next
      </button>
    </form>
  );
};

export default StepOne;
