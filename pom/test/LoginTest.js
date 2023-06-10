import loginPage from '../pages/loginPage'
import inventoryPage from '../pages/inventoryPage'
import { URL, CREDENTIALS, MESSAGES } from '../data/constants'

fixture`Login test suite`
        .page`${URL.URL_BASE_CURSO}`
//Prueba para checar el logeo exitoso dentro del aplicativo
test('User must be logged in successfully', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_CREDENTIALS.USER_BASE_CURSO, CREDENTIALS.VALID_CREDENTIALS.PASS_BASE_CURSO)
    await t.expect(inventoryPage.title.exists).ok()
})
//Prueba para checar el logeo no exitoso dentro del aplicativo
test('Error message when User and Pass are incorrect', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.INVALID_CREDENTIALS.INVALID_USER_CURSO, CREDENTIALS.INVALID_CREDENTIALS.INVALID_PASS_CURSO)
    await t.expect(loginPage.title.innerText).contains(MESSAGES.INVALID_USER_AND_PASS)
})
//Prueba para checar el usuario null dentro del aplicativo
test('Error message when User is missing', async t => {
    await loginPage.submitLoginForm(null, CREDENTIALS.VALID_CREDENTIALS.PASS_BASE_CURSO)
    await t.expect(loginPage.title.innerText).contains(MESSAGES.NULL_USER)
})
//Prueba para checar la contraseña null dentro del aplicativo
test('Error message when Pass is missing', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_CREDENTIALS.USER_BASE_CURSO, null)
    await t.expect(loginPage.title.innerText).contains(MESSAGES.NULL_PASS)
})
//Prueba para checar el usuario & contraseña null dentro del aplicativo
test('Error message when User and Pass are missing', async t => {
    await loginPage.submitLoginForm(null, null)
    await t.expect(loginPage.title.innerText).contains(MESSAGES.NULL_USER_AND_NULL_PASS)
})
/*Nota: para probar solo ciertos componentes es necesario utilizar test.only
        ó de igual manera para saltar cierto componente test.skip */