class Navbar{
    #element;

    create() {
        this.#element = document.createElement('nav');
        this.#element.classList.add('navbar');

        this.#element.innerHTML = `
            <a href='#catalog'>catalog</a>
            <a href='#cart'>cart</a>
        `;
    }

    init(){
        this.create();

        return this.#element;
    }
}

const nav = new Navbar().init();
export {nav};