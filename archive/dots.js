function dots(products) {
  const buttons = document.getElementById('slideshowIndicator');
  let counter = 1;
  let buttonsHtml = "";
  slideshowProducts = products.slice(Math.max(products.length - 9, 0)).reverse();
  slideshowProducts.forEach(function (product, index) {
    if (index % 3 === 0) {
      // Reset the counter to 1 if it exceeds 3
      if (counter > 3) {
        counter = 1;
      }
      buttonsHtml += `
        <!-- <span class="dot" onclick="currentSlide(${counter})"></span> -->
        <!-- <li data-target="#gallerySlideshow" data-slide-to="${counter}"></li> -->

      `;
      counter++; // Increment the counter
    }
  });

  const buttonsContent = `
    ${buttonsHtml}
  `;

  buttons.innerHTML = buttonsContent;
}

dots(products);