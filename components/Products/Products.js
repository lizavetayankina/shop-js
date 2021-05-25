class Products {

    constructor () {
        this.classNameActive = 'products-element__btn_active';
        this.labbelAdd = 'Добавить в корзину';
        this.labbelRemove = 'Удалить из корзины';
    }
    handleSetLocationStorage(element, id) {
        const  { pushProducts, products } = localStorageUtils.putProducts(id);

        if (pushProducts) {
            element.classList.add(this.classNameActive);
            element.innerHTML =  this.labbelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML =  this.labbelAdd;
        }
        headerPage.render(products.length);
    }

    render() {
        let htmlCatalog = '';
        const productStore = localStorageUtils.getProducts();

        CATALOG.forEach(({ id, name, price, img }) => {
            let activeClass = '';
            let activeText = '';
            if (productStore.indexOf(id) === -1) {
                activeText = this.labbelAdd;
            } else {
                activeClass = '' + this.classNameActive;
                activeText = this.labbelRemove;
            }
            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <img class="products-element__img" src="${img}" />
                    <span class="products-element__price"> 
                    ⚡️${price.toLocaleString()} USD
                    </span>
                    <button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}')">${activeText}</button>
                </li>
            `;
        });

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();