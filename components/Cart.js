class Cart{
    #element;

    lzRedraw(){
        //      __o
        //    _ \<_
        //   (_)/(_)
        document.location = '#';
        document.location = '#cart';
    }

    getCartCookies(){
        let cookies = document.cookie;
        const cartCookies = new RegExp('cart=\\[(.*)\\]')
        if(cookies != ''){
            if (!localStorage.getItem('products')) return;
            
            let cart = decodeURIComponent(cookies.match(cartCookies)[1]);
            return cart.split(',');
        }
    }

    getCart(){
        let cartArray = this.getCartCookies();
        let productsInCart = JSON.parse(localStorage.getItem('products')).filter(product => cartArray.includes(String(product.id)));
        console.log(productsInCart);
        return productsInCart;
    }

    create(){
        this.#element = document.createElement('section');
        this.#element.classList.add('cart');

        let container = document.createElement('div');
        container.classList.add('container');
        container.classList.add('cart__container');

        let cartTable = document.createElement('table');
        cartTable.classList.add('cart-table')

        let headerRow = document.createElement('tr');
        
        let headerProducts = document.createElement('th');
        headerProducts.classList.add('tableHeader__products');
        headerProducts.innerText = 'Products';
        headerProducts.colSpan = '2'
        
        let headerQuantity = document.createElement('th');
        headerQuantity.classList.add('tableHeader__quantity');
        headerQuantity.innerText = 'Quantity';

        let headerPrice = document.createElement('th');
        headerPrice.classList.add('tableHeader__price');
        headerPrice.innerText = 'Price';

        let headerTotal = document.createElement('th');
        headerTotal.classList.add('tableHeader__total');
        headerTotal.innerText = 'Total';
        headerTotal.colSpan = '2';

        headerRow.append(headerProducts, headerQuantity, headerPrice, headerTotal);

        cartTable.append(headerRow);

        this.getCart().forEach(product => {
            let cartRow = document.createElement('tr');

            let cartRowImage = document.createElement('td');
            cartRowImage.innerHTML = `
                <img src="${product.image}" alt="#">
            `;
            cartRowImage.classList.add('cart-table__image');
    
            let cartRowTitle = document.createElement('td');
            cartRowTitle.innerText = product.title;
    
            let cartRowQuantity = document.createElement('td');
            
            let cartQuantityInput = document.createElement('input');
            cartQuantityInput.classList.add('cart-table__quantity');
            cartQuantityInput.value = 1;
            cartQuantityInput.addEventListener('change', () => {
                //Костыль
                cartRowTotal.innerText = `$${Number(cartQuantityInput.value) * Number(product.price)}`;
            })
    
            cartRowQuantity.append(cartQuantityInput);

            let cartRowPrice = document.createElement('td');
            cartRowPrice.innerText = `$${product.price}`;
    
            let cartRowTotal = document.createElement('td');
            cartRowTotal.innerText = `$${product.price}`;
    
            let cartRowRemove = document.createElement('td');

            let cartRemoveButton = document.createElement('button');
            cartRemoveButton.classList.add('cart-table__button');
            cartRemoveButton.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
            cartRemoveButton.addEventListener('click', () => {
                let cartCookies = this.getCartCookies();
                let newCartCookies = cartCookies.filter(id => {
                    return String(product.id) != id;
                });
                console.log(newCartCookies);
                document.cookie = `cart=[${newCartCookies.join(',')}]`;
                this.lzRedraw();
            });

            cartRowRemove.append(cartRemoveButton);

            cartRow.append(cartRowImage, cartRowTitle, cartRowQuantity, cartRowPrice, cartRowTotal,cartRowRemove);
            cartTable.append(cartRow);
        })
        
        let buttonsElem = document.createElement('div');
        buttonsElem.classList.add('cart__buttons');

        let updateButton = document.createElement('button');
        updateButton.classList.add('btn');
        updateButton.classList.add('btn_update-cart');
        updateButton.innerText = 'UPDATE cart';

        let continueButton = document.createElement('button');
        continueButton.classList.add('btn');
        continueButton.classList.add('btn_shopping');
        continueButton.innerText = 'Continue shopping';

        buttonsElem.append(updateButton, continueButton);

        let formCheckout = document.createElement('form');
        formCheckout.classList.add('checkout-form');

        formCheckout.innerHTML = `
            <div>
                <fieldset>
                    <legend>use coupon code</legend>
                    
                    <label>
                        Enter You Coupon Here<br>
                        <input type="text" class="checkout-form__input"></input><button class="btn btn_green">Apply</button>
                    </label>
                </fieldset>

                <fieldset>
                    <legend>shipping avialability</legend>

                    <label>
                        Select Country<br>
                        <select>
                            <option>Viet Nam</option>
                        </select>
                    </label>

                    <label>
                        Select State<br>
                        <select>
                            <option>TP.HCM</option>
                        </select>
                    </label>
                    
                    <label>
                        Postcode/Zip<br>
                        <input type="text" class="checkout-form__postcode" placeholder="Postcode/Zip"></input>
                    </label>

                    <button class="btn">update totals</button>
                </fieldset>
            </div>

            <div>
                <fieldset>
                    <legend>use gift voucher</legend>

                    <label>
                        Enter Your Gift Voucher Code Here<br>
                        <input type="text" class="checkout-form__input" placeholder="Ender your gift voucher code here"></input><button class="btn btn_green">Apply</button>
                    </label>
                </fieldset>

                <table class="calculation-table">
                    <caption>Shopping cart calculation</caption>

                    <tr>
                        <td>
                            Subtotal
                        </td>

                        <td>
                            $450
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Coupon
                        </td>

                        <td>
                            -$50
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Shipping
                        </td>

                        <td>
                            Free Shipping
                        </td>
                    </tr>

                    <tr class="calculation-table__total">
                        <td>
                            Total
                        </td>

                        <td>
                        
                        </td>
                    </tr>               
                </table>
                <button class="btn btn_green">proceed to checkout</button>
            </div>
        `;

        container.append(cartTable, buttonsElem, formCheckout);
       
        this.#element.append(container);
    }

    init(){
        this.create();

        return this.#element;
    }
}

const cart = new Cart().init();
export default cart;