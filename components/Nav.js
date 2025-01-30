class Navbar {
  #element

  getCategories() {
    let categories = []
    JSON.parse(localStorage.getItem('products')).forEach((product) => {
      if (!categories.includes(product.category))
        categories.push(product.category)
    })
    return categories
  }

  create(data) {
    this.#element = document.createElement('nav')
    this.#element.classList.add('nav')

    this.#element.innerHTML = `
            <div class="container nav__container">
                <div class="navigation__item logo">
                    RENOSHOP<span>BEE</span> 
                </div>
                
                <ul class="nav__item pages">
                    ${data
                      .map((category) => {
                        return `<li class="pages__item"><a href="#">${category}</a></li>`
                      })
                      .join('')}
                </ul>
                
                <ul class="nav__item menu">
                    <li class="menu__item">
                        <a href="#cart"><i class="fa-solid fa-cart-shopping"></i></a>
                    </li>
                    <li class="menu__item"><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></li>
                    <li class="menu__item"><a href="#"><i class="fa-solid fa-bars"></i></a></li>
                </ul>
            </div>
        `

    return this.#element
  }

  init() {
    return this.create(this.getCategories())
  }
}

const nav = new Navbar().init()
export default nav
