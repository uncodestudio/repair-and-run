// Module FAQ Accordion
import { gsap } from 'gsap'

export function init() {
  const accordions = document.querySelectorAll('.faq_accordion')
  
  if (!accordions.length) return
  
  accordions.forEach(accordion => {
    const question = accordion.querySelector('.faq_question')
    const answer = accordion.querySelector('.faq_answer')
    const icon = accordion.querySelector('.faq_icon')
    
    if (!question || !answer) return
    
    // État initial + accessibilité
    gsap.set(answer, { height: 0, overflow: 'hidden' })
    gsap.set(icon, { rotate: 0 })
    question.setAttribute('aria-expanded', 'false')
    answer.setAttribute('aria-hidden', 'true')
    
    // Click handler
    question.addEventListener('click', () => {
      const isOpen = accordion.classList.contains('is-open')
      
      // Ferme tous les autres
      accordions.forEach(item => {
        if (item !== accordion) {
          item.classList.remove('is-open')
          gsap.to(item.querySelector('.faq_answer'), { height: 0, duration: 0.3 })
          gsap.to(item.querySelector('.faq_icon'), { rotate: 0, duration: 0.3 })
          item.querySelector('.faq_question').setAttribute('aria-expanded', 'false')
          item.querySelector('.faq_answer').setAttribute('aria-hidden', 'true')
        }
      })
      
      // Toggle celui-ci
      if (isOpen) {
        accordion.classList.remove('is-open')
        gsap.to(answer, { height: 0, duration: 0.3 })
        gsap.to(icon, { rotate: 0, duration: 0.3 })
        question.setAttribute('aria-expanded', 'false')
        answer.setAttribute('aria-hidden', 'true')
      } else {
        accordion.classList.add('is-open')
        gsap.to(answer, { height: 'auto', duration: 0.4 })
        gsap.to(icon, { rotate: -180, duration: 0.4 })
        question.setAttribute('aria-expanded', 'true')
        answer.setAttribute('aria-hidden', 'false')
      }
    })
  })
}