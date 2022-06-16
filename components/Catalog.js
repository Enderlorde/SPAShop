//import "./Catalog.css";

class Page{
    #element;

    create() {
        this.#element = document.createElement('div');
        this.#element.classList.add('catalog');

        this.#element.innerHTML = `
            <h1>Catalog</h1>
        `;

        return this.#element;
    }
}

export default new Page().create();