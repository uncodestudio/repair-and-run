const n = {
  homepage: ["faq-accordion"],
  blog: ["faq-accordion"],
  article: ["faq-accordion"]
  // 'about': ['animations'],
  // 'contact': ['contact-form', 'animations'],
  // 'shop': ['product-grid', 'animations']
};
async function a(o) {
  try {
    console.log(`📦 Chargement module: ${o}`);
    const { init: e } = await import(`./${o}.js`);
    e && (e(), console.log(`✅ Module ${o} initialisé`));
  } catch (e) {
    console.error(`❌ Erreur module ${o}:`, e);
  }
}
function c() {
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
  console.log(`🎯 Page: ${o} | Modules: ${e.join(", ")}`), e.forEach(a);
}
document.addEventListener("DOMContentLoaded", c);
