import logo from '../assets/images/nylogo.svg';

document.write(`\
    <header> \
      <div class="container navbar navbar-expand-lg bg-dark-s3d"> \
        <div class="row">
          <a class="col navbar-brand" href="index.html"> \
            <img src="${logo}" width="80px" height="80px" alt="S3D Logo"> \
            <!-- <h2>Sivertsen 3Design</h2> \ -->
          </a> \
        </div>
        <div class="w-100"></div>
        <div class="row">
        <nav class="nav"> \
          <a class="nav-link col text-accent active" href="index.html">Hjem</a>
          <a class="nav-link col text-accent" href="gallery.html">Galleri</a>
          <a class="nav-link col text-accent" href="contact.html">Kontakt</a>
          <a class="nav-link col text-accent" href="about.html">Om Oss</a>
          </li>
        </nav>
        </div>
      </div> \
    </header> \
`);