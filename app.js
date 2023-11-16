let productImage = document.querySelector("#product-Img");
let btn = document.querySelectorAll(".btn");

btn[0].onclick = function() {
  productImage.src = "images/image1.png";
  for (bt of btn) {
    bt.classList.remove('active')
  }
   this.classList.add("active")
  
};

btn[1].onclick = function() {
  productImage.src = "images/image2.png";
  for (bt of btn) {
    bt.classList.remove('active')
  }
   this.classList.add("active")
  
};

btn[2].onclick = function() {
  productImage.src = "images/image3.png";
  for (bt of btn) {
    bt.classList.remove('active')
  }
   this.classList.add("active")
  
};
