import { pages } from './config.js'

async function loadModule(name) {
  try {
    console.log(`📦 Chargement module: ${name}`)
    const { init } = await import(`./${name}.js`) // ← Changement ici
    if (init) {
      init()
      console.log(`✅ Module ${name} initialisé`)
    }
  } catch (error) {
    console.error(`❌ Erreur module ${name}:`, error)
  }
}

function initApp() {
  const page = document.body.dataset.page
  
  if (!page) {
    console.warn('⚠️ Ajoute data-page="..." sur le body dans Webflow')
    return
  }
  
  const modules = pages[page]
  
  if (!modules) {
    console.log(`📄 Page "${page}" : aucun module configuré`)
    return
  }
  
  console.log(`🎯 Page: ${page} | Modules: ${modules.join(', ')}`)
  modules.forEach(loadModule)
}

document.addEventListener('DOMContentLoaded', initApp)