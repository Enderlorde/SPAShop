//import "./Catalog.css";

class Page{
    #element;

    create() {
        this.#element = document.createElement('div');
        this.#element.classList.add('cart');

        this.#element.innerHTML = `
            <h1>Cart</h1>
        `;

        return this.#element;
    }
}

export default new Page().create();