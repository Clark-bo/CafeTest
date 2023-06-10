//POM Page Object Model
import { Selector, t } from "testcafe";

class loginPage {
    constructor(){
        this.user = Selector('#user-name')
        this.pass = Selector('input[data-test="password"]')
        this.button = Selector('input[name="login-button"]')
        this.title = Selector('h3')
    }

    async submitLoginForm(user, pass){
        if(user != null){
            await t.typeText(this.user, user)
        }
        if(pass != null){
            await t.typeText(this.pass, pass)
        }
             await t.click(this.button)
    }
} export default new loginPage