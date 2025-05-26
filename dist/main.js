const i = (e, o, t) => {
  const n = e[o];
  return n ? typeof n == "function" ? n() : Promise.resolve(n) : new Promise((s, r) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
      r.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + o + (o.split("/").length !== t ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
}, a = {
  homepage: ["faq-accordion"],
  blog: ["faq-accordion"],
  article: ["faq-accordion"]
  // 'about': ['animations'],
  // 'contact': ['contact-form', 'animations'],
  // 'shop': ['product-grid', 'animations']
};
async function c(e) {
  try {
    console.log(`📦 Chargement module: ${e}`);
    const { init: o } = await i(/* @__PURE__ */ Object.assign({ "./modules/faq-accordion.js": () => import("./faq-accordion.js") }), `./modules/${e}.js`, 3);
    o && (o(), console.log(`✅ Module ${e} initialisé`));
  } catch (o) {
    console.error(`❌ Erreur module ${e}:`, o);
  }
}
function l() {
  const e = document.body.dataset.page;
  if (!e) {
    console.warn('⚠️ Ajoute data-page="..." sur le body dans Webflow');
    return;
  }
  const o = a[e];
  if (!o) {
    console.log(`📄 Page "${e}" : aucun module configuré`);
    return;
  }
  console.log(`🎯 Page: ${e} | Modules: ${o.join(", ")}`), o.forEach(c);
}
document.addEventListener("DOMContentLoaded", l);
