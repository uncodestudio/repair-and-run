const n = {
  homepage: ["faq-accordion"],
  blog: ["faq-accordion"],
  article: ["faq-accordion"]
  // 'about': ['animations'],
  // 'contact': ['contact-form', 'animations'],
  // 'shop': ['product-grid', 'animations']
};
function c() {
  console.log("✅ FAQ Accordion initialisé - test simple");
}
const t = {
  "faq-accordion": c
};
function r(o) {
  try {
    console.log(`📦 Chargement module: ${o}`);
    const e = t[o];
    if (!e)
      throw new Error(`Module ${o} non configuré`);
    e(), console.log(`✅ Module ${o} initialisé`);
  } catch (e) {
    console.error(`❌ Erreur module ${o}:`, e);
  }
}
function i() {
  const o = document.body.dataset.page;
  if (!o) {
    console.warn('⚠️ Ajoute data-page="..." sur le body dans Webflow');
    return;
  }
  const e = n[o];
  if (!e) {
    console.log(`📄 Page "${o}" : aucun module configuré`);
    return;
  }
  console.log(`🎯 Page: ${o} | Modules: ${e.join(", ")}`), e.forEach(r);
}
document.addEventListener("DOMContentLoaded", i);
