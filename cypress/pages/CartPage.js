class CartPage{

    elements={
        CartBtn: () => cy.get('#shopping_cart_container'),
        productName: () => cy.get('#item_2_title_link'),
        productPrice: () => cy.get('[data-test="inventory-item-price"]')
    }
    clickCart(){
        this.elements.CartBtn().click()
    }
    getProductTitle(){
        return this.elements.productName()
    }
    getProductPrice(){
        return this.elements.productPrice()
    }
}
export default CartPage