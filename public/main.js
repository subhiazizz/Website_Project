const form = document.getElementById("contact-form");
const statusNode = document.getElementById("form-status");
const languageButtons = document.querySelectorAll(".lang-btn");
const COOKIE_CONSENT_KEY = "cookieConsent";
const COOKIE_CONSENT_VERSION = 1;
const THEME_KEY = "siteTheme";

const i18n = {
  de: {
    title_home: "Webseite entwickeln lassen | Nova Reach Studio",
    title_about: "Über uns | Agentur für Webentwicklung & SEO",
    title_services: "Leistungen: Webentwicklung, SEO, Social Media",
    title_process: "Unser Prozess | Website entwickeln & SEO skalieren",
    title_contact: "Kontakt | Anfrage für Webentwicklung & SEO",
    title_privacy: "Nova Reach Studio | Datenschutz",
    title_imprint: "Nova Reach Studio | Impressum",
    nav_home: "Home",
    nav_about: "Über uns",
    nav_services: "Leistungen",
    nav_process: "Vorgehen",
    nav_contact: "Kontakt",
    home_eyebrow: "Full-Service Marketingagentur",
    home_title: "Webseite entwickeln lassen: modern, schnell und sichtbar bei Google.",
    home_copy:
      "Wir entwickeln Premium-Websites für Unternehmen, verbessern deine Google-Rankings mit SEO und bauen Social-Media-Systeme für messbares Wachstum.",
    home_cta_primary: "Projekt starten",
    home_cta_secondary: "Leistungen entdecken",
    home_visual_tag_1: "Growth Architecture",
    home_visual_title_1: "Data, Design und Kampagnen aus einem System.",
    home_visual_alt_1: "Modernes Team analysiert KPI-Dashboard",
    home_visual_alt_2: "Strategie-Workshop in einem modernen Studio",
    home_visual_alt_3: "Social Media Content Produktion im Team",
    home_card_1_title: "Webentwicklung",
    home_card_1_body: "Performance-first Websites, die Besucher in Kunden verwandeln.",
    home_card_2_title: "SEO",
    home_card_2_body: "Technische Präzision und Content-Strategie für langfristige Sichtbarkeit.",
    home_card_3_title: "Social Media",
    home_card_3_body: "Erzählformate für Instagram und TikTok, die Aufmerksamkeit in Leads umwandeln.",
    metric_1: "durchschnittliches organisches Wachstum in 12 Monaten",
    metric_2: "mehr qualifizierte Leads durch integrierte Funnels",
    metric_3: "Projektlieferung im Zeitplan",
    about_eyebrow: "Über uns",
    about_title: "Wir verbinden Design, Strategie und Engineering zu einem Growth-System.",
    about_copy:
      "Nova Reach Studio hilft Unternehmen, einprägsame digitale Erlebnisse zu schaffen und langfristige Sichtbarkeit aufzubauen.",
    about_block_1_title: "Unsere Philosophie",
    about_block_1_body:
      "Großes Marketing beginnt mit Klarheit. Wir bauen Systeme, die Brand Voice, technische Exzellenz und messbaren Business-Impact verbinden.",
    about_block_2_title: "Was uns anders macht",
    about_block_2_body:
      "Wir kombinieren Premium-Design mit harten Performance-Daten. Jeder Launch ist schön und zugleich accountable.",
    about_block_3_title: "Team-Mindset",
    about_block_3_body:
      "Interdisziplinäre Teams, schnelle Feedback-Loops und klare Verantwortung bringen Projekte zuverlässig von Insight zu Impact.",
    about_visual_alt: "Kreativteam im Marken-Workshop",
    services_eyebrow: "Leistungen",
    services_title: "Webentwicklung, SEO und Social Media aus einer Agentur.",
    service_web_title: "Webentwicklung",
    service_web_body: "Moderne, schnelle und conversion-orientierte Websites für deinen Markt.",
    service_seo_title: "SEO",
    service_seo_body: "Technisches SEO und Content-Architektur für dauerhafte Rankings.",
    service_social_title: "Social Media Management",
    service_social_body:
      "Kreative Systeme für Instagram und TikTok, die Reichweite, Vertrauen und Leads steigern.",
    services_faq_title: "FAQ zur Website-Entwicklung und SEO",
    services_faq_q1: "Wie lange dauert es, eine professionelle Website entwickeln zu lassen?",
    services_faq_a1:
      "Je nach Umfang dauert ein Projekt in der Regel 4 bis 10 Wochen. Wir arbeiten in klaren Sprints mit transparenten Meilensteinen.",
    services_faq_q2: "Kann meine neue Website direkt für Google optimiert werden?",
    services_faq_a2:
      "Ja. Technisches SEO, Seitenstruktur, Ladezeit und Content-Grundlagen werden direkt beim Build integriert.",
    services_faq_q3: "Für welche Unternehmen ist eure SEO-Strategie geeignet?",
    services_faq_a3:
      "Für lokale Dienstleister, B2B-Unternehmen und wachsende Marken, die planbar mehr qualifizierte Anfragen möchten.",
    services_visual_alt_1: "Website-Interface auf mehreren Displays",
    services_visual_alt_2: "SEO- und Analyse-Dashboard",
    services_visual_alt_3: "Planung von Social-Media-Kampagnen",
    process_eyebrow: "Vorgehen",
    process_title: "Ein klares System von Strategie bis Skalierung.",
    process_step_1_title: "Strategie-Sprint",
    process_step_1_body: "Positionierung, Zielgruppen-Mapping und KPI-Setup für echte Wachstumsziele.",
    process_step_2_title: "Build und Launch",
    process_step_2_body: "Website, SEO-Stack und Content-Systeme als integrierte Plattform.",
    process_step_3_title: "Optimieren und Skalieren",
    process_step_3_body: "Wöchentliche Tests und Iterationen auf Basis von Funnel-, Search- und Engagement-Daten.",
    process_block_title: "Transparente Zusammenarbeit",
    process_block_body:
      "Jede Woche bekommst du klare Reports, Prioritäten und nächste Schritte. So bleibt Wachstum planbar und nachvollziehbar.",
    process_visual_alt: "Growth-Roadmap an einem großen Screen",
    contact_eyebrow: "Kontakt",
    contact_title: "Erzähl uns deine Vision, wir designen den Wachstumspfad.",
    contact_visual_tag: "Antwort in 24h",
    contact_visual_title: "Wir melden uns schnell mit klaren nächsten Schritten.",
    contact_visual_alt: "Beratungsgespräch im Team",
    form_name: "Name",
    form_email: "E-Mail",
    form_company: "Unternehmen (optional)",
    form_service: "Leistungsbereich",
    form_select: "Bitte wählen",
    form_service_web: "Webentwicklung",
    form_service_social: "Social Media Management",
    form_service_full: "Full Service",
    form_message: "Projektziele",
    form_submit: "Sichere Anfrage senden",
    footer_text: "Nova Reach Studio. Gebaut für Marken, die führen wollen.",
    footer_privacy: "Datenschutz",
    footer_imprint: "Impressum",
    privacy_eyebrow: "Datenschutz",
    privacy_title: "Datenschutzerklärung",
    privacy_intro:
      "Diese Erklärung informiert über die Verarbeitung personenbezogener Daten gemäß DSGVO und BDSG.",
    privacy_controller_title: "1. Verantwortlicher",
    privacy_controller_body:
      "Nova Reach Studio, Musterstraße 1, 10115 Berlin, E-Mail: kontakt@novareach.example",
    privacy_data_title: "2. Welche Daten wir verarbeiten",
    privacy_data_body:
      "Bei Nutzung des Kontaktformulars verarbeiten wir Name, E-Mail, optional Unternehmen, Leistungsbereich und Nachricht ausschließlich zur Bearbeitung deiner Anfrage.",
    privacy_legal_title: "3. Rechtsgrundlagen",
    privacy_legal_body:
      "Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Kommunikation), Art. 6 Abs. 1 lit. c DSGVO (gesetzliche Pflichten) und Art. 6 Abs. 1 lit. f DSGVO (IT-Sicherheit und Missbrauchsprävention).",
    privacy_cookie_title: "4. Cookies und Einwilligung",
    privacy_cookie_body:
      "Wir verwenden nur technisch notwendige Speicherungen standardmäßig. Optionale Cookies oder Tracking werden erst nach deiner aktiven Einwilligung gesetzt und können jederzeit über \"Cookie-Einstellungen\" geändert werden.",
    privacy_rights_title: "5. Deine Rechte",
    privacy_rights_body:
      "Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch sowie das Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde.",
    privacy_update_title: "6. Stand und Änderungen",
    privacy_update_body:
      "Stand: März 2026. Wir passen diese Datenschutzerklärung bei technischen oder rechtlichen Änderungen an.",
    imprint_eyebrow: "Impressum",
    imprint_title: "Angaben gemäß § 5 TMG",
    imprint_provider_title: "Diensteanbieter",
    imprint_provider_body_html: "Nova Reach Studio GmbH<br />Musterstraße 1<br />10115 Berlin",
    imprint_management_title: "Vertreten durch",
    imprint_management_body: "Geschäftsführung: Max Mustermann",
    imprint_contact_title: "Kontakt",
    imprint_contact_body_html: "Telefon: +49 30 12345678<br />E-Mail: kontakt@novareach.example",
    imprint_registry_title: "Registereintrag",
    imprint_registry_body: "Handelsregister: Amtsgericht Berlin-Charlottenburg, HRB 123456",
    imprint_vat_title: "Umsatzsteuer-ID",
    imprint_vat_body: "USt-IdNr. gemäß § 27a Umsatzsteuergesetz: DE123456789",
    imprint_dispute_title: "EU-Streitbeilegung",
    imprint_dispute_body:
      "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit.",
    imprint_dispute_link_text: "https://ec.europa.eu/consumers/odr/",
    cookie_banner_title: "Cookies & Datenschutz",
    cookie_banner_copy:
      "Wir nutzen notwendige Technologien für Sicherheit und Funktionalität. Optionale Cookies (Analyse/Marketing) aktivieren wir nur nach deiner Einwilligung.",
    cookie_accept_all: "Alle akzeptieren",
    cookie_accept_essential: "Nur notwendige",
    cookie_customize: "Einstellungen",
    cookie_save_selection: "Auswahl speichern",
    cookie_essential_title: "Notwendig (immer aktiv)",
    cookie_essential_desc: "Erforderlich für Sicherheit, Formularschutz und Spracheinstellungen.",
    cookie_analytics_title: "Analyse",
    cookie_analytics_desc: "Hilft uns, Nutzung anonymisiert zu verstehen und die Website zu verbessern.",
    cookie_marketing_title: "Marketing",
    cookie_marketing_desc: "Ermöglicht Kampagnen-Messung und personalisierte Inhalte.",
    cookie_open_settings: "Cookie-Einstellungen",
    theme_to_dark: "Dark",
    theme_to_light: "Light",
    status_sending: "Anfrage wird sicher übermittelt...",
    status_short_message: "Bitte beschreibe dein Projekt genauer (mindestens 20 Zeichen).",
    status_failed: "Die Anfrage konnte nicht gesendet werden.",
    status_success: "Vielen Dank. Wir melden uns in Kürze."
  },
  en: {
    title_home: "Website Development Agency | Nova Reach Studio",
    title_about: "About | Web Development & SEO Agency",
    title_services: "Services: Web Development, SEO, Social Media",
    title_process: "Our Process | Build Websites and Scale SEO",
    title_contact: "Contact | Request Web Development & SEO",
    title_privacy: "Nova Reach Studio | Privacy",
    title_imprint: "Nova Reach Studio | Imprint",
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_process: "Process",
    nav_contact: "Contact",
    home_eyebrow: "Full-Service Marketing Agency",
    home_title: "Website development that is modern, fast and discoverable on Google.",
    home_copy:
      "We build premium websites for companies, improve Google visibility with SEO and scale social media systems for measurable growth.",
    home_cta_primary: "Start a project",
    home_cta_secondary: "Explore services",
    home_visual_tag_1: "Growth Architecture",
    home_visual_title_1: "Data, design and campaigns from one connected system.",
    home_visual_alt_1: "Modern team analyzing a KPI dashboard",
    home_visual_alt_2: "Strategy workshop in a modern studio",
    home_visual_alt_3: "Social media content production in a team",
    home_card_1_title: "Web Development",
    home_card_1_body: "Performance-first websites designed to convert visitors into customers.",
    home_card_2_title: "SEO",
    home_card_2_body: "Technical precision and content strategy that keep your brand discoverable.",
    home_card_3_title: "Social Media",
    home_card_3_body: "Narratives for Instagram and TikTok that move culture and drive leads.",
    metric_1: "average organic growth in 12 months",
    metric_2: "more qualified leads through integrated funnels",
    metric_3: "on-time project delivery rate",
    about_eyebrow: "About us",
    about_title: "We blend design, strategy and engineering into one growth system.",
    about_copy:
      "Nova Reach Studio helps companies create memorable digital experiences and build long-term visibility.",
    about_block_1_title: "Our philosophy",
    about_block_1_body:
      "Great marketing starts with clarity. We build systems that align brand voice, technical excellence and measurable business impact.",
    about_block_2_title: "What makes us different",
    about_block_2_body:
      "We combine premium design with hard performance data. Every launch is beautiful and accountable.",
    about_block_3_title: "Team mindset",
    about_block_3_body:
      "Interdisciplinary teams, rapid feedback loops and clear ownership keep projects moving from insight to impact.",
    about_visual_alt: "Creative team in a brand workshop",
    services_eyebrow: "Services",
    services_title: "Web development, SEO and social media in one system.",
    service_web_title: "Web Development",
    service_web_body: "Modern, fast and conversion-driven websites tailored to your market.",
    service_seo_title: "SEO",
    service_seo_body: "Technical SEO and content architecture built for durable rankings.",
    service_social_title: "Social Media Management",
    service_social_body: "Creative systems for Instagram and TikTok that grow audience and trust.",
    services_faq_title: "FAQ about website development and SEO",
    services_faq_q1: "How long does professional website development usually take?",
    services_faq_a1:
      "Depending on scope, most projects take 4 to 10 weeks. We work in clear sprints with transparent milestones.",
    services_faq_q2: "Can my new website be SEO-ready from day one?",
    services_faq_a2:
      "Yes. Technical SEO, information architecture, page speed and content foundations are integrated during build.",
    services_faq_q3: "What type of companies benefit most from your SEO strategy?",
    services_faq_a3:
      "Local service businesses, B2B teams and growth-stage brands that want more qualified inbound leads.",
    services_visual_alt_1: "Website interface on multiple displays",
    services_visual_alt_2: "SEO and analytics dashboard",
    services_visual_alt_3: "Planning social media campaigns",
    process_eyebrow: "Process",
    process_title: "A clear system from strategy to measurable scale.",
    process_step_1_title: "Strategy Sprint",
    process_step_1_body: "Positioning, audience mapping and KPI setup to define real growth targets.",
    process_step_2_title: "Build and Launch",
    process_step_2_body: "Website, SEO stack and content systems rolled out as one integrated platform.",
    process_step_3_title: "Optimize and Scale",
    process_step_3_body: "Weekly testing and iteration based on funnel, search and engagement data.",
    process_block_title: "Transparent collaboration",
    process_block_body:
      "Every week you receive clear reports, priorities and next steps to keep growth measurable and predictable.",
    process_visual_alt: "Growth roadmap on a large display",
    contact_eyebrow: "Contact",
    contact_title: "Tell us your vision and we will design the growth path.",
    contact_visual_tag: "Response in 24h",
    contact_visual_title: "We get back quickly with clear next steps.",
    contact_visual_alt: "Consultation meeting in a team",
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
    footer_text: "Nova Reach Studio. Built for brands that want to lead.",
    footer_privacy: "Privacy",
    footer_imprint: "Imprint",
    privacy_eyebrow: "Privacy",
    privacy_title: "Privacy Notice",
    privacy_intro:
      "This notice explains how we process personal data in line with GDPR and applicable German privacy law.",
    privacy_controller_title: "1. Data controller",
    privacy_controller_body:
      "Nova Reach Studio, Musterstrasse 1, 10115 Berlin, Email: kontakt@novareach.example",
    privacy_data_title: "2. Data we process",
    privacy_data_body:
      "When you use the contact form, we process name, email, optional company, service area and message solely to handle your request.",
    privacy_legal_title: "3. Legal basis",
    privacy_legal_body:
      "Art. 6(1)(b) GDPR (pre-contract communication), Art. 6(1)(c) GDPR (legal obligations) and Art. 6(1)(f) GDPR (IT security and abuse prevention).",
    privacy_cookie_title: "4. Cookies and consent",
    privacy_cookie_body:
      "By default, we only use technically required storage. Optional cookies or tracking are activated only after explicit consent and can be changed anytime via Cookie Settings.",
    privacy_rights_title: "5. Your rights",
    privacy_rights_body:
      "You have rights of access, rectification, erasure, restriction, portability and objection, plus the right to lodge a complaint with a supervisory authority.",
    privacy_update_title: "6. Version and updates",
    privacy_update_body:
      "Version: March 2026. We may update this notice when legal or technical requirements change.",
    imprint_eyebrow: "Imprint",
    imprint_title: "Information according to section 5 TMG",
    imprint_provider_title: "Service provider",
    imprint_provider_body_html: "Nova Reach Studio GmbH<br />Musterstrasse 1<br />10115 Berlin",
    imprint_management_title: "Represented by",
    imprint_management_body: "Managing Director: Max Mustermann",
    imprint_contact_title: "Contact",
    imprint_contact_body_html: "Phone: +49 30 12345678<br />Email: kontakt@novareach.example",
    imprint_registry_title: "Commercial register",
    imprint_registry_body: "Commercial Register: Local Court Berlin-Charlottenburg, HRB 123456",
    imprint_vat_title: "VAT ID",
    imprint_vat_body: "VAT ID according to section 27a German VAT Act: DE123456789",
    imprint_dispute_title: "EU online dispute resolution",
    imprint_dispute_body:
      "The European Commission provides a platform for online dispute resolution.",
    imprint_dispute_link_text: "https://ec.europa.eu/consumers/odr/",
    cookie_banner_title: "Cookies & Privacy",
    cookie_banner_copy:
      "We use necessary technologies for security and core functionality. Optional cookies (analytics/marketing) are activated only with your consent.",
    cookie_accept_all: "Accept all",
    cookie_accept_essential: "Only necessary",
    cookie_customize: "Settings",
    cookie_save_selection: "Save selection",
    cookie_essential_title: "Necessary (always active)",
    cookie_essential_desc: "Required for security, form protection and language settings.",
    cookie_analytics_title: "Analytics",
    cookie_analytics_desc: "Helps us understand usage anonymously and improve the website.",
    cookie_marketing_title: "Marketing",
    cookie_marketing_desc: "Enables campaign measurement and personalized content.",
    cookie_open_settings: "Cookie settings",
    theme_to_dark: "Dark",
    theme_to_light: "Light",
    status_sending: "Sending your secure request...",
    status_short_message: "Please describe your project in more detail (at least 20 characters).",
    status_failed: "Your request could not be sent.",
    status_success: "Thank you. We will get back to you shortly."
  }
};

