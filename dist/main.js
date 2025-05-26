const a = {
  homepage: ["faq-accordion"],
  blog: ["faq-accordion"],
  article: ["faq-accordion"]
  // 'about': ['animations'],
  // 'contact': ['contact-form', 'animations'],
  // 'shop': ['product-grid', 'animations']
}, c = {
  "faq-accordion": () => import("./faq-accordion.js")
  // Ajouter ici tes futurs modules :
  // 'slider': () => import('./modules/slider.js'),
  // 'menu-mobile': () => import('./modules/menu-mobile.js')
};
async function r(o) {
  try {
    console.log(`📦 Chargement module: ${o}`);
    const e = c[o];
    if (!e)
      throw new Error(`Module ${o} non configuré dans moduleMap`);
    const { init: n } = await e();
    n && (n(), console.log(`✅ Module ${o} initialisé`));
  } catch (e) {
    console.error(`❌ Erreur module ${o}:`, e);
  }
}
function t() {
  const o = document.body.dataset.page;
  if (!o) {
    console.warn('⚠️ Ajoute data-page="..." sur le body dans Webflow');
    return;
  }
  const e = a[o];
  if (!e) {
    console.log(`📄 Page "${o}" : aucun module configuré`);
    return;
  }
  console.log(`🎯 Page: ${o} | Modules: ${e.join(", ")}`), e.forEach(r);
}
document.addEventListener("DOMContentLoaded", t);
