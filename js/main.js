(function () {
  "use strict";

  var I18N = {
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_programs: "Programs",
      nav_news: "News",
      nav_team: "Team",
      nav_partners: "Partners",
      nav_involved: "Get Involved",
      nav_donate: "Donate",
      nav_contact: "Contact",
      hero_badge: "Est. 2006 · Sierra Leone",
      hero_title: "Championing Women's Rights & Democracy in Sierra Leone",
      hero_lead: "WOFHRAD-SL promotes and protects human rights, justice, and good governance — with women at the forefront of change, from communities to parliament.",
      cta_work: "Explore our work",
      cta_partner: "Partner with us",
      cta_donate: "Donate",
      cta_whatsapp: "WhatsApp us",
      lang_en: "EN",
      lang_kri: "Krio"
    },
    kri: {
      nav_home: "Hom",
      nav_about: "Bɔt Wi",
      nav_programs: "Wi Wok",
      nav_news: "Nyus",
      nav_team: "Tim",
      nav_partners: "Patna dɛn",
      nav_involved: "Jɔyn Wi",
      nav_donate: "Giv",
      nav_contact: "Kɔntakt",
      hero_badge: "Stat 2006 · Salone",
      hero_title: "Wi de fɛt fɔ Uman dɛn Rayt ɛn Dɛmɔkrasi na Salone",
      hero_lead: "WOFHRAD-SL de prɔmot ɛn protekt uman rayt, jɔstis ɛn gud gavment — wit uman dɛn na di front, frɔm kɔmyuniti te pɑlimɛnt.",
      cta_work: "Si wi wok",
      cta_partner: "Patna wit wi",
      cta_donate: "Giv mɔni",
      cta_whatsapp: "WhatsApp wi",
      lang_en: "EN",
      lang_kri: "Krio"
    }
  };

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.en;
    document.documentElement.lang = lang === "kri" ? "kri" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.classList.toggle("on", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem("wofhrad-lang", lang); } catch (e) {}
  }

  var saved = "en";
  try { saved = localStorage.getItem("wofhrad-lang") || "en"; } catch (e) {}
  applyLang(saved);

  document.querySelectorAll(".lang-toggle button").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
  });

  var hamburger = document.getElementById("hamburger");
  var mobile = document.getElementById("mobile-menu");
  function closeMenu() {
    if (!hamburger || !mobile) return;
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    mobile.classList.remove("open");
  }
  if (hamburger && mobile) {
    hamburger.addEventListener("click", function () {
      var open = mobile.classList.toggle("open");
      hamburger.classList.toggle("open", open);
      hamburger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobile.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
  }

  var nav = document.getElementById("navbar");
  var back = document.getElementById("back-top");
  function onScroll() {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 40);
    if (back) back.classList.toggle("show", window.scrollY > 400);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (back) back.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
})();
