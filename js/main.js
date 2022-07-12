// card_container__open
// card_container
// basket
// number_of_items
// shopping-card__wrapper
// shopping-card__wrapper-open
// btn-product__submit

// card Product js

let elBasket = document.querySelector('.basket');
let elCardContainer = document.querySelector('.card_container');
let elNumberIndicator =  document.querySelector('.number_of_items');
let elShoppingCardProduct =   document.querySelector('.shopping-card__wrapper');
let elShoppingCardSelf = document.querySelector('.shopping-card-self');
let elItemContainer = document.querySelector('.item_container');


if(elBasket){
  elBasket.addEventListener('click' , function(){
    elCardContainer.classList.toggle('card_container__open')
  });
};

if(elShoppingCardProduct.childElementCount > 0){
  elShoppingCardSelf.classList.add('shopping-card__wrapper-open');
  elNumberIndicator.textContent = elShoppingCardProduct.childElementCount;
}
else{
  elShoppingCardSelf.classList.remove('shopping-card__wrapper-open');
  elItemContainer.classList.add('empty_item_container');
  elNumberIndicator.textContent = elShoppingCardProduct.childElementCount;
};

// Img event js
let elMainImage = document.querySelector('.main_img');
let elsBunchOfImages = document.querySelectorAll('.bunch_of__snerakers');
let elsbtnOfImages =  document.querySelectorAll('.small-imgs-wrapper-self');



elsbtnOfImages.forEach( function(elButton){

  elButton.addEventListener('click', function (){
    // remove active class
    elsbtnOfImages.forEach( function(elButton){
      elButton.classList.remove('btn-acive-img')
    });

    // add active class to current element
    elButton.classList.add('btn-acive-img')

    // elMainImage.src = elButton.dataset.imgShowcaseBig;
    elMainImage.src= elButton.dataset.imgShowcaseBig;

    elMainImage.setAttribute.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`;
    // rasm yoq ekan 2x
  });


});

// Light box toggle

let lightBoxOpen = document.querySelector('.Light-box-toggle');
let lightBox = document.querySelector('.light-box');
let lightBoxClose = document.querySelector('.close-light-box');
let lightBoxControllerRight = document.querySelector('.light-box-controller-right');
let lightBoxControllerLeft = document.querySelector('.light-box-controller-left');

if(lightBoxOpen){
  lightBoxOpen.addEventListener('click', function(){
    lightBox.classList.add('light-box-open');
  });

  lightBoxClose.addEventListener('click', function(){
    lightBox.classList.remove('light-box-open');
  })

};