function updateActiveNav() {
  const currentPath = window.location.pathname === "/" ? "home" : window.location.pathname.replace("/", "");
  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.classList.toggle("active", link.dataset.nav === currentPath);
  });
}

function applyLanguage(lang) {
  const selected = i18n[lang] ? lang : "de";
  document.documentElement.lang = selected;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (i18n[selected][key]) {
      node.textContent = i18n[selected][key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.dataset.i18nHtml;
    if (i18n[selected][key]) {
      node.innerHTML = i18n[selected][key];
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
    const key = node.dataset.i18nAlt;
    if (i18n[selected][key]) {
      node.setAttribute("alt", i18n[selected][key]);
    }
  });

  const titleKey = document.body?.dataset?.titleKey;
  if (titleKey && i18n[selected][titleKey]) {
    document.title = i18n[selected][titleKey];
  }

  languageButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === selected);
  });

  localStorage.setItem("siteLanguage", selected);
  updateThemeToggleLabel();
}

function getStoredTheme() {
  const storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme === "dark") {
    return "dark";
  }

  return "light";
}

function applyTheme(theme) {
  const normalizedTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = normalizedTheme;
  localStorage.setItem(THEME_KEY, normalizedTheme);
  updateThemeToggleLabel();
}

function updateThemeToggleLabel() {
  const toggleButton = document.querySelector("[data-theme-toggle]");
  if (!toggleButton) {
    return;
  }

  const lang = document.documentElement.lang === "en" ? "en" : "de";
  const isDark = document.documentElement.dataset.theme === "dark";
  const i18nKey = isDark ? "theme_to_light" : "theme_to_dark";
  toggleButton.textContent = i18n[lang][i18nKey] || (isDark ? "Light" : "Dark");
  toggleButton.setAttribute("aria-label", toggleButton.textContent);
}

