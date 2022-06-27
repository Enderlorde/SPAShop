class Header{
    #element;

    create(){
        this.#element = document.createElement('header');
        this.#element.classList.add('header');

        this.#element.innerHTML = `
            <div class="container">
                <ul class="header__item contacts">
                    <li class="contacts__item"><i class="fa-solid fa-phone"></i> +1 123 456 789</li>
                    <li class="contacts__item"><i class="fa-solid fa-envelope"></i>info@company.com</li>
                </ul>

                <ul class="header__item header__socials socials">
                    <li class="socials__item"><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li class="socials__item"><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                    <li class="socials__item"><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                    <li class="socials__item"><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                    <li class="socials__item"><a href="#"><i class="fa-brands fa-behance"></i></a></li>
                </ul>
            </div>
        `;

    }

    init(){
        this.create();

        return this.#element;
    }
}

const header = new Header().init();
export {header};