import { header } from './Header.js'
import { footer } from './Footer.js'

class App {
  #element

  async getProducts() {
    let localData = localStorage.getItem('products')

    if (!localData) {
      const data = await fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((products) => {
          localStorage.setItem('products', JSON.stringify(products))
          localData = JSON.stringify(products)
          console.log(products)
        })
    }

    return localData
  }

  routing() {
    const loadModule = (name) => {
      //Удалит ли сборщик кэшированный модуль или я получу утечку памяти?
      import(`./${name}.js?dirtyHackToAvoidCash='${Date.now()}'`)
        .then((module) => {
          this.#element.innerHTML = ''
          this.#element.append(module.default)
        })
        .catch((err) => {
          console.log(err)

          this.#element.innerHTML = `
                <h1>404 Not Found</h1>
            `
        })
    }

    const getHash = () => {
      const hash = location.hash
      if (!hash) return 'Main'
      const locateName = new RegExp('#(\\w+)\\/?')
      console.log(hash.match(locateName)[1])
      return hash.match(locateName)[1]
    }

    window.addEventListener('hashchange', () => {
      loadModule(getHash())
    })

    if (location.pathname == '/' && !location.hash) {
      loadModule('Main')
    } else {
      loadModule(getHash())
    }
  }

  create() {
    this.#element = document.createElement('div')
    this.#element.classList.add('app')
  }

  render() {
    import(`./Nav.js`).then((module) =>
      document.body.append(header, module.default, this.#element, footer)
    )
  }

  init() {
    const title = document.createElement('title')
    title.innerHTML = 'index'

    const metaCharset = document.createElement('meta')
    metaCharset.setAttribute('charset', 'UTF-8')

    const metaViewport = document.createElement('meta')
    metaViewport.name = 'viewport'
    metaViewport.setAttribute(
      'content',
      'width=device-width, initial-scale=1.0'
    )

    const styleLink = document.createElement('link')
    styleLink.rel = 'stylesheet'
    styleLink.href = '/css/style.css'

    const fontawesomeLink = document.createElement('link')
    fontawesomeLink.rel = 'stylesheet'
    fontawesomeLink.href =
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'

    document.head.append(
      metaCharset,
      metaViewport,
      title,
      styleLink,
      fontawesomeLink
    )

    this.getProducts().then((products) => {
      this.create()
      this.render()
      this.routing()
    })
  }
}

export default new App().init()
