import LoginPage from "../pages/LoginPage"
import InventoryPage from "../pages/InventoryPage"
import CartPage from "../pages/CartPage"
describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Valid login', () => {
    const loginPage = new LoginPage()
    cy.fixture('users').then((users) => {
        const standard_user = users.validUser;
        loginPage.login(standard_user.username, standard_user.password)
      
    })
  })

  it('Invalid login', () => {
    const loginPage = new LoginPage()
    cy.fixture('users').then((users) =>{
      const wrong_user = users.invalidUser;
      loginPage.login(wrong_user.username, wrong_user.password)
      loginPage.getWrongTitle().should('have.text','Epic sadface: Sorry, this user has been locked out.')
    })
  })

  it('Add Item to Cart', () => {
    const loginPage = new LoginPage()
    const inventoryPage = new InventoryPage()
    const cartPage = new CartPage()
    cy.fixture('users').then((users) =>{
      const user = users.validUser
      loginPage.login(user.username, user.password)
      inventoryPage.selectProduct()
      cartPage.clickCart()
      cartPage.getProductTitle().should('have.text','Sauce Labs Onesie')
      cartPage.getProductPrice().should('have.text','$9.99')
    })
  })
})