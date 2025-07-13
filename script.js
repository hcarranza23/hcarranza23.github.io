

function mostrarSeccion(seccion) {
  const about = document.getElementById('about');
  const projects = document.getElementById('projects');

  if (seccion === 'about') {
    about.classList.remove('hidden');
    about.classList.add('visible');
    projects.classList.add('hidden');
    projects.classList.remove('visible');
  } else if (seccion === 'projects') {
    projects.classList.remove('hidden');
    projects.classList.add('visible');
    about.classList.add('hidden');
    about.classList.remove('visible');
  }
}


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('about').classList.add('hidden');
  document.getElementById('projects').classList.add('hidden');
});

const form = document.getElementById('contactForm');
const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  
  mensajeConfirmacion.style.display = 'block';


  form.reset();

 
  setTimeout(() => {
    mensajeConfirmacion.style.display = 'none';
  }, 5000);
});
