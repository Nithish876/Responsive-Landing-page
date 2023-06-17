const drpdwntri = document.getElementById('drp-tri')
const menubtn  = document.querySelector('.ham-menu-btn')
const clsbtn= document.querySelector('.menu-close')
const drpdwn = document.querySelector('.dropdown-menu-1')
const navbar = document.querySelector('#nav-bar')
drpdwntri.addEventListener('click',()=>{
     drpdwn.classList.toggle('active')
})
const drpdwntri2 = document.getElementById('drp-tri-2')
const drpdwn2 = document.querySelector('.dropdown-menu-2')
drpdwntri2.addEventListener('click',()=>{
     drpdwn2.classList.toggle('active')
})

clsbtn.addEventListener('click',()=>{
   navbar.classList.remove('active')
})

menubtn.addEventListener('click',()=>{
     navbar.classList.toggle('active')
})