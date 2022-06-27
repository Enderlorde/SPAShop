class Cart{
    #element;

    create(){
        this.#element = document.createElement('section');
        this.#element.classList.add('cart');

        this.#element.innerHTML = `
            <div>
                WOW
            </div>
        `;

    }

    init(){
        this.create();

        return this.#element;
    }
}

const cart = new Cart().init();
export default cart;