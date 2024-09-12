function toggleBackground(element, color1, color2, class1, class2) {
    const currentBackgroundColor = getComputedStyle(element).backgroundColor;

    if (currentBackgroundColor === color1) {
        element.classList.remove(class1);
        element.classList.add(class2);
    } else {
        element.classList.remove(class2);
        element.classList.add(class1);
    }
}

const book9 = document.getElementById('9');
book9.addEventListener('click', function() {
    toggleBackground(this, 'rgb(150, 255, 200)', 'rgb(150, 150, 255)', 'active_1', 'active_2');
});

const secondItem = document.querySelector('ol li:nth-child(2)');
secondItem.addEventListener('click', function() {
    toggleBackground(this, 'rgb(150, 150, 255)', 'rgb(150, 255, 200)', 'active_2', 'active_1');
});


function addImage() {
    let imageElement = document.getElementById("image");
    if (!imageElement) {
      let newImage = document.createElement("img");
      newImage.id = "image";
      newImage.src = "./images/berlin.jpg";
      newImage.alt = "Berlin";
      newImage.width = 600;
      document.body.appendChild(newImage);
    }
  }
  
  function increaseImage() {
    let imageElement = document.getElementById("image");
    if (imageElement) {
      imageElement.width += 50;
    }
  }
  
  function decreaseImage() {
    let imageElement = document.getElementById("image");
    if (imageElement && imageElement.width > 50) {
      imageElement.width -= 50;
    }
  }
  
  function removeImage() {
    let imageElement = document.getElementById("image");
    if (imageElement) {
      imageElement.remove();
    }
  }