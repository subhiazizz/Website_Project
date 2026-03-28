const form = document.getElementById("contact-form");
const statusNode = document.getElementById("form-status");
const languageButtons = document.querySelectorAll(".lang-btn");

const i18n = {
  de: {
    nav_services: "Leistungen",
    nav_work: "Arbeiten",
    nav_process: "Vorgehen",
    nav_contact: "Kontakt",
    hero_eyebrow: "Growth-Agentur fuer starke Marken",
    hero_title: "Wir bauen digitale Praesenz, die Aufmerksamkeit in Umsatz verwandelt.",
    hero_copy:
      "Von High-Performance-Websites bis SEO-Skalierung und Social Storytelling auf Instagram und TikTok: wir bauen ein System fuer Reichweite, Leads und nachhaltiges Wachstum.",
    hero_cta_primary: "Projekt starten",
    hero_cta_secondary: "Case Stories ansehen",
    ticker_1: "Kreative Strategie",
    ticker_2: "Technische Umsetzung",
    ticker_3: "Messbares Wachstum",
    services_title: "Was wir fuer dein Wachstum umsetzen",
    service_web_title: "Webentwicklung",
    service_web_body:
      "Conversion-orientierte Websites mit Premium-UI, sauberer Architektur und hoher Geschwindigkeit fuer messbaren Business-Impact.",
    service_seo_title: "SEO",
    service_seo_body:
      "Technisches SEO, suchintentionbasierter Content und strukturierte On-Page-Optimierung fuer hochwertige Rankings.",
    service_social_title: "Social Media Management",
    service_social_body:
      "Content-Systeme fuer Instagram und TikTok, die Markenwirkung steigern und eine verlaessliche Lead-Pipeline aufbauen.",
    work_title: "Umsetzung mit Case-Story-Ansatz",
    work_copy:
      "Wir inszenieren deine Marke digital so, dass sie professionell wirkt, klar positioniert ist und im Markt sichtbar bleibt.",
    work_1: "Neue Website + SEO Cluster: +187% organischer Umsatz in 8 Monaten.",
    work_2: "Relaunch + Funnel UX: 3.9x mehr Demo-Bookings bei gleichem Traffic.",
    work_3: "TikTok/Instagram Framework: +420k Reach und stabile Lead-Qualitaet.",
    process_title: "Daten statt Bauchgefuehl",
    process_copy:
      "Jede Entscheidung basiert auf KPIs, Search- und Behavioral-Daten. So optimieren wir nicht nur Design, sondern echte Business-Performance.",
    process_1: "Strategie-Sprint, Positionierung und messbare Wachstumsziele",
    process_2: "Build-Phase: Website, SEO-Framework und Social Content Engine",
    process_3: "Woechentliche Optimierung, Testing und Skalierung",
    stat_1: "durchschnittliches organisches Wachstum in 12 Monaten",
    stat_2: "mehr qualifizierte Leads durch integrierte Funnels",
    stat_3: "der Projekte werden im Zeitplan geliefert",
    contact_title: "Erzaehl uns, wie Wachstum fuer dich aussieht",
    contact_copy:
      "In einem fokussierten Erstgespraech analysieren wir deinen Status quo, setzen Prioritaeten und definieren den schnellsten Weg zu Ergebnissen.",
    form_name: "Name",
    form_email: "E-Mail",
    form_company: "Unternehmen (optional)",
    form_service: "Leistungsbereich",
    form_select: "Bitte waehlen",
    form_service_web: "Webentwicklung",
    form_service_social: "Social Media Management",
    form_service_full: "Full Service",
    form_message: "Projektziele",
    form_submit: "Sichere Anfrage senden",
    status_sending: "Anfrage wird sicher uebermittelt...",
    status_short_message: "Bitte beschreibe dein Projekt genauer (mindestens 20 Zeichen).",
    status_failed: "Die Anfrage konnte nicht gesendet werden.",
    status_success: "Vielen Dank! Wir melden uns in Kuerze.",
    page_title: "Nova Reach Studio | Wachstum durch Design"
  },
  en: {
    nav_services: "Services",
    nav_work: "Work",
    nav_process: "Process",
    nav_contact: "Contact",
    hero_eyebrow: "Growth Agency for Bold Brands",
    hero_title: "We build digital presence that turns attention into revenue.",
    hero_copy:
      "From high-performance websites to SEO scale and social storytelling on Instagram and TikTok, we build one engine for reach, leads and sustainable growth.",
    hero_cta_primary: "Start your project",
    hero_cta_secondary: "See case stories",
    ticker_1: "Creative strategy",
    ticker_2: "Technical execution",
    ticker_3: "Measured growth",
    services_title: "What we execute for your growth",
    service_web_title: "Web Development",
    service_web_body:
      "Conversion-ready websites with premium UI, clean architecture and fast loading for measurable business impact.",
    service_seo_title: "SEO",
    service_seo_body:
      "Technical SEO, search-intent content and structured on-page optimization to win high-value rankings.",
    service_social_title: "Social Media Management",
    service_social_body:
      "Content systems for Instagram and TikTok that strengthen your brand and create a reliable lead pipeline.",
    work_title: "Case-story style execution",
    work_copy:
      "We shape your digital presence so your brand looks premium, stays clearly positioned and wins market attention.",
    work_1: "New website + SEO clusters: +187% organic revenue in 8 months.",
    work_2: "Relaunch + funnel UX: 3.9x more demo bookings from the same traffic.",
    work_3: "TikTok/Instagram framework: +420k reach and stable lead quality.",
    process_title: "Data over guesswork",
    process_copy:
      "Every decision is guided by KPI, search and behavioral data. We optimize not only design, but real business outcomes.",
    process_1: "Strategy sprint, positioning and measurable growth goals",
    process_2: "Build phase: website, SEO framework and social content engine",
    process_3: "Weekly optimization loops, testing and scale-up",
    stat_1: "average organic growth within 12 months",
    stat_2: "more qualified leads with integrated funnels",
    stat_3: "of projects delivered on schedule",
    contact_title: "Tell us what growth looks like for you",
    contact_copy:
      "In a focused first call, we map your current state, define priorities and build the fastest path to results.",
    form_name: "Name",
    form_email: "Email",
    form_company: "Company (optional)",
    form_service: "Service",
    form_select: "Please choose",
    form_service_web: "Web Development",
    form_service_social: "Social Media Management",
    form_service_full: "Full Service",
    form_message: "Project goals",
    form_submit: "Send secure request",
    status_sending: "Sending your secure request...",
    status_short_message: "Please describe your project in more detail (at least 20 characters).",
    status_failed: "Your request could not be sent.",
    status_success: "Thank you. We will get back to you shortly.",
    page_title: "Nova Reach Studio | Growth by Design"
  }
};

function applyLanguage(lang) {
  const selected = i18n[lang] ? lang : "de";
  document.documentElement.lang = selected;
  document.title = i18n[selected].page_title;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (i18n[selected][key]) {
      node.textContent = i18n[selected][key];
    }
  });

  languageButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === selected);
  });

  localStorage.setItem("siteLanguage", selected);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

const savedLanguage = localStorage.getItem("siteLanguage") || "de";
applyLanguage(savedLanguage);

async function sendContact(payload, lang) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || i18n[lang].status_failed);
  }

  return data;
}

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const lang = document.documentElement.lang === "en" ? "en" : "de";
    statusNode.textContent = i18n[lang].status_sending;

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      service: String(formData.get("service") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      website: String(formData.get("website") || "").trim()
    };

    if (payload.message.length < 20) {
      statusNode.textContent = i18n[lang].status_short_message;
      return;
    }

    try {
      const result = await sendContact(payload, lang);
      statusNode.textContent = result.message || i18n[lang].status_success;
      form.reset();
    } catch (error) {
      statusNode.textContent = error.message;
    }
  });
}
