// card_container__open
// card_container
// basket
// number_of_items
// shopping-card__wrapper
// shopping-card__wrapper-open
// btn-product__submit


let elBasket = document.querySelector('.basket');
let elCardContainer = document.querySelector('.card_container');
let elNumberIndicator =  document.querySelector('.number_of_items');


elBasket.addEventListener('click' , function(){
  elCardContainer.classList.toggle('card_container__open')
});
