// Module Concept Accordion
export function init() {
  console.log('✅ Concept Accordion initialisé')
  
  const accordions = document.querySelectorAll('.concept_accordion')
  
  if (!accordions.length) {
    console.warn('⚠️ Aucun élément .concept_accordion trouvé')
    return
  }
  
  accordions.forEach(accordion => {
    const question = accordion.querySelector('.concept_question')
    const answer = accordion.querySelector('.concept_answer')
    const iconVertical = accordion.querySelector('.concept-icon_vertical')
    
    if (!question || !answer) return
    
    // État initial + accessibilité
    gsap.set(answer, { height: 0, overflow: 'hidden' })
    gsap.set(iconVertical, { rotate: 0 })
    question.setAttribute('aria-expanded', 'false')
    answer.setAttribute('aria-hidden', 'true')
    
    // Click handler
    question.addEventListener('click', () => {
      const isOpen = accordion.classList.contains('is-open')
      
      // Ferme tous les autres
      accordions.forEach(item => {
        if (item !== accordion) {
          item.classList.remove('is-open')
          gsap.to(item.querySelector('.concept_answer'), { height: 0, duration: 0.3 })
          const otherIconVertical = item.querySelector('.concept-icon_vertical')
          if (otherIconVertical) {
            gsap.to(otherIconVertical, { rotate: 0, duration: 0.3 })
          }
          item.querySelector('.concept_question').setAttribute('aria-expanded', 'false')
          item.querySelector('.concept_answer').setAttribute('aria-hidden', 'true')
        }
      })
      
      // Toggle celui-ci
      if (isOpen) {
        accordion.classList.remove('is-open')
        gsap.to(answer, { height: 0, duration: 0.3 })
        if (iconVertical) {
          gsap.to(iconVertical, { rotate: 0, duration: 0.3 })
        }
        question.setAttribute('aria-expanded', 'false')
        answer.setAttribute('aria-hidden', 'true')
      } else {
        accordion.classList.add('is-open')
        gsap.to(answer, { height: 'auto', duration: 0.4 })
        if (iconVertical) {
          gsap.to(iconVertical, { rotate: -90, duration: 0.4 })
        }
        question.setAttribute('aria-expanded', 'true')
        answer.setAttribute('aria-hidden', 'false')
      }
    })
  })
  
  console.log(`✅ ${accordions.length} concept accordions traités`)
}