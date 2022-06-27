class Main{
    #element;

    getProduct(){
        const getID = new RegExp('#.*\/([0-9]+)');
        const id = location.hash.match(getID)[1];
        const product = JSON.parse(localStorage.getItem('products')).find(item => item.id == id);
        console.log(id);
        return product;
    }

    create(product) {
        this.#element = document.createElement('section');
        this.#element.classList.add('detail');

        this.#element.innerHTML = `
            <div class="detail">
                <div class="detail__container container">
                    <div class="detail__gallery gallery">
                        <img src=${product.image} alt="#">
                    </div>

                    <div class="detail__content">
                        <h2>${product.title}</h2>
                        $${product.price}

                        <p class="detail__description">
                            Lorem
                        </p>
                    </div>
                </div>
            </div>
        `;
        console.log('CREATED');

        return this.#element;
    }

    init(){
        return this.create(this.getProduct());  
    }
}

const main = new Main().init();
export default main;