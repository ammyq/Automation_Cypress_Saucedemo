class LoginPage{

    elements={
        username: () => cy.get('#user-name'),
        password: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        wrongmess: () => cy.get('[data-test="error"]'),
    }
    login (username, password){
        this.elements.username().type(username)
        this.elements.password().type(password)
        this.elements.loginBtn().click()
    }
    getWrongTitle(){
        return this.elements.wrongmess()
    }
}
export default LoginPage