class Footer{
    #element;

    create(){
        this.#element = document.createElement('footer');
        this.#element.classList.add('footer');

        this.#element.innerHTML = `
            <div class="footer__item footer__item_socials">
                <div class="container">
                    <p>We're confident we've provided all the best for you. Stay connect with us</p>

                    <ul class="footer__socials socials">
                        <li class="socials__item"><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                        <li class="socials__item"><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                        <li class="socials__item"><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                        <li class="socials__item"><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                        <li class="socials__item"><a href="#"><i class="fa-brands fa-behance"></i></a></li>
                    </ul>
                </div>
            </div>

            <div class="footer__item footer__item_middle">
                <div class="container">
                    <div class="navigation">
                        <h4 class="navigation__title">Information</h4>

                        <ul class="navigation__list">
                            <li><a href="#">Delivery Information</a></li>
                            <li><a href="#">Discount</a></li>
                            <li><a href="#">Sitemap</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">My Account</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="navigation__title">My account</h4>

                        <ul class="navigation__list">
                            <li><a href="#">Sign In</a></li>
                            <li><a href="#">View Cart</a></li>
                            <li><a href="#">My Wishlist</a></li>
                            <li><a href="#">Checkout</a></li>
                            <li><a href="#">Track My Order</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="navigation__title">Help</h4>

                        <ul class="navigation__list">
                            <li><a href="#">F.A.Q</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="navigation__title">Contact info</h4>

                        <ul class="navigation__list">
                            <li><a href="#">1234 Your Address, Country</a></li>
                            <li><a href="#">+1 234 5678 9999</a></li>
                            <li><a href="#">mail@domain.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="footer__item footer__item_bottom">
                <div class="container">
                    <p>Copyright 2017 RenoshopBee all right reserved - Design by BeeStudios; Coded by Enderlorde 2022</p> 
                </div>
            </div>
        `;
    }

    init(){
        this.create();

        return this.#element;
    }
}

const footer = new Footer().init();
export {footer};