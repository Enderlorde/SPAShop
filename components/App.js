import {nav} from './Nav.js';

class App{
    #element;

    async getProducts(){
        let localData = localStorage.getItem('products');
        
        if (!localData) {
            const data = await fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((products) => {
                localStorage.setItem('products', JSON.stringify(products));
                localData = JSON.stringify(products);
            });
        };

        return localData;

    }

    loadModule(hash){
        if (!hash) return;
        
        const locateName = new RegExp('^#(.+)');
        const name = hash.match(locateName)[1];
        import(`./${name}.js`)
        .then((module) => {
            this.#element.innerHTML = '';
            this.#element.append(module.default);
        })
        .catch((err) => {this.#element.innerHTML  = `
            <h1>404 Not Found</h1>
        `
    });
    }

    routing(){
        window.addEventListener('hashchange', (e) => {
         
            this.loadModule(new URL(e.newURL).hash);
        });
    }

    create(){
        this.#element = document.createElement('div');
        this.#element.classList.add('app');
    }

    render(){
        document.body.append(this.#element);
        document.body.append(nav);
    }

    init(){
        const title = document.createElement('title');
        title.innerHTML = 'index';

        const metaCharset = document.createElement('meta');
        metaCharset.setAttribute('charset', 'UTF-8');     

        const metaViewport = document.createElement('meta');
        metaViewport.name = 'viewport';
        metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');

        const styleLink = document.createElement('link');
        styleLink.rel = 'stylesheet';
        styleLink.href = '/css/style.css';

        document.head.append(metaCharset, metaViewport, title, styleLink);

        this.getProducts().then((products) => {
            this.create();

            JSON.parse(products).forEach((product) => {
                const prod = document.createElement('div');
                prod.classList.add('product');

                prod.innerText = product['title'];

                this.#element.append(prod);
            })
            


            this.render();
            this.routing();
        });
        
    }
}

export default new App().init();