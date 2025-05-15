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

