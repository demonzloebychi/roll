//читаем все окно
window.addEventListener('click', function (event){


    //объявляем переменнную для счетчика
    let counter;


    // проверяем клик строго по кнопкам
    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){

        const counterWrapper = event.target.closest('.counter-wrapper');

        counter = counterWrapper.querySelector('[data-counter]');




    }

  

    //проверяем является ли элемент кнопкой плюс
    if (event.target.dataset.action === 'plus'){
        counter.innerText = ++counter.innerText;
    }


    //проверяем является ли элемент кнопкой минус
    if (event.target.dataset.action === 'minus'){

        if ( parseInt(counter.innerText) > 1 ){
            counter.innerText = --counter.innerText;
        }
        //проверка на товар в корзине
        else if ( event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1 ){

            //удаляем товар из корзины
            event.target.closest('.cart-item').remove();

            //отображение статуса корзины
            toggleCartStatus();

            calcCartPriceAndDelivery();
        }


    }


    //проверяем клик на + или - внутри корзины
    if (event.target.hasAttribute('data-action') &&  event.target.closest('.cart-wrapper')){
        calcCartPriceAndDelivery();
    }


})