function createThemeToggle() {
  const header = document.querySelector(".site-header");
  if (!header || document.querySelector("[data-theme-toggle]")) {
    return;
  }

  const toggleButton = document.createElement("button");
  toggleButton.type = "button";
  toggleButton.className = "theme-btn";
  toggleButton.setAttribute("data-theme-toggle", "true");

  toggleButton.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });

  header.appendChild(toggleButton);
}

function getStoredConsent() {
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) {
      return null;
    }

    if (parsed.version !== COOKIE_CONSENT_VERSION || parsed.choiceMade !== true) {
      return null;
    }

    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      timestamp: parsed.timestamp || new Date().toISOString()
    };
  } catch {
    return null;
  }
}

function clearOptionalCookies() {
  const namesToClear = ["_ga", "_gid", "_gat", "_fbp", "_gcl_au", "_uetsid", "_uetvid"];
  namesToClear.forEach((name) => {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
  });
}

function activateDeferredScripts(consent) {
  document.querySelectorAll("script[data-consent][data-src]").forEach((node) => {
    const category = node.dataset.consent;
    if (!consent[category] || node.dataset.loaded === "true") {
      return;
    }

    const script = document.createElement("script");
    script.src = node.dataset.src;
    script.defer = true;
    if (node.dataset.async === "true") {
      script.async = true;
    }

    if (node.dataset.crossorigin) {
      script.crossOrigin = node.dataset.crossorigin;
    }

    node.dataset.loaded = "true";
    document.body.appendChild(script);
  });
}

