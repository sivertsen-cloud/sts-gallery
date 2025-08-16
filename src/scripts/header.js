import logo from '../assets/images/nylogo.svg';

document.write(`\
    <header> \
      <div class="navigation-bar"> \
        <div class="logo"> \
          <a class="logo-link" href="index.html"> \
            <img src="${logo}" alt="STS Logo"> \
            <h2>Sivertsen 3Design</h2> \
          </a> \
        </div> \
        <nav> \
          <a href="index.html">Hjem</a> \
          <a href="gallery.html">Galleri</a> \
          <a href="contact.html">Kontakt</a> \
          <a href="about.html">Om Oss</a> \
        </nav> \
      </div> \
    </header> \
`);