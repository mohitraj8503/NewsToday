/*
 * News Today - Complete Multilingual Localization Engine
 * English (en) <-> Hindi (hi). Default: Hindi.
 * Persists selection in localStorage (news_today_lang).
 */
(function() {
  'use strict';

  var translations = {
    hi: {
      nav: {
        "home": "होम",
        "allPages": "सभी पेज",
        "newsCategories": "समाचार श्रेणियाँ",
        "about": "हमारे बारे में",
        "subscription": "सदस्यता",
        "authors": "संपादकीय टीम",
        "editorProfile": "संपादक प्रोफाइल",
        "contact": "संपर्क करें",
        "privacyPolicy": "गोपनीयता नीति",
        "terms": "नियम एवं शर्तें",
        "subscribe": "सब्सक्राइब करें",
        "readMore": "पूरी खबर पढ़ें",
        "latestNews": "ताज़ा ख़बरें",
        "india": "भारत"
      },
      cat: {
        "topStories": "प्रमुख वैश्विक समाचार",
        "worldNews": "विश्व समाचार",
        "economy": "अर्थव्यवस्था",
        "technology": "तकनीक",
        "scienceHealth": "विज्ञान एवं स्वास्थ्य",
        "lifestyleCulture": "जीवनशैली एवं संस्कृति",
        "sports": "खेल",
        "entertainment": "मनोरंजन",
        "otherNews": "अन्य ख़बरें",
        "globalMarkets": "वैश्विक बाजार",
        "globalStories": "वैश्विक कहानियाँ",
        "business": "व्यवसाय",
        "environment": "पर्यावरण",
        "scienceEnvironment": "विज्ञान एवं पर्यावरण",
        "lifestyle": "जीवनशैली",
        "globalNews": "विश्व समाचार",
        "health": "स्वास्थ्य",
        "wellness": "वेलनेस",
        "climateChange": "जलवायु परिवर्तन",
        "astronomy": "खगोल विज्ञान",
        "movies": "फिल्में",
        "tennis": "टेनिस",
        "esports": "ईस्पोर्ट्स",
        "streaming": "स्ट्रीमिंग",
        "food": "भोजन",
        "travel": "यात्रा",
        "remoteWork": "रिमोट वर्क",
        "sportsEnt": "खेल और मनोरंजन",
        "economyGlobal": "अर्थव्यवस्था / वैश्विक बाजार",
        "ourTeam": "हमारी टीम"
      },
      ui: {
        "seeAll": "सभी देखें",
        "viewProfile": "प्रोफाइल देखें",
        "owner": "स्वामी / संपादक: रवि शंकर सिन्हा",
        "quickLinks": "मुख्य लिंक",
        "legalLinks": "महत्वपूर्ण लिंक",
        "contactOffice": "संपर्क कार्यालय",
        "date": "रविवार, 26 अक्टूबर 2025"
      },
      page: {
        "langName": "हिन्दी",
        "nav.home": "होम",
        "nav.allPages": "सभी पेज",
        "nav.newsCategories": "समाचार श्रेणियाँ",
        "nav.about": "हमारे बारे में",
        "nav.subscription": "सदस्यता",
        "nav.authors": "संपादकीय टीम",
        "nav.editorProfile": "संपादक प्रोफाइल",
        "nav.contact": "संपर्क करें",
        "nav.privacyPolicy": "गोपनीयता नीति",
        "nav.terms": "नियम एवं शर्तें",
        "nav.subscribe": "सब्सक्राइब करें",
        "nav.readMore": "पूरी खबर पढ़ें",
        "nav.latestNews": "ताज़ा ख़बरें",
        "cat.topStories": "प्रमुख वैश्विक समाचार",
        "cat.worldNews": "विश्व समाचार",
        "cat.economy": "अर्थव्यवस्था",
        "cat.technology": "तकनीक",
        "cat.scienceHealth": "विज्ञान एवं स्वास्थ्य",
        "cat.lifestyleCulture": "जीवनशैली एवं संस्कृति",
        "cat.sports": "खेल",
        "cat.entertainment": "मनोरंजन",
        "cat.otherNews": "अन्य ख़बरें",
        "cat.globalMarkets": "वैश्विक बाजार",
        "cat.globalStories": "वैश्विक कहानियाँ",
        "ui.seeAll": "सभी देखें",
        "ui.viewProfile": "प्रोफाइल देखें",
        "ui.owner": "स्वामी / संपादक: रवि शंकर सिन्हा",
        "ui.quickLinks": "मुख्य लिंक",
        "ui.legalLinks": "महत्वपूर्ण लिंक",
        "ui.contactOffice": "संपर्क कार्यालय",
        "ui.date": "रविवार, 26 अक्टूबर 2025",
        "art.headline": "नवीकरणीय ऊर्जा भंडारण में सफलता वैश्विक बिजली आपूर्ति को बदल सकती है",
        "art.author": "रवि शंकर सिन्हा",
        "art.date": "24 नवंबर, 2025",
        "art.body.p0": "इस सप्ताह वैश्विक शेयर बाजारों में तेजी आई क्योंकि निवेशकों ने नए डेटा पर सकारात्मक प्रतिक्रिया दी जिसमें पता चला कि संयुक्त राज्य अमेरिका और अन्य बड़ी अर्थव्यवस्थाओं में मुद्रास्फीति ठंडी हो रही है, जिससे केंद्रीय बैंकों द्वारा लंबे समय तक मौद्रिक कसने के डर को कम किया गया है।",
        "art.body.p1": "डाउ जोन्स इंडस्ट्रियल एवरेज 2.4% से अधिक चढ़ा, जो जून के बाद का सबसे बड़ा साप्ताहिक लाभ है, जबकि एसएंडपी 500 और नैस्डैक कंपोजिट क्रमशः 2.1% और 2.8% बढ़े। यूरोपीय और एशियाई बाजारों ने भी इसका अनुसरण किया, जहां एफटीएसई 100, डैक्स और निक्केई 225 सभी ऊंचे पर बंद हुए क्योंकि वैश्विक एक्सचेंजों में निवेशक भावना में सुधार हुआ। अमेरिकी श्रम सांख्यिकी ब्यूरो की नवीनतम रिपोर्ट के अनुसार, उपभोक्ता मूल्य सूचकांक (सीपीआई) सितंबर में सिर्फ 0.2% बढ़ा, जिससे वार्षिक मुद्रास्फीति दर घटकर 3.1% रह गई — अर्थशास्त्रियों की उम्मीदों से थोड़ा कम। मूल्य वृद्धि में स्थिर गिरावट ने उम्मीदें बढ़ाई हैं कि फेडरल रिजर्व जल्द ही अपनी आक्रामक ब्याज दर नीति में ढील देना शुरू कर सकता है।",
        "art.body.p2": "“यह मुद्रास्फीति के दबाव के स्थिर होने का स्पष्ट संकेत है,” ग्लोबलएज कैपिटल में वरिष्ठ बाजार विश्लेषक जेनेट हॉवेल ने कहा। “निवेशकों को विश्वास होने लगा है कि फेड वास्तव में एक सॉफ्ट लैंडिंग हासिल कर सकता है — मंदी का कारण बने बिना मुद्रास्फीति को धीमा करना।”",
        "art.body.p3": "डाउ जोन्स इंडस्ट्रियल एवरेज 2.4% से अधिक चढ़ा, जो जून के बाद का सबसे बड़ा साप्ताहिक लाभ है, जबकि एसएंडपी 500 और नैस्डैक कंपोजिट क्रमशः 2.1% और 2.8% बढ़े। यूरोपीय और एशियाई बाजारों ने भी इसका अनुसरण किया, जहां एफटीएसई 100, डैक्स और निक्केई 225 सभी ऊंचे पर बंद हुए क्योंकि वैश्विक एक्सचेंजों में निवेशक भावना में सुधार हुआ। अमेरिकी श्रम सांख्यिकी ब्यूरो की नवीनतम रिपोर्ट के अनुसार, उपभोक्ता मूल्य सूचकांक (सीपीआई) सितंबर में सिर्फ 0.2% बढ़ा, जिससे वार्षिक मुद्रास्फीति दर घटकर 3.1% रह गई — अर्थशास्त्रियों की उम्मीदों से थोड़ा कम। मूल्य वृद्धि में स्थिर गिरावट ने उम्मीदें बढ़ाई हैं कि फेडरल रिजर्व जल्द ही अपनी आक्रामक ब्याज दर नीति में ढील देना शुरू कर सकता है।",
        "art.body.p4": "“यह मुद्रास्फीति के दबाव के स्थिर होने का स्पष्ट संकेत है,” ग्लोबलएज कैपिटल में वरिष्ठ बाजार विश्लेषक जेनेट हॉवेल ने कहा। “निवेशकों को विश्वास होने लगा है कि फेड वास्तव में एक सॉफ्ट लैंडिंग हासिल कर सकता है — मंदी का कारण बने बिना मुद्रास्फीति को धीमा करना।”",
        "art.body.p5": "डाउ जोन्स इंडस्ट्रियल एवरेज 2.4% से अधिक चढ़ा, जो जून के बाद का सबसे बड़ा साप्ताहिक लाभ है, जबकि एसएंडपी 500 और नैस्डैक कंपोजिट क्रमशः 2.1% और 2.8% बढ़े। यूरोपीय और एशियाई बाजारों ने भी इसका अनुसरण किया, जहां एफटीएसई 100, डैक्स और निक्केई 225 सभी ऊंचे पर बंद हुए क्योंकि वैश्विक एक्सचेंजों में निवेशक भावना में सुधार हुआ। अमेरिकी श्रम सांख्यिकी ब्यूरो की नवीनतम रिपोर्ट के अनुसार, उपभोक्ता मूल्य सूचकांक (सीपीआई) सितंबर में सिर्फ 0.2% बढ़ा, जिससे वार्षिक मुद्रास्फीति दर घटकर 3.1% रह गई — अर्थशास्त्रियों की उम्मीदों से थोड़ा कम। मूल्य वृद्धि में स्थिर गिरावट ने उम्मीदें बढ़ाई हैं कि फेडरल रिजर्व जल्द ही अपनी आक्रामक ब्याज दर नीति में ढील देना शुरू कर सकता है।",
        "art.body.p6": "“यह मुद्रास्फीति के दबाव के स्थिर होने का स्पष्ट संकेत है,” ग्लोबलएज कैपिटल में वरिष्ठ बाजार विश्लेषक जेनेट हॉवेल ने कहा। “निवेशकों को विश्वास होने लगा है कि फेड वास्तव में एक सॉफ्ट लैंडिंग हासिल कर सकता है — मंदी का कारण बने बिना मुद्रास्फीति को धीमा करना।”",
        "art.h4.0": "वैश्विक विश्वास मजबूत हो रहा है।",
        "art.h4.1": "टेक और वित्तीय शेयर रैली का नेतृत्व कर रहे हैं।",
        "art.h4.2": "निवेशकों के कैलेंडर पर अगली बड़ी घटना आगामी फेडरल ओपन मार्केट कमेटी (एफओएमसी) बैठक 2026 में है।",
        "cat.business": "व्यवसाय",
        "cat.environment": "पर्यावरण",
        "cat.scienceEnvironment": "विज्ञान एवं पर्यावरण",
        "cat.lifestyle": "जीवनशैली",
        "cat.globalNews": "विश्व समाचार",
        "index.title": "हिन्दी में ब्रेकिंग न्यूज़, कहानियाँ और शीर्षक - News Today",
        "index.desc": "News Today भिक्खनपुर, भागलपुर, बिहार में स्थित एक आधुनिक समाचार पत्र और मीडिया आउटलेट है। तेज़, रिस्पॉन्सिव लेआउट के साथ ब्रेकिंग न्यूज़, गहरी कहानियाँ और आकर्षक पत्रकारिता प्रदान करता है।",
        "top.label1": "बिहार की प्रमुख खबरें पढ़ें",
        "top.label2": "देश और दुनिया की ताज़ा अपडेट",
        "top.label3": "तकनीक और शिक्षा से जुड़ी खबरें",
        "top.label4": "आज की आर्थिक गतिविधियों पर नजर",
        "404.title": "मिली नहीं | News Today - अग्रणी समाचार और मीडिया",
        "404.heading": "ओहॉ! पेज नहीं मिला",
        "404.desc": "देखने में आ रहा है कि खबर ने कोई अलग रास्ता ले लिया है। जिस पेज तक आप पहुंचने की कोशिश कर रहे हैं, वह हटाया जा सकता है, हटाया जा सकता है, या अस्थायी रूप से अनुपलब्ध हो सकता है।",
        "404.home": "होमपेज पर लौटें",
        "about.title": "हमारे बारे में | News Today - अग्रणी समाचार और मीडिया",
        "about.heading": "हमारी टीम",
        "authors.title": "लेखक | News Today - अग्रणी समाचार और मीडिया",
        "authors.heading": "लेखकों से मिलें",
        "changelog.title": "चेंजलॉग | News Today - अग्रणी समाचार और मीडिया",
        "changelog.heading": "चेंजलॉग",
        "checkout.title": "चेकआउट | News Today - अग्रणी समाचार और मीडिया",
        "contact.title": "संपर्क करें | News Today - अग्रणी समाचार और मीडिया",
        "contact.heading": "हम यहां सुनने के लिए हैं",
        "contact.call": "हमें कॉल करें",
        "contact.email": "हमें एक ईमेल भेजें",
        "contact.visit": "हमसे व्यक्तिगत रूप से मिलें",
        "contact.form": "संपर्क फॉर्म",
        "contact.respond": "हम 24-48 घंटों के भीतर सभी संदेशों का जवाब देने का लक्ष्य रखते हैं।",
        "contact.agree": "हमसे संपर्क करके, आप हमारी सहमति देते हैं",
        "license.title": "लाइसेंस | News Today - अग्रणी समाचार और मीडिया",
        "shop.title": "दुकान | News Today - अग्रणी समाचार और मीडिया",
        "shop.heading": "हमारे साथ खरीदारी करें",
        "styleguide.title": "स्टाइलगाइड | News Today - अग्रणी समाचार और मीडिया",
        "styleguide.heading": "स्टाइलगाइड",
        "subscription.title": "सदस्यता | News Today - अग्रणी समाचार और मीडिया",
        "subscription.heading": "हमारी सदस्यता योजनाएं",
        "terms.title": "नियम एवं शर्तें | News Today - अग्रणी समाचार और मीडिया",
        "form.required": "* अनिवार्य",
        "form.fullName": "पूर्ण नाम *",
        "form.street": "गली का पता *",
        "form.city": "शहर *",
        "form.state": "राज्य/प्रांत",
        "form.zip": "ज़िप/डाक कोड *",
        "form.country": "देश *",
        "nav.india": "भारत",
        "editor.owner": "संपादक-प्रमुख एवं स्वामी",
        "contact.formHeading": "संपर्क फॉर्म",
        "contact.respondTime": "हम 24-48 घंटों के भीतर सभी संदेशों का जवाब देने का लक्ष्य रखते हैं।",
        "contact.joinCommunity": "हमारे बढ़ते समुदाय से जुड़ें — जहां कहानियां सूचित, प्रेरित और जोड़ती हैं।",
        "contact.addressLine": "भीखनपुर, भागलपुर, बिहार, भारत",
        "home.metaTitle": "News Today | भागलपुर ताज़ा ख़बरें",
        "home.heroDesc": "विश्व नेताओं ने जिनेवा में वैश्विक तापन के लिए तत्काल कार्रवाई पर चर्चा की, नवीकरणीय ऊर्जा और 2030 तक उत्सर्जन कम करने के नए प्रतिबद्धता जताई।",
        "home.aiTech": "एआई टेक",
        "home.followUs": "हमारे साथ जुड़ें",
        "home.realTimeUpdates": "रियल-टाइम अपडेट",
        "home.breakingStories": "और दुनिया भर की ब्रेकिंग खबरें।",
        "home.readFullStory": "पूरी खबर पढ़ें",
        "home.allFrom": "सभी से",
        "home.getUpdates": "चलते-फिरते अपडेट पाएं — अपने पसंदीदा सोशल नेटवर्क पर हमसे जुड़ें।",
        "home.keepUp": "ताज़ा खबरों से अपडेट रहें — सोशल मीडिया पर हमारे दर्शकों का हिस्सा बनें।",
        "home.stayInformed": "जहां भी हों, सूचित रहें — सोशल प्लेटफॉर्म पर हमारे पाठकों और फॉलोअर्स के समुदाय से जुड़ें।",
        "cat.health": "स्वास्थ्य",
        "cat.wellness": "वेलनेस",
        "cat.climateChange": "जलवायु परिवर्तन",
        "cat.astronomy": "खगोल विज्ञान",
        "cat.movies": "फिल्में",
        "cat.tennis": "टेनिस",
        "cat.esports": "ईस्पोर्ट्स",
        "cat.streaming": "स्ट्रीमिंग",
        "cat.food": "भोजन",
        "cat.travel": "यात्रा",
        "cat.remoteWork": "रिमोट वर्क",
        "faq.q1": "The Daily Placeholder क्या है?",
        "faq.a1": "यह एक प्लेसहोल्डर उत्तर है।",
        "faq.q2": "क्या मैं लेख योगदान या सबमिट कर सकता हूं?",
        "faq.a2": "हां, आप हमें संपर्क पेज के माध्यम से लेख सबमिट कर सकते हैं।",
        "faq.q3": "मैं आपके न्यूज़लेटर की सदस्यता कैसे ले सकता हूं?",
        "faq.a3": "आप फुटर में ईमेल सब्सक्रिप्शन फॉर्म का उपयोग करके सदस्यता ले सकते हैं।",
        "faq.q4": "आप अपनी खबरों की सटीकता कैसे सुनिश्चित करते हैं?",
        "faq.a4": "हमारी संपादकीय टीम प्रकाशित करने से पहले सभी तथ्यों का सत्यापन करती है।",
        "faq.q5": "क्या The Daily Placeholder संबद्ध है?",
        "faq.a5": "यह एक स्वतंत्र समाचार मंच है।",
        "faq.q6": "वेबसाइट कितनी बार अपडेट होती है?",
        "faq.a6": "वेबसाइट ब्रेकिंग न्यूज़ के साथ दिन में कई बार अपडेट होती है।",
        "form.name": "नाम*",
        "form.email": "ईमेल*",
        "form.phone": "फोन*",
        "form.message": "संदेश*",
        "contact.privacyLink": "गोपनीयता नीति।",
        "author.editor": "संपादक-प्रमुख",
        "cat.sportsEnt": "खेल और मनोरंजन",
        "cat.economyGlobal": "अर्थव्यवस्था / वैश्विक बाजार",
        "cat.ourTeam": "हमारी टीम"
      },
      footer: {
        "editorialTeam": "संपादकीय टीम",
        "subscribeHeading": "दैनिक मुख्य समाचारों से जुड़े रहने के लिए न्यूज़लेटर सब्सक्राइब करें।",
        "footerText": "सच्ची, सटीक और निष्पक्ष पत्रकारिता के साथ हर पल आपके साथ - भागलपुर और देश-दुनिया की ताज़ा ख़बरें।",
        "socialText": "सोशल मीडिया पर जुड़ें:",
        "allRightsReserved": "© 2026 News Today. सर्वाधिकार सुरक्षित। - मोहित राज एवं टीम द्वारा निर्मित",
        "headOffice": "कार्यालय: भीखनपुर, भागलपुर, बिहार, भारत",
        "phone": "फोन: +91 99731 89133",
        "email": "ईमेल: ravingsinha25@gmail.com",
        "ctaTitle": "10 लाख से अधिक जागरूक पाठकों के साथ जुड़ें - कोई बड़ी खबर न चूकें।",
        "ctaSubtext": "जहाँ भी हों, जानकारी से जुड़े रहें — सोशल प्लेटफ़ॉर्म पर हमारे बढ़ते पाठक समुदाय से जुड़ें।",
        "subscribePart1": "दैनिक मुख्य समाचारों से जुड़े रहने के लिए",
        "subscribePart2": "न्यूज़लेटर सब्सक्राइब करें।",
        "formPlaceholder": "अपना ईमेल दर्ज करें",
        "formSubmit": "सब्सक्राइब करें",
        "formWait": "कृपया प्रतीक्षा करें...",
        "formSuccess": "धन्यवाद! आपका सबमिशन प्राप्त हो गया है!",
        "formError": "ओहॉ! फॉर्म सबमिट करने में कुछ गड़बड़ हो गई।",
        "subscriptionLink": "सदस्यता योजनाएं"
      },
      artTitles: {
        "70-nations-gathered-this-weekend-in-geneva-to-finalize-agreement-at-reducing-global-carbon-emissions": "इस सप्ताह के अंत में 70 देशों ने वैश्विक कार्बन उत्सर्जन को कम करने के समझौते को अंतिम रूप देने के लिए जिनेवा में एकत्र हुए",
        "a-deep-dive-into-the-evolution-of-digital-journalism-and-algorithm-driven-content-feeds": "डिजिटल पत्रकारिता और एल्गोरिदम-चालित सामग्री फ़ीड के विकास में गहराई से उतरना",
        "a-thrilling-final-match-saw-an-unexpected-champion-rise-stunning-fans-and-analysts-alike": "एक रोमांचक अंतिम मैच में एक अप्रत्याशित चैंपियन का उदय हुआ, प्रशंसकों और विश्लेषकों को आश्चर्यचकित किया",
        "after-two-decades-of-dominance-the-legendary-player-bids-farewell-in-an-emotional-press": "दो दशकों के प्रभुत्व के बाद, दिग्गज खिलाड़ी एक भावुक प्रेस में विदाई लेता है",
        "ai-breakthroughs-surge-as-leading-tech-firms-launch-advanced-smart-assistants": "प्रमुख तकनीकी फर्मों द्वारा उन्नत स्मार्ट सहायकों के लॉन्च के रूप में AI सफलताओं में वृद्धि",
        "ai-evolution-speeds-up-as-industry-giants-showcase-future-ready-assistants": "उद्योग के दिग्गजों द्वारा भविष्य के लिए तैयार सहायकों का प्रदर्शन किए जाने पर AI विकास में तेजी",
        "ai-momentum-grows-as-tech-heavyweights-present-revolutionary-smart-assistants": "तकनीकी दिग्गजों द्वारा क्रांतिकारी स्मार्ट सहायक प्रस्तुत किए जाने पर AI गति बढ़ती है",
        "ai-revolution-accelerates-as-tech-giants-unveil-next-gen-intelligent-assistants-2": "तकनीकी दिग्गजों द्वारा अगली पीढ़ी के बुद्धिमान सहायकों का अनावरण किए जाने पर AI क्रांति में तेजी",
        "ai-revolution-accelerates-as-tech-giants-unveil-next-gen-intelligent-assistants": "तकनीकी दिग्गजों द्वारा अगली पीढ़ी के बुद्धिमान सहायकों का अनावरण किए जाने पर AI क्रांति में तेजी",
        "an-opinion-piece-on-how-authentic-reporting-and-human-ethics-remain-irreplaceable-even": "प्रामाणिक रिपोर्टिंग और मानव नैतिकता कैसे अप्रतिस्थापनीय बनी हुई है इस पर एक राय लेख",
        "artificial-intelligence-tools-are-transforming-how-teams-collaborate-automating-tasks-workplace-efficiency": "कृत्रिम बुद्धिमत्ता उपकरण इस तरह से टीमों के सहयोग करने के तरीके को बदल रहे हैं, कार्यों को स्वचालित करना कार्यस्थल दक्षता",
        "breakthrough-in-renewable-energy-storage-could-transform-global-power-supply-2": "नवीकरणीय ऊर्जा भंडारण में सफलता वैश्विक बिजली आपूर्ति को बदल सकती है",
        "breakthrough-in-renewable-energy-storage-could-transform-global-power-supply": "नवीकरणीय ऊर्जा भंडारण में सफलता वैश्विक बिजली आपूर्ति को बदल सकती है",
        "central-banks-signal-policy-shift-amid-inflation-cooldown": "मुद्रास्फीति शीतलन के बीच केंद्रीय बैंकों ने नीति में बदलाव का संकेत दिया",
        "chatbots-redefine-online-learning-as-students-embrace-virtual-tutors": "छात्रों द्वारा आभासी ट्यूटरों को अपनाए जाने पर चैटबॉट ऑनलाइन शिक्षा को पुनः परिभाषित कर रहे हैं",
        "cinema-revenues-hit-a-new-post-pandemic-high-fueled-by-blockbuster-releases-and-strong-attendance": "महामारी के बाद सिनेमा राजस्व एक नए उच्च स्तर पर पहुंचा, ब्लॉकबस्टर रिलीज और मजबूत उपस्थिति से ईंधन",
        "crude-oil-prices-climbed-to-new-yearly-highs-amid-renewed-geopolitical": "नवीकृत भू-राजनीतिक अस्थिरता के बीच कच्चे तेल की कीमतें नई वार्षिक ऊंचाई पर चढ़ीं",
        "demand-for-mental-health-support-tools-continues-to-rise-as-people-seek": "मानसिक स्वास्थ्य सहायता उपकरणों की मांग बढ़ती जा रही है क्योंकि लोग मांग कर रहे हैं",
        "emerging-asian-economies-are-outperforming-forecasts-driving-global-gdp-growth-upward": "उभरती एशियाई अर्थव्यवस्थाएं पूर्वानुमानों से बेहतर प्रदर्शन कर रही हैं, वैश्विक जीडीपी वृद्धि को बढ़ावा दे रही हैं",
        "global-leaders-commit-to-ambitious-climate-goals-at-geneva-summit": "विश्व नेताओं ने जिनेवा शिखर सम्मेलन में महत्वाकांक्षी जलवायु लक्ष्यों के लिए प्रतिबद्धता जताई",
        "global-markets-react-positively-to-trade-agreement-between-asia-and-europe": "एशिया और यूरोप के बीच व्यापार समझौते पर वैश्विक बाजारों ने सकारात्मक प्रतिक्रिया दी",
        "innovation-booms-in-ai-as-top-tech-brands-debut-their-latest-intelligent-systems": "शीर्ष तकनीकी ब्रांडों द्वारा अपने नवीनतम बुद्धिमान प्रणालियों की शुरुआत किए जाने पर AI में नवाचार तेजी से बढ़ रहा है",
        "major-cities-adopt-ai-traffic-systems-to-combat-congestion-and-pollution": "भीड़भाड़ और प्रदूषण से लड़ने के लिए प्रमुख शहरों ने AI ट्रैफिक सिस्टम अपनाए",
        "major-streaming-giants-are-in-fierce-competition-to-secure-exclusive-deals-with-top-creators": "शीर्ष रचनाकारों के साथ विशेष सौदे सुरक्षित करने में प्रमुख स्ट्रीमिंग दिग्गजों के बीच कड़ी प्रतिस्पर्धा",
        "markets-responded-positively-to-the-european-central-banks-signal": "बाजारों ने यूरोपीय केंद्रीय बैंक के संकेत पर सकारात्मक प्रतिक्रिया दी",
        "more-people-are-embracing-minimalist-lifestyles-focusing-on-possessions": "अधिक लोग न्यूनतम जीवनशैली अपना रहे हैं, संपत्तियों पर ध्यान केंद्रित कर रहे हैं",
        "next-gen-ai-takes-center-stage-as-major-tech-companies-reveal-intelligent-tools": "प्रमुख तकनीकी कंपनियों द्वारा बुद्धिमान उपकरण प्रकट किए जाने पर अगली पीढ़ी का AI केंद्र स्तर पर",
        "plant-based-products-are-taking-over-restaurant-menus-and-grocery": "पौधे-आधारित उत्पाद रेस्तरां मेनू और किराने की दुकानों पर कब्जा कर रहे हैं",
        "recent-satellite-data-shows-the-arctic-ice-melting-faster-than-expected": "हालिया उपग्रह डेटा दिखाता है कि आर्कटिक बर्फ अपेक्षा से तेजी से पिघल रही है",
        "researchers-have-corrected-genetic-mutations-in-human-cells": "शोधकर्ताओं ने मानव कोशिकाओं में आनुवंशिक उत्परिवर्तन को सही कर लिया है",
        "rising-energy-costs-threaten-small-business-recovery": "बढ़ती ऊर्जा लागत छोटे व्यवसाय की रिकवरी को खतरे में डाल रही है",
        "scientists-develop-a-next-gen-vaccine-that-could-target-multiple": "वैज्ञानिकों ने एक अगली पीढ़ी का टीका विकसित किया है जो कई को लक्षित कर सकता है",
        "stock-markets-surge-as-investors-regain-confidence-after-inflation-cooldown-2": "मुद्रास्फीति शीतलन के बाद निवेशकों का विश्वास बहाल होने पर शेयर बाजारों में उछाल",
        "stock-markets-surge-as-investors-regain-confidence-after-inflation-cooldown-3": "मुद्रास्फीति शीतलन के बाद निवेशकों का विश्वास बहाल होने पर शेयर बाजारों में उछाल",
        "stock-markets-surge-as-investors-regain-confidence-after-inflation-cooldown": "मुद्रास्फीति शीतलन के बाद निवेशकों का विश्वास बहाल होने पर शेयर बाजारों में उछाल",
        "streaming-platforms-compete-for-viewers-as-subscriptions-hit-record-highs-2": "दर्शकों के लिए स्ट्रीमिंग प्लेटफॉर्म प्रतिस्पर्धा कर रहे हैं क्योंकि सदस्यता रिकॉर्ड उच्च स्तर पर पहुंची",
        "streaming-platforms-compete-for-viewers-as-subscriptions-hit-record-highs": "दर्शकों के लिए स्ट्रीमिंग प्लेटफॉर्म प्रतिस्पर्धा कर रहे हैं क्योंकि सदस्यता रिकॉर्ड उच्च स्तर पर पहुंची",
        "tech-titans-drive-ai-forward-with-cutting-edge-intelligent-assistant-releases": "तकनीकी दिग्गज अत्याधुनिक बुद्धिमान सहायक रिलीज के साथ AI को आगे बढ़ा रहे हैं",
        "the-dollars-slight-decline-has-boosted-emerging-market-currencies": "डॉलर में मामूली गिरावट ने उभरते बाजार मुद्राओं को बढ़ावा दिया है",
        "the-gaming-industry-continues-to-boom-as-esports-leagues-attract-massive-corporate-sponsors": "ईस्पोर्ट्स लीगों द्वारा बड़े कॉर्पोरेट प्रायोजकों को आकर्षित किए जाने पर गेमिंग उद्योग फल-फूल रहा है",
        "understanding-why-people-crave-constant-updates-and-how-it-affects-mental-health": "लोग लगातार अपडेट क्यों चाहते हैं और यह मानसिक स्वास्थ्य को कैसे प्रभावित करता है इसे समझना",
        "wellness-retreats-are-becoming-the-go-to-vacation-choice-blending": "वेलनेस रिट्रीट छुट्टी की पसंदीदा पसंद बन रहे हैं, मिश्रण",
        "young-professionals-are-moving-away-from-crowded-cities-to-embrace": "युवा पेशेवर भीड़भाड़ वाले शहरों से दूर जा रहे हैं, अपनाने के लिए"
      },
    },
    en: {
      nav: {
        "home": "Home",
        "allPages": "All Pages",
        "newsCategories": "News Categories",
        "about": "About",
        "subscription": "Subscription",
        "authors": "Authors",
        "editorProfile": "Editor Profile",
        "contact": "Contact",
        "privacyPolicy": "Privacy Policy",
        "terms": "Terms & Conditions",
        "subscribe": "Subscribe",
        "readMore": "Read More",
        "latestNews": "Latest News",
        "india": "India"
      },
      cat: {
        "topStories": "Top Global Stories",
        "worldNews": "World News",
        "economy": "Economy",
        "technology": "Technology",
        "scienceHealth": "Science & Health",
        "lifestyleCulture": "Lifestyle & Culture",
        "sports": "Sports",
        "entertainment": "Entertainment",
        "otherNews": "Other news",
        "globalMarkets": "Global Markets",
        "globalStories": "Global Stories",
        "business": "Business",
        "environment": "Environment",
        "scienceEnvironment": "Science & Environment",
        "lifestyle": "Lifestyle",
        "globalNews": "Global News",
        "health": "Health",
        "wellness": "Wellness",
        "climateChange": "Climate Change",
        "astronomy": "Astronomy",
        "movies": "Movies",
        "tennis": "Tennis",
        "esports": "Esports",
        "streaming": "Streaming",
        "food": "Food",
        "travel": "Travel",
        "remoteWork": "Remote Work",
        "sportsEnt": "Sports and Entertainment",
        "economyGlobal": "Economy / Global Markets",
        "ourTeam": "Our Team"
      },
      ui: {
        "seeAll": "See All",
        "viewProfile": "View Profile",
        "owner": "Owner / Editor: Ravi Shankar Sinha",
        "quickLinks": "Quick Links",
        "legalLinks": "Legal Links",
        "contactOffice": "Contact Office",
        "date": "Sunday, October 26, 2025"
      },
      page: {
        "langName": "English",
        "nav.home": "Home",
        "nav.allPages": "All Pages",
        "nav.newsCategories": "News Categories",
        "nav.about": "About",
        "nav.subscription": "Subscription",
        "nav.authors": "Authors",
        "nav.editorProfile": "Editor Profile",
        "nav.contact": "Contact",
        "nav.privacyPolicy": "Privacy Policy",
        "nav.terms": "Terms & Conditions",
        "nav.subscribe": "Subscribe",
        "nav.readMore": "Read More",
        "nav.latestNews": "Latest News",
        "cat.topStories": "Top Global Stories",
        "cat.worldNews": "World News",
        "cat.economy": "Economy",
        "cat.technology": "Technology",
        "cat.scienceHealth": "Science & Health",
        "cat.lifestyleCulture": "Lifestyle & Culture",
        "cat.sports": "Sports",
        "cat.entertainment": "Entertainment",
        "cat.otherNews": "Other news",
        "cat.globalMarkets": "Global Markets",
        "cat.globalStories": "Global Stories",
        "ui.seeAll": "See All",
        "ui.viewProfile": "View Profile",
        "ui.owner": "Owner / Editor: Ravi Shankar Sinha",
        "ui.quickLinks": "Quick Links",
        "ui.legalLinks": "Legal Links",
        "ui.contactOffice": "Contact Office",
        "ui.date": "Sunday, October 26, 2025",
        "art.headline": "Breakthrough in Renewable Energy Storage Could Transform Global Power Supply",
        "art.author": "Ravi Shankar Sinha",
        "art.date": "November 24, 2025",
        "art.body.p0": "Global stock markets rallied sharply this week as investors reacted positively to new data showing that inflation in the United States and other major economies has continued to cool, easing fears of prolonged monetary tightening by central banks.",
        "art.body.p1": "The Dow Jones Industrial Average climbed more than 2.4%, its strongest weekly gain since June, while the S&P 500 and Nasdaq Composite each jumped 2.1% and 2.8%, respectively. European and Asian markets followed suit, with the FTSE 100, DAX, and Nikkei 225 all closing higher as investor sentiment improved across global exchanges. According to the latest report from the U.S. Bureau of Labor Statistics, the Consumer Price Index (CPI) rose by just 0.2% in September, bringing the annual inflation rate down to 3.1% — slightly below economists’ expectations. The steady decline in price growth has raised hopes that the Federal Reserve may soon begin to ease its aggressive interest rate policy.",
        "art.body.p2": "“This is a clear signal that inflationary pressures are stabilizing,” said Janet Howell, Senior Market Analyst at GlobalEdge Capital. “Investors are starting to believe the Fed might actually pull off a soft landing — slowing inflation without causing a recession.”",
        "art.body.p3": "The Dow Jones Industrial Average climbed more than 2.4%, its strongest weekly gain since June, while the S&P 500 and Nasdaq Composite each jumped 2.1% and 2.8%, respectively. European and Asian markets followed suit, with the FTSE 100, DAX, and Nikkei 225 all closing higher as investor sentiment improved across global exchanges. According to the latest report from the U.S. Bureau of Labor Statistics, the Consumer Price Index (CPI) rose by just 0.2% in September, bringing the annual inflation rate down to 3.1% — slightly below economists’ expectations. The steady decline in price growth has raised hopes that the Federal Reserve may soon begin to ease its aggressive interest rate policy.",
        "art.body.p4": "“This is a clear signal that inflationary pressures are stabilizing,” said Janet Howell, Senior Market Analyst at GlobalEdge Capital. “Investors are starting to believe the Fed might actually pull off a soft landing — slowing inflation without causing a recession.”",
        "art.body.p5": "The Dow Jones Industrial Average climbed more than 2.4%, its strongest weekly gain since June, while the S&P 500 and Nasdaq Composite each jumped 2.1% and 2.8%, respectively. European and Asian markets followed suit, with the FTSE 100, DAX, and Nikkei 225 all closing higher as investor sentiment improved across global exchanges. According to the latest report from the U.S. Bureau of Labor Statistics, the Consumer Price Index (CPI) rose by just 0.2% in September, bringing the annual inflation rate down to 3.1% — slightly below economists’ expectations. The steady decline in price growth has raised hopes that the Federal Reserve may soon begin to ease its aggressive interest rate policy.",
        "art.body.p6": "“This is a clear signal that inflationary pressures are stabilizing,” said Janet Howell, Senior Market Analyst at GlobalEdge Capital. “Investors are starting to believe the Fed might actually pull off a soft landing — slowing inflation without causing a recession.”",
        "art.h4.0": "Global Confidence Strengthens.",
        "art.h4.1": "Tech and Financial Stocks Lead the Rally.",
        "art.h4.2": "The next major event on investors’ calendars is the upcoming Federal Open Market Committee (FOMC) meeting into 2026.",
        "cat.business": "Business",
        "cat.environment": "Environment",
        "cat.scienceEnvironment": "Science & Environment",
        "cat.lifestyle": "Lifestyle",
        "cat.globalNews": "Global News",
        "index.title": "News Today - Daily Breaking News, Stories & Headlines",
        "index.desc": "News Today is a modern newspaper and media outlet based in Bhikhanpur, Bhagalpur, Bihar. Deliver breaking news, in-depth stories, and engaging journalism with a fast, responsive layout.",
        "top.label1": "Read the latest Bihar news",
        "top.label2": "Latest updates from India and the world",
        "top.label3": "Technology and education news",
        "top.label4": "Today’s economic updates",
        "404.title": "Not Found | News Today - Leading News & Media",
        "404.heading": "Oops! Page Not Found",
        "404.desc": "Looks like the news took a different route. The page you’re trying to access might have been moved, deleted, or temporarily unavailable.",
        "404.home": "Return to Homepage",
        "about.title": "About | News Today - Leading News & Media",
        "about.heading": "Our Team",
        "authors.title": "Authors | News Today - Leading News & Media",
        "authors.heading": "Meet the Authors",
        "changelog.title": "Changelog | News Today - Leading News & Media",
        "changelog.heading": "Changelog",
        "checkout.title": "Checkout | News Today - Leading News & Media",
        "contact.title": "Contact Us | News Today - Leading News & Media",
        "contact.heading": "We’re Here to Listen",
        "contact.call": "Give us a call",
        "contact.email": "Send us an email",
        "contact.visit": "Visit us in person",
        "contact.form": "Contact Form",
        "contact.respond": "We aim to respond to all messages within 24–48 hours.",
        "contact.agree": "By reaching out to us, you agree to our",
        "license.title": "License | News Today - Leading News & Media",
        "shop.title": "Shop | News Today - Leading News & Media",
        "shop.heading": "Shop with us",
        "styleguide.title": "Styleguide | News Today - Leading News & Media",
        "styleguide.heading": "Styleguide",
        "subscription.title": "Subscription | News Today - Leading News & Media",
        "subscription.heading": "Our subscription plans",
        "terms.title": "Terms & Conditions | News Today - Leading News & Media",
        "form.required": "* Required",
        "form.fullName": "Full Name *",
        "form.street": "Street Address *",
        "form.city": "City *",
        "form.state": "State/Province",
        "form.zip": "Zip/Postal Code *",
        "form.country": "Country *",
        "nav.india": "India",
        "editor.owner": "Editor-in-Chief & Owner",
        "contact.formHeading": "Contact Form",
        "contact.respondTime": "We aim to respond to all messages within 24–48 hours.",
        "contact.joinCommunity": "Join our growing community — where stories inform, inspire, and connect.",
        "contact.addressLine": "Bhikhanpur, Bhagalpur, Bihar, India",
        "home.metaTitle": "News Today | Bhagalpur Latest News",
        "home.heroDesc": "World leaders gathered in Geneva to discuss urgent actions for global warming, pledging new commitments to renewable energy and emission reduction by 2030.",
        "home.aiTech": "AI TECH",
        "home.followUs": "Follow us for",
        "home.realTimeUpdates": "real-time updates",
        "home.breakingStories": "and breaking stories from around the world.",
        "home.readFullStory": "Read full story",
        "home.allFrom": "All from",
        "home.getUpdates": "Get updates on the go — connect with us across your favorite social networks.",
        "home.keepUp": "Keep up with the latest news — be part of our audience on social media.",
        "home.stayInformed": "Stay informed wherever you are — join our community of readers and followers across social platforms.",
        "cat.health": "Health",
        "cat.wellness": "Wellness",
        "cat.climateChange": "Climate Change",
        "cat.astronomy": "Astronomy",
        "cat.movies": "Movies",
        "cat.tennis": "Tennis",
        "cat.esports": "Esports",
        "cat.streaming": "Streaming",
        "cat.food": "Food",
        "cat.travel": "Travel",
        "cat.remoteWork": "Remote Work",
        "faq.q1": "What is The Daily Placeholder?",
        "faq.a1": "Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
        "faq.q2": "Can I contribute or submit an article?",
        "faq.a2": "Aut dicta iusto neque ea voluptates. Id cupiditate cum sequi eum neque dolorem dicta quisquam non.",
        "faq.q3": "How can I subscribe to your newsletter?",
        "faq.a3": "You can subscribe using the email subscription form in the footer.",
        "faq.q4": "How do you ensure the accuracy of your news?",
        "faq.a4": "Our editorial team verifies all facts before publishing.",
        "faq.q5": "Is The Daily Placeholder affiliated?",
        "faq.a5": "It is an independent news platform.",
        "faq.q6": "How often is the website updated?",
        "faq.a6": "The website is updated multiple times daily with breaking news.",
        "form.name": "Name*",
        "form.email": "Email*",
        "form.phone": "Phone*",
        "form.message": "Message*",
        "contact.privacyLink": "Privacy Policy.",
        "author.editor": "Editor-in-Chief",
        "cat.sportsEnt": "Sports and Entertainment",
        "cat.economyGlobal": "Economy / Global Markets",
        "cat.ourTeam": "Our Team"
      },
      footer: {
        "editorialTeam": "Editorial Team",
        "subscribeHeading": "Subscribe to Our Newsletter to Stay ahead with daily headlines.",
        "footerText": "Truthful, accurate and impartial journalism with you every moment - the latest news from Bhagalpur and the country and the world.",
        "socialText": "Connect with us on social media:",
        "allRightsReserved": "© 2026 News Today. All Rights Reserved. - Made By Mohit Raj & Team",
        "headOffice": "Head Office: Bhikhanpur, Bhagalpur, Bihar, India",
        "phone": "Phone: +91 99731 89133",
        "email": "Email: ravingsinha25@gmail.com",
        "ctaTitle": "Join over 1 million aware readers - don't miss any big news.",
        "ctaSubtext": "Stay informed wherever you are — join our growing community of readers and followers across social platforms.",
        "subscribePart1": "Subscribe to our newsletter to",
        "subscribePart2": "stay ahead with daily headlines.",
        "formPlaceholder": "Enter your email",
        "formSubmit": "Subscribe",
        "formWait": "Please wait...",
        "formSuccess": "Thank you! Your submission has been received!",
        "formError": "Oops! Something went wrong while submitting the form.",
        "subscriptionLink": "Subscription Plans"
      },
      artTitles: {
        "70-nations-gathered-this-weekend-in-geneva-to-finalize-agreement-at-reducing-global-carbon-emissions": "70 nations gathered this weekend in Geneva to finalize agreement at reducing global carbon emissions",
        "a-deep-dive-into-the-evolution-of-digital-journalism-and-algorithm-driven-content-feeds": "A deep dive into the evolution of digital journalism and algorithm-driven content feeds.",
        "a-thrilling-final-match-saw-an-unexpected-champion-rise-stunning-fans-and-analysts-alike": "A thrilling final match saw an unexpected champion rise, stunning fans and analysts alike.",
        "after-two-decades-of-dominance-the-legendary-player-bids-farewell-in-an-emotional-press": "After two decades of dominance, the legendary player bids farewell in an emotional press.",
        "ai-breakthroughs-surge-as-leading-tech-firms-launch-advanced-smart-assistants": "AI Breakthroughs Surge as Leading Tech Firms Launch Advanced Smart Assistants.",
        "ai-evolution-speeds-up-as-industry-giants-showcase-future-ready-assistants": "AI Evolution Speeds Up as Industry Giants Showcase Future-Ready Assistants.",
        "ai-momentum-grows-as-tech-heavyweights-present-revolutionary-smart-assistants": "AI Momentum Grows as Tech Heavyweights Present Revolutionary Smart Assistants.",
        "ai-revolution-accelerates-as-tech-giants-unveil-next-gen-intelligent-assistants-2": "AI Revolution Accelerates as Tech Giants Unveil Next-Gen Intelligent Assistants",
        "ai-revolution-accelerates-as-tech-giants-unveil-next-gen-intelligent-assistants": "AI Revolution Accelerates as Tech Giants Unveil Next-Gen Intelligent Assistants",
        "an-opinion-piece-on-how-authentic-reporting-and-human-ethics-remain-irreplaceable-even": "An opinion piece on how authentic reporting and human ethics remain irreplaceable even.",
        "artificial-intelligence-tools-are-transforming-how-teams-collaborate-automating-tasks-workplace-efficiency": "Artificial intelligence tools are transforming how teams collaborate, automating tasks workplace efficiency.",
        "breakthrough-in-renewable-energy-storage-could-transform-global-power-supply-2": "Breakthrough in Renewable Energy Storage Could Transform Global Power Supply",
        "breakthrough-in-renewable-energy-storage-could-transform-global-power-supply": "Breakthrough in Renewable Energy Storage Could Transform Global Power Supply",
        "central-banks-signal-policy-shift-amid-inflation-cooldown": "Central Banks Signal Policy Shift Amid Inflation Cooldown",
        "chatbots-redefine-online-learning-as-students-embrace-virtual-tutors": "Chatbots Redefine Online Learning as Students Embrace Virtual Tutors",
        "cinema-revenues-hit-a-new-post-pandemic-high-fueled-by-blockbuster-releases-and-strong-attendance": "Cinema revenues hit a new post-pandemic high, fueled by blockbuster releases and strong attendance.",
        "crude-oil-prices-climbed-to-new-yearly-highs-amid-renewed-geopolitical": "Crude oil prices climbed to new yearly highs amid renewed geopolitical.",
        "demand-for-mental-health-support-tools-continues-to-rise-as-people-seek": "Demand for mental health support tools continues to rise as people seek.",
        "emerging-asian-economies-are-outperforming-forecasts-driving-global-gdp-growth-upward": "Emerging Asian economies are outperforming forecasts, driving global GDP growth upward.",
        "global-leaders-commit-to-ambitious-climate-goals-at-geneva-summit": "Global Leaders Commit to Ambitious Climate Goals at Geneva Summit.",
        "global-markets-react-positively-to-trade-agreement-between-asia-and-europe": "Global Markets React Positively to Trade Agreement Between Asia and Europe",
        "innovation-booms-in-ai-as-top-tech-brands-debut-their-latest-intelligent-systems": "Innovation Booms in AI as Top Tech Brands Debut Their Latest Intelligent Systems.",
        "major-cities-adopt-ai-traffic-systems-to-combat-congestion-and-pollution": "Major Cities Adopt AI Traffic Systems to Combat Congestion and Pollution",
        "major-streaming-giants-are-in-fierce-competition-to-secure-exclusive-deals-with-top-creators": "Major streaming giants are in fierce competition to secure exclusive deals with top creators.",
        "markets-responded-positively-to-the-european-central-banks-signal": "Markets responded positively to the European Central Bank’s signal.",
        "more-people-are-embracing-minimalist-lifestyles-focusing-on-possessions": "More people are embracing minimalist lifestyles, focusing on possessions.",
        "next-gen-ai-takes-center-stage-as-major-tech-companies-reveal-intelligent-tools": "Next-Gen AI Takes Center Stage as Major Tech Companies Reveal Intelligent Tools.",
        "plant-based-products-are-taking-over-restaurant-menus-and-grocery": "Plant-based products are taking over restaurant menus and grocery.",
        "recent-satellite-data-shows-the-arctic-ice-melting-faster-than-expected": "Recent satellite data shows the Arctic ice melting faster than expected.",
        "researchers-have-corrected-genetic-mutations-in-human-cells": "Researchers have corrected genetic mutations in human cells.",
        "rising-energy-costs-threaten-small-business-recovery": "Rising Energy Costs Threaten Small Business Recovery",
        "scientists-develop-a-next-gen-vaccine-that-could-target-multiple": "Scientists develop a next-gen vaccine that could target multiple.",
        "stock-markets-surge-as-investors-regain-confidence-after-inflation-cooldown-2": "Stock Markets Surge as Investors Regain Confidence After Inflation Cooldown",
        "stock-markets-surge-as-investors-regain-confidence-after-inflation-cooldown-3": "Stock Markets Surge as Investors Regain Confidence After Inflation Cooldown",
        "stock-markets-surge-as-investors-regain-confidence-after-inflation-cooldown": "Stock Markets Surge as Investors Regain Confidence After Inflation Cooldown",
        "streaming-platforms-compete-for-viewers-as-subscriptions-hit-record-highs-2": "Streaming Platforms Compete for Viewers as Subscriptions Hit Record Highs",
        "streaming-platforms-compete-for-viewers-as-subscriptions-hit-record-highs": "Streaming Platforms Compete for Viewers as Subscriptions Hit Record Highs",
        "tech-titans-drive-ai-forward-with-cutting-edge-intelligent-assistant-releases": "Tech Titans Drive AI Forward With Cutting-Edge Intelligent Assistant Releases.",
        "the-dollars-slight-decline-has-boosted-emerging-market-currencies": "The dollar’s slight decline has boosted emerging market currencies.",
        "the-gaming-industry-continues-to-boom-as-esports-leagues-attract-massive-corporate-sponsors": "The gaming industry continues to boom as esports leagues attract massive corporate sponsors.",
        "understanding-why-people-crave-constant-updates-and-how-it-affects-mental-health": "Understanding why people crave constant updates and how it affects mental health.",
        "wellness-retreats-are-becoming-the-go-to-vacation-choice-blending": "Wellness retreats are becoming the go-to vacation choice, blending.",
        "young-professionals-are-moving-away-from-crowded-cities-to-embrace": "Young professionals are moving away from crowded cities to embrace."
      },
    }
  };

  // Shared article body (same for all articles)
  var artBody = {
    hi: [
      "इस सप्ताह वैश्विक शेयर बाजारों में तेजी आई क्योंकि निवेशकों ने नए डेटा पर सकारात्मक प्रतिक्रिया दी जिसमें पता चला कि संयुक्त राज्य अमेरिका और अन्य बड़ी अर्थव्यवस्थाओं में मुद्रास्फीति ठंडी हो रही है, जिससे केंद्रीय बैंकों द्वारा लंबे समय तक मौद्रिक कसने के डर को कम किया गया है।",
      "डाउ जोन्स इंडस्ट्रियल एवरेज 2.4% से अधिक चढ़ा, जो जून के बाद का सबसे बड़ा साप्ताहिक लाभ है, जबकि एसएंडपी 500 और नैस्डैक कंपोजिट क्रमशः 2.1% और 2.8% बढ़े। यूरोपीय और एशियाई बाजारों ने भी इसका अनुसरण किया, जहां एफटीएसई 100, डैक्स और निक्केई 225 सभी ऊंचे पर बंद हुए क्योंकि वैश्विक एक्सचेंजों में निवेशक भावना में सुधार हुआ। अमेरिकी श्रम सांख्यिकी ब्यूरो की नवीनतम रिपोर्ट के अनुसार, उपभोक्ता मूल्य सूचकांक (सीपीआई) सितंबर में सिर्फ 0.2% बढ़ा, जिससे वार्षिक मुद्रास्फीति दर घटकर 3.1% रह गई — अर्थशास्त्रियों की उम्मीदों से थोड़ा कम। मूल्य वृद्धि में स्थिर गिरावट ने उम्मीदें बढ़ाई हैं कि फेडरल रिजर्व जल्द ही अपनी आक्रामक ब्याज दर नीति में ढील देना शुरू कर सकता है।",
      "“यह मुद्रास्फीति के दबाव के स्थिर होने का स्पष्ट संकेत है,” ग्लोबलएज कैपिटल में वरिष्ठ बाजार विश्लेषक जेनेट हॉवेल ने कहा। “निवेशकों को विश्वास होने लगा है कि फेड वास्तव में एक सॉफ्ट लैंडिंग हासिल कर सकता है — मंदी का कारण बने बिना मुद्रास्फीति को धीमा करना।”",
      "डाउ जोन्स इंडस्ट्रियल एवरेज 2.4% से अधिक चढ़ा, जो जून के बाद का सबसे बड़ा साप्ताहिक लाभ है, जबकि एसएंडपी 500 और नैस्डैक कंपोजिट क्रमशः 2.1% और 2.8% बढ़े। यूरोपीय और एशियाई बाजारों ने भी इसका अनुसरण किया, जहां एफटीएसई 100, डैक्स और निक्केई 225 सभी ऊंचे पर बंद हुए क्योंकि वैश्विक एक्सचेंजों में निवेशक भावना में सुधार हुआ। अमेरिकी श्रम सांख्यिकी ब्यूरो की नवीनतम रिपोर्ट के अनुसार, उपभोक्ता मूल्य सूचकांक (सीपीआई) सितंबर में सिर्फ 0.2% बढ़ा, जिससे वार्षिक मुद्रास्फीति दर घटकर 3.1% रह गई — अर्थशास्त्रियों की उम्मीदों से थोड़ा कम। मूल्य वृद्धि में स्थिर गिरावट ने उम्मीदें बढ़ाई हैं कि फेडरल रिजर्व जल्द ही अपनी आक्रामक ब्याज दर नीति में ढील देना शुरू कर सकता है।",
      "“यह मुद्रास्फीति के दबाव के स्थिर होने का स्पष्ट संकेत है,” ग्लोबलएज कैपिटल में वरिष्ठ बाजार विश्लेषक जेनेट हॉवेल ने कहा। “निवेशकों को विश्वास होने लगा है कि फेड वास्तव में एक सॉफ्ट लैंडिंग हासिल कर सकता है — मंदी का कारण बने बिना मुद्रास्फीति को धीमा करना।”",
      "डाउ जोन्स इंडस्ट्रियल एवरेज 2.4% से अधिक चढ़ा, जो जून के बाद का सबसे बड़ा साप्ताहिक लाभ है, जबकि एसएंडपी 500 और नैस्डैक कंपोजिट क्रमशः 2.1% और 2.8% बढ़े। यूरोपीय और एशियाई बाजारों ने भी इसका अनुसरण किया, जहां एफटीएसई 100, डैक्स और निक्केई 225 सभी ऊंचे पर बंद हुए क्योंकि वैश्विक एक्सचेंजों में निवेशक भावना में सुधार हुआ। अमेरिकी श्रम सांख्यिकी ब्यूरो की नवीनतम रिपोर्ट के अनुसार, उपभोक्ता मूल्य सूचकांक (सीपीआई) सितंबर में सिर्फ 0.2% बढ़ा, जिससे वार्षिक मुद्रास्फीति दर घटकर 3.1% रह गई — अर्थशास्त्रियों की उम्मीदों से थोड़ा कम। मूल्य वृद्धि में स्थिर गिरावट ने उम्मीदें बढ़ाई हैं कि फेडरल रिजर्व जल्द ही अपनी आक्रामक ब्याज दर नीति में ढील देना शुरू कर सकता है।",
      "“यह मुद्रास्फीति के दबाव के स्थिर होने का स्पष्ट संकेत है,” ग्लोबलएज कैपिटल में वरिष्ठ बाजार विश्लेषक जेनेट हॉवेल ने कहा। “निवेशकों को विश्वास होने लगा है कि फेड वास्तव में एक सॉफ्ट लैंडिंग हासिल कर सकता है — मंदी का कारण बने बिना मुद्रास्फीति को धीमा करना।”"
    ],
    en: [
      "Global stock markets rallied sharply this week as investors reacted positively to new data showing that inflation in the United States and other major economies has continued to cool, easing fears of prolonged monetary tightening by central banks.",
      "The Dow Jones Industrial Average climbed more than 2.4%, its strongest weekly gain since June, while the S&P 500 and Nasdaq Composite each jumped 2.1% and 2.8%, respectively. European and Asian markets followed suit, with the FTSE 100, DAX, and Nikkei 225 all closing higher as investor sentiment improved across global exchanges. According to the latest report from the U.S. Bureau of Labor Statistics, the Consumer Price Index (CPI) rose by just 0.2% in September, bringing the annual inflation rate down to 3.1% — slightly below economists’ expectations. The steady decline in price growth has raised hopes that the Federal Reserve may soon begin to ease its aggressive interest rate policy.",
      "“This is a clear signal that inflationary pressures are stabilizing,” said Janet Howell, Senior Market Analyst at GlobalEdge Capital. “Investors are starting to believe the Fed might actually pull off a soft landing — slowing inflation without causing a recession.”",
      "The Dow Jones Industrial Average climbed more than 2.4%, its strongest weekly gain since June, while the S&P 500 and Nasdaq Composite each jumped 2.1% and 2.8%, respectively. European and Asian markets followed suit, with the FTSE 100, DAX, and Nikkei 225 all closing higher as investor sentiment improved across global exchanges. According to the latest report from the U.S. Bureau of Labor Statistics, the Consumer Price Index (CPI) rose by just 0.2% in September, bringing the annual inflation rate down to 3.1% — slightly below economists’ expectations. The steady decline in price growth has raised hopes that the Federal Reserve may soon begin to ease its aggressive interest rate policy.",
      "“This is a clear signal that inflationary pressures are stabilizing,” said Janet Howell, Senior Market Analyst at GlobalEdge Capital. “Investors are starting to believe the Fed might actually pull off a soft landing — slowing inflation without causing a recession.”",
      "The Dow Jones Industrial Average climbed more than 2.4%, its strongest weekly gain since June, while the S&P 500 and Nasdaq Composite each jumped 2.1% and 2.8%, respectively. European and Asian markets followed suit, with the FTSE 100, DAX, and Nikkei 225 all closing higher as investor sentiment improved across global exchanges. According to the latest report from the U.S. Bureau of Labor Statistics, the Consumer Price Index (CPI) rose by just 0.2% in September, bringing the annual inflation rate down to 3.1% — slightly below economists’ expectations. The steady decline in price growth has raised hopes that the Federal Reserve may soon begin to ease its aggressive interest rate policy.",
      "“This is a clear signal that inflationary pressures are stabilizing,” said Janet Howell, Senior Market Analyst at GlobalEdge Capital. “Investors are starting to believe the Fed might actually pull off a soft landing — slowing inflation without causing a recession.”"
    ],
  };

  var artH4 = {
    hi: [
      "वैश्विक विश्वास मजबूत हो रहा है।",
      "टेक और वित्तीय शेयर रैली का नेतृत्व कर रहे हैं।",
      "निवेशकों के कैलेंडर पर अगली बड़ी घटना आगामी फेडरल ओपन मार्केट कमेटी (एफओएमसी) बैठक 2026 में है।"
    ],
    en: [
      "Global Confidence Strengthens.",
      "Tech and Financial Stocks Lead the Rally.",
      "The next major event on investors’ calendars is the upcoming Federal Open Market Committee (FOMC) meeting into 2026."
    ],
  };

  var artCatEn = {};

  function get(key) {
    var t = translations[currentLang];
    if (!t) return key;
    // direct page key
    if (t.page && t.page[key] !== undefined) return t.page[key];
    return key;
  }

  var currentLang = localStorage.getItem('news_today_lang') || 'hi';

  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'hi';
    currentLang = lang;
    localStorage.setItem('news_today_lang', lang);
    var t = translations[lang];

    document.documentElement.lang = lang;
    if (lang === 'ur') { document.body.setAttribute('dir', 'rtl'); }
    else { document.body.removeAttribute('dir'); }

    // Language button text
    var btn = document.querySelector('.lang-selector-btn .lang-btn-text');
    if (btn) btn.textContent = t.langName || translations.hi.langName;

    // data-i18n (full dotted key, e.g. nav.home, cat.worldNews, page.xxx)
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      var val = null;
      if (t.page && t.page[key] !== undefined) val = t.page[key];
      else if (key.indexOf('nav.') === 0 && t.nav && t.nav[key.slice(4)] !== undefined) val = t.nav[key.slice(4)];
      else if (key.indexOf('cat.') === 0 && t.cat && t.cat[key.slice(4)] !== undefined) val = t.cat[key.slice(4)];
      else if (key.indexOf('ui.') === 0 && t.ui && t.ui[key.slice(3)] !== undefined) val = t.ui[key.slice(3)];
      else if (key.indexOf('footer.') === 0 && t.footer && t.footer[key.slice(7)] !== undefined) val = t.footer[key.slice(7)];
      else if (key.indexOf('art.title.') === 0 && t.artTitles && t.artTitles[key.slice(10)] !== undefined) val = t.artTitles[key.slice(10)];
      if (val !== null && val !== undefined) el.textContent = val;
    });

    // Legacy attribute conventions
    document.querySelectorAll('[data-i18n-nav]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-nav');
      if (t.nav && t.nav[key] !== undefined) el.textContent = t.nav[key];
    });
    document.querySelectorAll('[data-i18n-cat]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-cat');
      if (t.cat && t.cat[key] !== undefined) el.textContent = t.cat[key];
    });
    document.querySelectorAll('[data-i18n-ui]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-ui');
      if (t.ui && t.ui[key] !== undefined) el.textContent = t.ui[key];
    });
    document.querySelectorAll('[data-i18n-footer]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-footer');
      if (key === 'quickLinks') el.textContent = t.ui.quickLinks;
      else if (key === 'legalLinks') el.textContent = t.ui.legalLinks;
      else if (key === 'contactUs') el.textContent = t.ui.contactOffice;
      else if (key === 'address') el.textContent = t.nav.headOffice;
      else if (t.footer && t.footer[key] !== undefined) el.textContent = t.footer[key];
    });

    // Subscribe buttons
    document.querySelectorAll('.primary-button-text').forEach(function(el) {
      el.textContent = t.nav.subscribe;
    });

    // Article content swap (news posts)
    swapArticleContent(lang);

    // Active state on dropdown items
    document.querySelectorAll('.lang-dropdown-item').forEach(function(item) {
      if (item.getAttribute('data-lang') === lang) item.classList.add('active');
      else item.classList.remove('active');
    });
  }

  function swapArticleContent(lang) {
    var t = translations[lang] || translations.hi;
    var isPost = document.querySelector('.news-details-heading') || document.querySelector('.world-news-title');
    if (!isPost) return;
    var slug = null;
    var m = window.location.pathname.match(/news-posts\/([^\/]+)\.html$/);
    if (m) slug = m[1];
    if (!slug) return;

    // Title
    var h1 = document.querySelector('.news-details-heading');
    if (h1 && t.artTitles && t.artTitles[slug] !== undefined) h1.textContent = t.artTitles[slug];

    // Category
    var catLinks = document.querySelectorAll('.news-category-text');
    catLinks.forEach(function(link) {
      var txt = link.textContent.trim();
      // map en category -> hi
      var mapped = null;
      if (lang === 'hi') {
        if (txt === 'World News') mapped = 'विश्व समाचार';
        else if (txt === 'Economy') mapped = 'अर्थव्यवस्था';
        else if (txt === 'Technology') mapped = 'तकनीक';
        else if (txt === 'Science & Health' || txt === 'Science & Environment') mapped = 'विज्ञान एवं स्वास्थ्य';
        else if (txt === 'Lifestyle & Culture') mapped = 'जीवनशैली एवं संस्कृति';
        else if (txt === 'Sports & Entertainment' || txt === 'Sports and Entertainment') mapped = 'खेल और मनोरंजन';
        else if (txt === 'Entertainment') mapped = 'मनोरंजन';
        else if (txt === 'Other news' || txt === 'अन्य ख़बरें') mapped = 'अन्य ख़बरें';
        else if (txt === 'Global Markets') mapped = 'वैश्विक बाजार';
        else if (txt === 'Global Stories') mapped = 'वैश्विक कहानियाँ';
        else if (txt === 'Global News') mapped = 'विश्व समाचार';
      }
      if (mapped) link.textContent = mapped;
    });

    // Author name
    var author = document.querySelector('.author-name-main');
    if (author) author.textContent = (lang === 'hi') ? 'रवि शंकर सिन्हा' : 'Ravi Shankar Sinha';

    // Date
    var dateEls = document.querySelectorAll('.news-category-text');
    dateEls.forEach(function(el) {
      var txt = el.textContent.trim();
      if (txt === 'November 24, 2025' && lang === 'hi') el.textContent = '24 नवंबर, 2025';
      else if (txt === 'November 25, 2025' && lang === 'hi') el.textContent = '25 नवंबर, 2025';
      else if (txt === '24 नवंबर, 2025' && lang === 'en') el.textContent = 'November 24, 2025';
      else if (txt === '25 नवंबर, 2025' && lang === 'en') el.textContent = 'November 25, 2025';
    });

    // Body paragraphs + h4
    var body = document.querySelector('.news-details-content');
    if (body) {
      var paras = body.querySelectorAll('p');
      var h4s = body.querySelectorAll('h4');
      var pData = (lang === 'hi') ? artBody.hi : artBody.en;
      var hData = (lang === 'hi') ? artH4.hi : artH4.en;
      paras.forEach(function(p, i) {
        if (pData[i] !== undefined) p.textContent = pData[i];
      });
      h4s.forEach(function(h, i) {
        if (hData[i] !== undefined) h.textContent = hData[i];
      });
    }
  }

  // Meta title / description
  function updateMeta(lang) {
    var slug = null;
    var m = window.location.pathname.match(/news-posts\/([^\/]+)\.html$/);
    if (m) slug = m[1];
    var t = translations[lang];
    if (slug && t.artTitles && t.artTitles[slug]) {
      var title = t.artTitles[slug];
      var mt = document.querySelector('meta[property="og:title"]');
      if (mt) mt.setAttribute('content', title);
      var tt = document.querySelector('meta[name="twitter:title"]');
      if (tt) tt.setAttribute('content', title);
      var htag = document.querySelector('title');
      if (htag) htag.textContent = title + ' | News Today';
      var md = document.querySelector('meta[name="description"]');
      if (md) md.setAttribute('content', title);
      var td = document.querySelector('meta[name="twitter:description"]');
      if (td) td.setAttribute('content', title);
    }
  }

  window.setNewsLanguage = function(lang) {
    applyLanguage(lang);
    updateMeta(lang);
  };

  document.addEventListener('DOMContentLoaded', function() {
    applyLanguage(currentLang);
    updateMeta(currentLang);

    document.querySelectorAll('.lang-dropdown-item').forEach(function(item) {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        var selected = this.getAttribute('data-lang');
        applyLanguage(selected);
        updateMeta(selected);
        this.parentElement.style.display = 'none';
      });
    });

    // Close dropdown on outside click / ESC
    document.addEventListener('click', function(e) {
      var wrap = document.querySelector('.lang-selector-wrap');
      if (wrap && !wrap.contains(e.target)) {
        var menu = document.querySelector('.lang-dropdown-menu');
        if (menu) menu.style.display = 'none';
      }
    }, true);
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        var menu = document.querySelector('.lang-dropdown-menu');
        if (menu) menu.style.display = 'none';
      }
    });
  });

})();