function applyConsent(consent) {
  document.documentElement.dataset.consentAnalytics = String(Boolean(consent.analytics));
  document.documentElement.dataset.consentMarketing = String(Boolean(consent.marketing));

  if (!consent.analytics && !consent.marketing) {
    clearOptionalCookies();
  }

  activateDeferredScripts(consent);

  window.dispatchEvent(
    new CustomEvent("cookie-consent-updated", {
      detail: consent
    })
  );
}

function persistConsent(consent) {
  localStorage.setItem(
    COOKIE_CONSENT_KEY,
    JSON.stringify({
      ...consent,
      choiceMade: true,
      version: COOKIE_CONSENT_VERSION
    })
  );
  applyConsent(consent);
}

function createCookieBanner() {
  const cookieBanner = document.createElement("section");
  cookieBanner.className = "cookie-banner";
  cookieBanner.innerHTML = `
    <h2 data-i18n="cookie_banner_title">Cookies & Datenschutz</h2>
    <p class="cookie-copy" data-i18n="cookie_banner_copy"></p>
    <div class="cookie-row">
      <button type="button" class="btn btn-primary" data-cookie-action="accept-all" data-i18n="cookie_accept_all"></button>
      <button type="button" class="btn btn-ghost" data-cookie-action="accept-essential" data-i18n="cookie_accept_essential"></button>
      <button type="button" class="btn btn-ghost" data-cookie-action="toggle-settings" data-i18n="cookie_customize"></button>
    </div>
    <div class="cookie-settings" data-cookie-settings hidden>
      <label class="cookie-toggle">
        <span>
          <strong data-i18n="cookie_essential_title"></strong>
          <p data-i18n="cookie_essential_desc"></p>
        </span>
        <input type="checkbox" checked disabled />
      </label>
      <label class="cookie-toggle">
        <span>
          <strong data-i18n="cookie_analytics_title"></strong>
          <p data-i18n="cookie_analytics_desc"></p>
        </span>
        <input type="checkbox" data-cookie-category="analytics" />
      </label>
      <label class="cookie-toggle">
        <span>
          <strong data-i18n="cookie_marketing_title"></strong>
          <p data-i18n="cookie_marketing_desc"></p>
        </span>
        <input type="checkbox" data-cookie-category="marketing" />
      </label>
      <button type="button" class="btn btn-primary" data-cookie-action="save-selection" data-i18n="cookie_save_selection"></button>
    </div>
  `;

  document.body.appendChild(cookieBanner);

  const openSettingsButton = document.createElement("button");
  openSettingsButton.type = "button";
  openSettingsButton.className = "btn btn-ghost cookie-trigger";
  openSettingsButton.dataset.cookieAction = "open-banner";
  openSettingsButton.dataset.i18n = "cookie_open_settings";
  document.body.appendChild(openSettingsButton);

  const settingsPanel = cookieBanner.querySelector("[data-cookie-settings]");
  const analyticsInput = cookieBanner.querySelector("[data-cookie-category='analytics']");
  const marketingInput = cookieBanner.querySelector("[data-cookie-category='marketing']");
  const storedConsent = getStoredConsent();

  if (storedConsent) {
    analyticsInput.checked = Boolean(storedConsent.analytics);
    marketingInput.checked = Boolean(storedConsent.marketing);
    cookieBanner.hidden = true;
    openSettingsButton.hidden = false;
    applyConsent(storedConsent);
  } else {
    cookieBanner.hidden = false;
    openSettingsButton.hidden = true;
    applyConsent({ necessary: true, analytics: false, marketing: false, timestamp: null });
  }

  cookieBanner.querySelector("[data-cookie-action='accept-all']").addEventListener("click", () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    };
    persistConsent(consent);
    analyticsInput.checked = true;
    marketingInput.checked = true;
    cookieBanner.hidden = true;
    settingsPanel.hidden = true;
    openSettingsButton.hidden = false;
  });

  cookieBanner.querySelector("[data-cookie-action='accept-essential']").addEventListener("click", () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    };
    persistConsent(consent);
    analyticsInput.checked = false;
    marketingInput.checked = false;
    cookieBanner.hidden = true;
    settingsPanel.hidden = true;
    openSettingsButton.hidden = false;
  });

  cookieBanner.querySelector("[data-cookie-action='toggle-settings']").addEventListener("click", () => {
    settingsPanel.hidden = !settingsPanel.hidden;
  });

  cookieBanner.querySelector("[data-cookie-action='save-selection']").addEventListener("click", () => {
    const consent = {
      necessary: true,
      analytics: Boolean(analyticsInput.checked),
      marketing: Boolean(marketingInput.checked),
      timestamp: new Date().toISOString()
    };
    persistConsent(consent);
    cookieBanner.hidden = true;
    settingsPanel.hidden = true;
    openSettingsButton.hidden = false;
  });

  openSettingsButton.addEventListener("click", () => {
    cookieBanner.hidden = false;
    settingsPanel.hidden = false;
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

updateActiveNav();
createThemeToggle();
applyTheme(getStoredTheme());
createCookieBanner();
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
