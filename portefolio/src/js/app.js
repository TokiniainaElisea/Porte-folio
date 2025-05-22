//offcanvas manipulation 
 document.addEventListener('DOMContentLoaded', function () {
    const offcanvasElement = document.getElementById('navigation');
    const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

    document.querySelectorAll('#navigation a[href^="#"]').forEach(link => {
      link.addEventListener('click', () => {
        // Fermer le offcanvas
        offcanvas.hide();
      });
    });
  });


//dark mode

let state = false;
document.querySelector('#container_global').setAttribute("data-bs-theme","dark");

const change_mode = () =>{
 state = !state;
 if(!state){
  document.querySelector('#container_global').setAttribute("data-bs-theme","dark");
  document.querySelector('#button_dark_mode i').className = "bi bi-sun-fill";
 }
 else{
  document.querySelector('#container_global').removeAttribute("data-bs-theme");
  document.querySelector('#button_dark_mode i').className ="bi bi-moon-fill";
 }
}

// underline h1

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll-animated');
    }
  });
});

// Cible tous les h1 (tu peux cibler d'autres éléments aussi)
document.querySelectorAll('h1').forEach(h1 => {
  observer.observe(h1);
});


//onscroll control
window.onscroll = function(){
	scrollFunction();
}

const myNavBar = document.querySelector("#my-navbar"); //the header

const sticky = myNavBar.offsetTop;

function scrollFunction(){
 if(window.pageYOffset > sticky){
	myNavBar.classList.add("fixed-top");
 }

 else{
	myNavBar.classList.remove("fixed-top");
 }
}

//Aos init
AOS.init();



