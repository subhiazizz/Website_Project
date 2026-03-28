const form = document.getElementById("contact-form");
const statusNode = document.getElementById("form-status");
const languageButtons = document.querySelectorAll(".lang-btn");

const i18n = {
  de: {
    title_home: "Nova Reach Studio | Start",
    title_about: "Nova Reach Studio | About",
    title_services: "Nova Reach Studio | Leistungen",
    title_process: "Nova Reach Studio | Vorgehen",
    title_contact: "Nova Reach Studio | Kontakt",
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Leistungen",
    nav_process: "Vorgehen",
    nav_contact: "Kontakt",
    home_eyebrow: "Full-Service Marketingagentur",
    home_title: "Schoene digitale Produkte, die Marken unvergesslich machen.",
    home_copy:
      "Wir entwickeln Premium-Websites, skalieren SEO-Sichtbarkeit und bauen Social-Media-Systeme fuer messbares Wachstum.",
    home_cta_primary: "Projekt starten",
    home_cta_secondary: "Leistungen entdecken",
    home_card_1_title: "Webentwicklung",
    home_card_1_body: "Performance-first Websites, die Besucher in Kunden verwandeln.",
    home_card_2_title: "SEO",
    home_card_2_body: "Technische Praezision und Content-Strategie fuer langfristige Sichtbarkeit.",
    home_card_3_title: "Social Media",
    home_card_3_body: "Erzaehlformate fuer Instagram und TikTok, die Aufmerksamkeit in Leads umwandeln.",
    metric_1: "durchschnittliches organisches Wachstum in 12 Monaten",
    metric_2: "mehr qualifizierte Leads durch integrierte Funnels",
    metric_3: "Projektlieferung im Zeitplan",
    about_eyebrow: "About us",
    about_title: "Wir verbinden Design, Strategie und Engineering zu einem Growth-System.",
    about_copy:
      "Nova Reach Studio hilft Unternehmen, einpraegsame digitale Erlebnisse zu schaffen und langfristige Sichtbarkeit aufzubauen.",
    about_block_1_title: "Unsere Philosophie",
    about_block_1_body:
      "Grosses Marketing beginnt mit Klarheit. Wir bauen Systeme, die Brand Voice, technische Exzellenz und messbaren Business-Impact verbinden.",
    about_block_2_title: "Was uns anders macht",
    about_block_2_body:
      "Wir kombinieren Premium-Design mit harten Performance-Daten. Jeder Launch ist schoen und zugleich accountable.",
    services_eyebrow: "Leistungen",
    services_title: "High-End-Umsetzung fuer Web, Search und Social.",
    service_web_title: "Webentwicklung",
    service_web_body: "Moderne, schnelle und conversion-orientierte Websites fuer deinen Markt.",
    service_seo_title: "SEO",
    service_seo_body: "Technisches SEO und Content-Architektur fuer dauerhafte Rankings.",
    service_social_title: "Social Media Management",
    service_social_body:
      "Kreative Systeme fuer Instagram und TikTok, die Reichweite, Vertrauen und Leads steigern.",
    process_eyebrow: "Vorgehen",
    process_title: "Ein klares System von Strategie bis Skalierung.",
    process_step_1_title: "Strategie-Sprint",
    process_step_1_body: "Positionierung, Zielgruppen-Mapping und KPI-Setup fuer echte Wachstumsziele.",
    process_step_2_title: "Build und Launch",
    process_step_2_body: "Website, SEO-Stack und Content-Systeme als integrierte Plattform.",
    process_step_3_title: "Optimieren und Skalieren",
    process_step_3_body: "Woechentliche Tests und Iterationen auf Basis von Funnel-, Search- und Engagement-Daten.",
    contact_eyebrow: "Kontakt",
    contact_title: "Erzaehl uns deine Vision, wir designen den Wachstumspfad.",
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
    footer_text: "Nova Reach Studio. Gebaut fuer Marken, die fuehren wollen.",
    status_sending: "Anfrage wird sicher uebermittelt...",
    status_short_message: "Bitte beschreibe dein Projekt genauer (mindestens 20 Zeichen).",
    status_failed: "Die Anfrage konnte nicht gesendet werden.",
    status_success: "Vielen Dank. Wir melden uns in Kuerze."
  },
  en: {
    title_home: "Nova Reach Studio | Home",
    title_about: "Nova Reach Studio | About",
    title_services: "Nova Reach Studio | Services",
    title_process: "Nova Reach Studio | Process",
    title_contact: "Nova Reach Studio | Contact",
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_process: "Process",
    nav_contact: "Contact",
    home_eyebrow: "Full-Service Marketing Agency",
    home_title: "Beautiful digital products that make brands unforgettable.",
    home_copy:
      "We create premium websites, build sustainable SEO visibility and scale social media systems for measurable growth.",
    home_cta_primary: "Start a project",
    home_cta_secondary: "Explore services",
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
    services_eyebrow: "Services",
    services_title: "High-end execution across web, search and social.",
    service_web_title: "Web Development",
    service_web_body: "Modern, fast and conversion-driven websites tailored to your market.",
    service_seo_title: "SEO",
    service_seo_body: "Technical SEO and content architecture built for durable rankings.",
    service_social_title: "Social Media Management",
    service_social_body: "Creative systems for Instagram and TikTok that grow audience and trust.",
    process_eyebrow: "Process",
    process_title: "A clear system from strategy to measurable scale.",
    process_step_1_title: "Strategy Sprint",
    process_step_1_body: "Positioning, audience mapping and KPI setup to define real growth targets.",
    process_step_2_title: "Build and Launch",
    process_step_2_body: "Website, SEO stack and content systems rolled out as one integrated platform.",
    process_step_3_title: "Optimize and Scale",
    process_step_3_body: "Weekly testing and iteration based on funnel, search and engagement data.",
    contact_eyebrow: "Contact",
    contact_title: "Tell us your vision and we will design the growth path.",
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

  const titleKey = document.body?.dataset?.titleKey;
  if (titleKey && i18n[selected][titleKey]) {
    document.title = i18n[selected][titleKey];
  }

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

updateActiveNav();
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
