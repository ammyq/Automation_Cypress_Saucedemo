class InventoryPage{

    elements={
        productItemBtn: () => cy.get('#add-to-cart-sauce-labs-onesie')
    }
    selectProduct(){
        this.elements.productItemBtn().click()
    }
}
export default InventoryPage