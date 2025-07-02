// Module Nav Accordion
export function init() {
  const accordions = document.querySelectorAll('.navbar_dropdown-dropdown_ateliers')
  
  if (!accordions.length) return
  
  accordions.forEach(accordion => {
    const question = accordion.querySelector('.navbar_dropdown-dropdown_toggle')
    const answer = accordion.querySelector('.navbar_dropdown-content')
    const icon = accordion.querySelector('.dropdown-dropdown_chevron')
    
    if (!question || !answer) return
    
    // État initial + accessibilité
    gsap.set(answer, { height: 0, overflow: 'hidden' })
    if (icon) {
      gsap.set(icon, { rotate: 0 })
    }
    question.setAttribute('aria-expanded', 'false')
    answer.setAttribute('aria-hidden', 'true')
    
    // Click handler
    question.addEventListener('click', () => {
      const isOpen = accordion.classList.contains('is-open')
      
      // Ferme tous les autres
      accordions.forEach(item => {
        if (item !== accordion) {
          const otherAnswer = item.querySelector('.navbar_dropdown-content')
          const otherIcon = item.querySelector('.dropdown-dropdown_chevron')
          const otherQuestion = item.querySelector('.navbar_dropdown-dropdown_toggle')
          
          item.classList.remove('is-open')
          
          // Vérifier que les éléments existent avant de les manipuler
          if (otherAnswer) {
            gsap.to(otherAnswer, { height: 0, duration: 0.3 })
            otherAnswer.setAttribute('aria-hidden', 'true')
          }
          
          if (otherIcon) {
            gsap.to(otherIcon, { rotate: 0, duration: 0.3 })
          }
          
          if (otherQuestion) {
            otherQuestion.setAttribute('aria-expanded', 'false')
          }
        }
      })
      
      // Toggle celui-ci
      if (isOpen) {
        accordion.classList.remove('is-open')
        gsap.to(answer, { height: 0, duration: 0.3 })
        if (icon) {
          gsap.to(icon, { rotate: 0, duration: 0.3 })
        }
        question.setAttribute('aria-expanded', 'false')
        answer.setAttribute('aria-hidden', 'true')
      } else {
        accordion.classList.add('is-open')
        gsap.to(answer, { height: 'auto', duration: 0.4 })
        if (icon) {
          gsap.to(icon, { rotate: -180, duration: 0.4 })
        }
        question.setAttribute('aria-expanded', 'true')
        answer.setAttribute('aria-hidden', 'false')
      }
    })
  })
}