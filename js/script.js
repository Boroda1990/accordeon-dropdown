const upDown = document.querySelectorAll('.switch');
const phoneNumberBox = document.querySelectorAll('.phone-number-box');
console.log(upDown)







upDown.forEach(element => {
  element.addEventListener('click', ()=>{
      element.closest('.phone-number-box').classList.toggle('active')
  })
})












const unit = document.querySelectorAll(".accordeon__item");



function removeSiblings() {
  const unitActive = document.querySelectorAll(".accordeon__item.active");
  unitActive.forEach( siblings => {
    siblings.classList.remove('active')
  })
  
}


unit.forEach(item => {
  item.addEventListener('click', () => {
      removeSiblings()
        item.classList.add('active');
      }
     
       )}
       )
      

       








            
    
