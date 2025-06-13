// Module Splide Slider
import { Splide } from '@splidejs/splide'

export function init() {
  console.log('✅ Splide Slider initialisé')
  
  const slidesSlider = document.querySelector('.reparation')
  
  if (!slidesSlider) {
    console.warn('⚠️ Aucun élément .slides trouvé')
    return
  }
  
  // Initialiser Splide
  const splide = new Splide('.reparation', {
    perPage: 3,
    perMove: 1,
    focus: 'right',
    type: 'slide',
    gap: '1.5rem',
    arrows: false,
    pagination: true,
    speed: 600,
    dragAngleThreshold: 30,
    autoWidth: false,
    rewind: false,
    rewindSpeed: 400,
    waitForTransition: false,
    updateOnMove: true,
    trimSpace: true,
    breakpoints: {
      991: {
        perPage: 2.5,
      },
      767: {
        perPage: 1.5,
      },
      479: {
        perPage: 1.1,
      }
    }
  })
  
  // Monter le slider
  splide.mount()
  
  console.log('✅ Splide monté')
}