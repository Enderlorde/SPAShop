//import "./Catalog.css";

class Navbar{
    #element;

    create() {
        this.#element = document.createElement('nav');
        this.#element.classList.add('navbar');

        this.#element.innerHTML = `
            <a href='#catalog'>catalog</a>
            <a href='#cart'>cart</a>
        `;

        return this.#element;
    }
}

export default new Navbar().create();