import navbar from './Navbar.js';

class App{
    #element;

    constructor(){
        this.create();
        this.render();
        this.routing();
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
        document.body.append(navbar);
    }
}

export default new App();