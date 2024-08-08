const products = [
  {
    id: "1",
    name: "Awesome Product",
    description: "This is an awesome product.",
    price: "$69.69",
    material: "Eik",
    category: "Stol",
    imageUrl: "https://i.redd.it/9ip3hzbdqsi91.png",
    images: ["https://i.redd.it/9ip3hzbdqsi91.png", "https://images.thdstatic.com/productImages/7fa93ede-6f25-4126-a0db-bd828f3227b0/svn/outdoor-chaise-lounges-djmx250-64_600.jpg"]
  },
  {
    id: "2",
    name: "Wack Product",
    description: "This is a wack product.",
    price: "$68.99",
    material: "Ask",
    category: "Bord",
    imageUrl: "https://images.thdstatic.com/productImages/7fa93ede-6f25-4126-a0db-bd828f3227b0/svn/outdoor-chaise-lounges-djmx250-64_600.jpg",
    images: ["https://cdn.frankerfacez.com/emoticon/307828/1", "https://cdn.frankerfacez.com/emoticon/318914/1"]
  }
];

// $.get("data/products.txt", function(data) {
//   const products = data;
// });
// outputs the content of the text file

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productID = urlParams.get('product')
const productQuery = (products.find(x => x.id === productID))
const imageQuery = (products.find(x => x.id === productID).images)

console.log(queryString);
console.log(`productID=${productID}`)
console.log(productQuery)
console.log(imageQuery)

function displayProduct(productID, productSlideImages, productImages, dotsHtml) {
  const container = document.getElementById('product-container');

  const htmlContent = `
    <h2>${productID.name}</h1>
    <div class="product-gallery">
    <div class="product-slideshow">

    <div id="product-images"></div>
      ${productSlideImages}
      <!-- Next and previous buttons -->
      <div class="buttons">
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
      </div>
    </div>

    <!-- The dots/circles -->
    <div style="text-align:center">
      ${dotsHtml}
    </div>

    <div id="product-images"></div>
      ${productImages}
    </div>
    <div class="product-description">
      <h2>Beskrivelse</h2>
      <p>${productID.description}</p>
      <p>
        Materiale:
        <p>
          ${productID.material}
        </p>
      </p>
      <p>
        Produsert:
        <p>
          ${productID.productionDate}
        </p>
      </p>
      <p>
        Kategori:
        <p>
          ${productID.category}
        </p>
      </p>
    </div>
    <div class="other-projects">
      <h3>
        Andre Prosjekter
        </h3>
      <div class="other-project-images">
        <img src="https://i.pinimg.com/736x/a6/c3/e6/a6c3e6efb39bc6dfa58b14e5cf8b1db4.jpg">
        <img src="https://i.pinimg.com/736x/a6/c3/e6/a6c3e6efb39bc6dfa58b14e5cf8b1db4.jpg">
        <img src="https://i.pinimg.com/736x/a6/c3/e6/a6c3e6efb39bc6dfa58b14e5cf8b1db4.jpg">
      </div>
    </div>
  `;

  container.innerHTML = htmlContent;
}

function getImages(product) {
  const container = document.getElementById('product-images');
  let imageSlideHtml = '';
  let imagesHtml = '';
  let dotsHtml = '';
  let index='1';

  product.images.forEach(imageUrl => {
    imageSlideHtml += `
    <div class="product-images fade">
      <div class="project-container">
        <img src="${imageUrl}" alt="${product.name}">
      </div>
    </div>
    `;
    imagesHtml += `
      <img src="${imageUrl}" alt="${product.name}" onclick="currentSlide(${index})" style="width: 90px; height: 70px; margin: 10px;">
    `;
    dotsHtml += `
      <span class="dot" onclick="currentSlide(${index})"></span>
    `;
    index++
  });

  return {
    imageSlideHtml,
    imagesHtml,
    dotsHtml
  }
}

displayProduct(productQuery, getImages(productQuery).imageSlideHtml, getImages(productQuery).imagesHtml, getImages(productQuery).dotsHtml);