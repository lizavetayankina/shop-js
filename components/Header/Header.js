class Header  {
 handelOpenShoppingPage() {
    shoppingPage.render();
 }





    render (count) {
    const html = `
    <div class="header-container">
    <div class="header-counter" onclick="headerPage.handelOpenShoppingPage();">
    💥${count}
    </div>
</div>`;
    
    ROOT_HEADER.innerHTML= html;
}
}
const headerPage = new Header();
const productStore = localStorageUtils.getProducts().length;
headerPage.render(productStore);