import { pages } from './config.js'

// Force Vite à voir tous les modules (important pour le build)
const moduleMap = {
  'faq-accordion': () => import('./modules/faq-accordion.js')
  // Ajouter ici tes futurs modules :
  // 'slider': () => import('./modules/slider.js'),
  // 'menu-mobile': () => import('./modules/menu-mobile.js')
}

async function loadModule(name) {
  try {
    console.log(`📦 Chargement module: ${name}`)
    
    const moduleLoader = moduleMap[name]
    if (!moduleLoader) {
      throw new Error(`Module ${name} non configuré dans moduleMap`)
    }
    
    const { init } = await moduleLoader()
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