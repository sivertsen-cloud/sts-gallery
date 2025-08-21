import logo from '../assets/images/nylogo.svg';

document.write(`
    <header>
      <div class="navbar-expand-lg bg-dark-s3d">
        <div class="row">
          <a class="col navbar-brand" href="index.html">
            <img src="${logo}" width="200px" alt="S3D Logo">
          </a>
        </div>
        <div class="w-100"></div>
        <div class="navbar row">
          <nav class="nav">
            <a class="nav-link col btn btn-outline-dark-s3d text-accent" href="index.html">Hjem</a>
            <a class="nav-link col btn btn-outline-dark-s3d text-accent" href="gallery.html">Galleri</a>
            <a class="nav-link col btn btn-outline-dark-s3d text-accent" href="contact.html">Kontakt</a>
            <a class="nav-link col btn btn-outline-dark-s3d text-accent" href="about.html">Om Oss</a>
            </li>
          </nav>
        </div>
      </div>
    </header>
`);