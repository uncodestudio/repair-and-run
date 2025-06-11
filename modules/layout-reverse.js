// Module Layout Reverse
export function init() {
  console.log('✅ Layout Reverse initialisé')
  
  const components = document.querySelectorAll('.layout-reverse_component')
  
  if (!components.length) {
    console.warn('⚠️ Aucun élément .layout-reverse_component trouvé')
    return
  }
  
  components.forEach((component, index) => {
    if (index % 2 === 1) {  // 2ème, 4ème, 6ème...
      component.classList.add('reverse')
      console.log(`✅ Reverse ajouté au composant ${index + 1}`)
    }
  })
  
  console.log(`✅ ${components.length} composants traités`)
}