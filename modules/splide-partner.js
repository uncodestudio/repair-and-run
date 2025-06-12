// Module Splide Partner
import { Splide } from '@splidejs/splide'

export function init() {
  console.log('✅ Splide Partner initialisé')
  
  const partnerSlider = document.querySelector('.partner')
  
  if (!partnerSlider) {
    console.warn('⚠️ Aucun élément .partner trouvé')
    return
  }
  
  // Configuration pour partners
  new Splide('.partner', {
    perPage: 4,
    perMove: 4,
    type: 'slide',
    gap: '2rem',
    arrows: false,
    pagination: true,
    breakpoints: {
      991: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      479: {
        perPage: 2,
      }
    }
  }).mount()
  
  console.log('✅ Splide Partner monté')
}