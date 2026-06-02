const header = document.querySelector('header');
const footer = document.querySelector('footer');

header.innerHTML=`
<div class="header">
      <input type="checkbox" id="open-menu"/>
      <div class="logo-container">
        <h2><a href="/index.html">Neiser Edinson</a></h2>
        <label for="open-menu">&#9776;</label>
      </div>
      <nav class="navbar">
        <ul class="nav_list">
          <li class="nav_item"><a href="/index.html">Inicio</a ></li>
          <li class="nav_item"><a href="/pages/servicios.html">Servicios</a></li>
          <li class="nav_item"><a href="/pages/comunidad.html">Comunidad<a></li><li><a href="/pages/herramientas.html">Herramientas</a></li>
          <li><a href="/pages/blog.html">Blog</a></li>
          <li><a href="/pages/contacto.html">Contacto</a></li>
        </ul>
        <div class="redes">
          <a href="https://facebook.com/neiseredinsonbd" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-facebook fa-xl"></i><a/>
          <a href="https://instagram.com/neiseredinson" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram fa-xl"></i></a>
          <a href="https://youtube.com/neiseredinson" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube fa-xl"></i></a>
        </div>
      </nav>
    </div>`;
    
footer.innerHTML=`
<div class="footer">
      <div class="redes">
        <span>FB</span>
        <span>IG</span>
        <span>YT</span>
      </div>
      <div class="footer-items">
        <div class="disclaimer">
        <h4>Descargo de responsabilidad</h4>
         <p>Toda información tiene carácter informativo y educativo, no debe considerarse como asesoramiento financiero. No soy responsable de las decisiones que tomen los usuarios</p>
        </div>
      <div class="paginas">
        <h4>Páginas</h4>
        <a href="#">Inicio</a>
        <a href="#">Educación</a>
        <a href="#">Blog</a>
      </div>
      <div class="herramientas">
        <h4>Herramientas</h4>
        <a href="#">Brokers confiables</a>
        <a href="#">Plantillas financieras</a>
        <a href="#">Calculadoras financieras</a>
      </div>
      <div class="aviso-legal">
        <h4>Aviso legal</h4>
        <a href="#">Términos y condiciones</a>
        <a href="#">Política de privacidad</a>
        <a href="#">Política de cookies</a>
      </div>
    </div>
    <div class="copyright">
      <small>Copyright&copy; 2026. Todos los derechos reservados</small>
    </div>
    </div>`;
