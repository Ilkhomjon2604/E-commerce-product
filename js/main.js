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
}

console.log(elShoppingCardProduct.childElementCount);