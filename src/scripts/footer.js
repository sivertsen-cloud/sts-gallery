import logo from '../assets/images/nylogo.svg';

document.write(`\
  <footer> \
  <div class="d-flex flex-wrap justify-content-between align-items-center bg-primary-s3d"> \
    <div class="col-md-6 d-flex align-items-center justify-content-center text-decoration-none"> \
      <img width="80px" height="80px" src="${logo}" alt="STS Footer Logo"> \
    </div> \
    <ul class="nav col-md-6 align-items-center justify-content-center"> \
      <li class="nav-item"> \
        <a class="nav-link text-dark-s3d active" href="gallery.html" target="_blank"> \
          Galleri \
        </a> \
      </li> \
      <li class="nav-item"> \
        <a class="nav-link text-dark" href="contact.html" target="_blank"> \
          Kontakt \
        </a> \
      </li> \
    </ul> \
  </div> \
  </footer> \
`);