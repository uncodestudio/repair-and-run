import { pages } from './config.js'

// Import direct du module (pas dynamique)
import { init as faqAccordionInit } from './modules/faq-accordion.js'
import { init as splideSliderInit } from './modules/splide-slider.js'
import { init as layoutReverseInit } from './modules/layout-reverse.js'
import { init as splidePartnerInit } from './modules/splide-partner.js'
import { init as conceptAccordionInit } from './modules/concept-accordion.js'
import { init as splideReparationInit } from './modules/splide-reparation.js'
import { init as logoMarqueeInit } from './modules/logo-marquee.js'


// MODULE GLOBAL - Se lance sur toutes les pages
import { init as navAccordionInit } from './modules/nav-accordion.js'

// Helper pour les logs (supprimés en production)
const log = import.meta.env.DEV ? console.log : () => {}
const warn = import.meta.env.DEV ? console.warn : () => {}
const error = import.meta.env.DEV ? console.error : () => {}

const moduleMap = {
  'faq-accordion': faqAccordionInit,
  'splide-slider': splideSliderInit,
  'layout-reverse': layoutReverseInit,
  'splide-partner': splidePartnerInit,
  'concept-accordion': conceptAccordionInit,
  'splide-reparation': splideReparationInit,
  'logo-marquee': logoMarqueeInit
}

// Modules globaux qui se lancent sur toutes les pages
const globalModules = [
  { name: 'nav-accordion', init: navAccordionInit }
  // Tu peux en ajouter d'autres ici
]

function loadModule(name) {
  try {
    log(`📦 Chargement module: ${name}`)
    
    const moduleInit = moduleMap[name]
    if (!moduleInit) {
      throw new Error(`Module ${name} non configuré`)
    }
    
    moduleInit()
    log(`✅ Module ${name} initialisé`)
  } catch (err) {
    error(`❌ Erreur module ${name}:`, err)
  }
}

function loadGlobalModule(module) {
  try {
    log(`🌍 Chargement module global: ${module.name}`)
    module.init()
    log(`✅ Module global ${module.name} initialisé`)
  } catch (err) {
    error(`❌ Erreur module global ${module.name}:`, err)
  }
}

function initApp() {
  // 1. CHARGER LES MODULES GLOBAUX EN PREMIER
  log('🌍 Initialisation modules globaux...')
  globalModules.forEach(loadGlobalModule)
  
  // 2. CHARGER LES MODULES SPÉCIFIQUES À LA PAGE
  const page = document.body.dataset.page
  
  if (!page) {
    warn('⚠️ Ajoute data-page="..." sur le body dans Webflow')
    return
  }
  
  const modules = pages[page]
  
  if (!modules) {
    log(`📄 Page "${page}" : aucun module configuré`)
    return
  }
  
  log(`🎯 Page: ${page} | Modules: ${modules.join(', ')}`)
  modules.forEach(loadModule)
}

document.addEventListener('DOMContentLoaded', initApp)