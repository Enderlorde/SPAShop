class Main{
    #element;

    getProducts(){
        return JSON.parse(localStorage.getItem('products'));
    }

    create(products) {
        this.#element = document.createElement('main');
        this.#element.classList.add('main');

        this.#element.innerHTML = `
            <div class="promo">
                <div class="container promo__container">
                    <div class="promo__content" >
                        <h1>THE BEST <br> <span class="highlight">WOOCOMERCE</span></h1>

                        <p>Lorem</p>

                        <button class="btn">Buy now!</button>
                    </div>
                </div>
            </div>

            <div class="bestsellers">
                <div class="container bestsellers__container">
                    <div class="bestsellers__about">
                        <h2>BEST SELLERS</h2>

                        <div>The best productions from us</div>

                        <p>Lorem</p>
                    </div>
                    
                    <ul class="bestsellers__showroom showroom">
                        <li class="showroom__item">
                            <img src="https://via.placeholder.com/340x450">

                            <div class="showroom__title">
                                Lorem
                            </div>
                            
                            <div class="showroom__price">
                                $250
                            </div>

                            <ul class="showroom__grade grade">
                                <li class="grade__item grade__item_star"></li>
                                <li class="grade__item grade__item_star"></li>
                                <li class="grade__item grade__item_star"></li>
                                <li class="grade__item grade__item_star"></li>
                                <li class="grade__item grade__item_star"></li>
                            </ul>
                        </li>

                        <li class="showroom__item">
                            <img src="https://via.placeholder.com/340x450">

                            <div class="showroom__title">
                                Lorem
                            </div>

                            <div class="showroom__price">
                                $250
                            </div>

                            <ul class="showroom__grade grade">
                                <li class="grade__item grade__item_star"></li>
                                <li class="grade__item grade__item_star"></li>
                                <li class="grade__item grade__item_star"></li>
                                <li class="grade__item grade__item_star"></li>
                                <li class="grade__item grade__item_star"></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="static">
                <ul class="static__container container">
                    <li>
                        <img src="/images/Diamond.png" alt="#">

                        <h4>Special Offers</h4>

                        <p>Shop Big Save Big</p>
                    </li>

                    <li>
                        <img src="/images/Plane.png" alt="#">

                        <h4>Free Delivery</h4>

                        <p>On Order Above $99</p>
                    </li>

                    <li>
                        <img src="/images/Return.png" alt="#">

                        <h4>30 days return</h4>

                        <p>Policy We Offers</p>
                    </li>

                    <li>
                        <img src="/images/Rocket.png" alt="#">

                        <h4>Fastest shipping</h4>

                        <p>2 Days Express</p>
                    </li>
                </ul>
            </div>    

            <div class="categories">
                <ul class="container categories__container">
                    <li>
                        <p>fashion</p>

                        <h3>summer&autumn</h3>

                        <p>winter collection</p>
                    </li>

                    <li>
                        <p>fashion for men</p>

                        <h3>30% off</h3>

                        <p>winter collection</p>
                    </li>        
                    
                    <li>
                        <p>fashion</p>

                        <h3>new fashion styles</h3>

                        <p>winter collection</p>
                    </li>
                </ul>
            </div>

            <div class="container">
                <ul class="showroom showroom__basic" id="showroomBasic">
                
                </ul>
            </div>

            <div class="subscribe">
                <form class="subscribe__form">
                    <h3>Get Out Special Discount</h3>

                    <p>Lorem ipsum dolor</p>

                    <div>
                        <input type="email" placeholder="E-mail address..."></input>

                        <button>Get coupon now</button>
                    </div>
                </form>

                <ul class="subscribe__clients">
                    <li><img src="/images/clients/Design_studio.png" alt="#"></li>
                    <li><img src="/images/clients/Oceandor.png" alt="#"></li>
                    <li><img src="/images/clients/Restaurant.png" alt="#"></li>
                    <li><img src="/images/clients/Retrodesign.png" alt="#"></li>
                </ul>
            </div>
        `;

        let showroomElement = this.#element.querySelector('#showroomBasic');

        console.log(showroomElement);

        products.forEach(product => {
            let showroomItem = document.createElement('li');
            showroomItem.classList.add('showroom__item');

            let showroomWrapperItem = document.createElement('div');
            showroomWrapperItem.classList.add('showroom__wrapperimage');
        
            let showroomImage = document.createElement('img');
            showroomImage.src = product.image;
            showroomImage.alt = '#';
            
            let showroomOverlay = document.createElement('div');
            showroomOverlay.classList.add('showroom__overlay');
            showroomOverlay.classList.add('overlay');               

            let showroomCart = document.createElement('button');
            showroomCart.classList.add('overlay__cart');  
            showroomCart.addEventListener('click', () => {
                let cookies = document.cookie;
                const cartCookies = new RegExp('cart=\\[(.*)\\]')
                if(cookies != ''){
                    let cart = decodeURIComponent(cookies.match(cartCookies)[1]);
                    let cartArray = cart.split(',');
                    console.log(cartArray);
                    if (!cartArray.includes(String(product.id))){
                        cartArray.push(product.id);
                        document.cookie = `cart=[${cartArray.join(',')}]`;
                        showroomCart.classList.add('inactive');
                    }
                }else{
                    document.cookie = `cart=[${product.id}]`;
                    showroomCart.classList.add('inactive');
                }
                

            });
            showroomCart.innerHTML = "<i class='fa-solid fa-cart-shopping'></i>";

            showroomOverlay.append(showroomCart);
            showroomWrapperItem.append(showroomImage, showroomOverlay);

            let showroomTitle = document.createElement('a');
            showroomTitle.classList.add('showroom__title');
            showroomTitle.href = `#detail/${product.id}`;
            showroomTitle.innerText = product.title;

            let showroomPrice = document.createElement('div');
            showroomPrice.classList.add('showroom__price');
            showroomPrice.innerText = `$${product.price}`;

            let showroomGrade = document.createElement('ul');
            showroomGrade.classList.add('showroom__grade');
            showroomGrade.classList.add('grade');

            showroomGrade.innerHTML = `
                <li class="grade__item grade__item_star"></li>
                <li class="grade__item grade__item_star"></li>
                <li class="grade__item grade__item_star"></li>
                <li class="grade__item grade__item_star"></li>
                <li class="grade__item grade__item_star"></li>
            `;
            

            showroomItem.append(showroomWrapperItem, showroomTitle, showroomPrice, showroomGrade);
            console.log(showroomItem);
            showroomElement.append(showroomItem);
        });

        console.log(this.#element);

        return this.#element;
    }

    init(){
        
        return this.create(this.getProducts());
    }
}

const main = new Main().init();
export default main;