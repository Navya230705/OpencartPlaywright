/**
 * Test Case: Account Registration
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to application URL 
 * 2) Go to 'My Account' and click 'Register'
 * 3) Fill in registration details with random data
 * 4) Agree to Privacy Policy and submit the form
 * 5) Validate the confirmation message
 */
import {test,expect} from "@playwright/test"
import {HomePage} from "../pages/HomePage"
import {RegistrationPage} from "../pages/RegistrationPage"
import {TestConfig} from "../test.config.ts"
import {RandomDataUtil} from "../utils/randomDataGenarator.ts"


//Declare globlay
let homepage:HomePage 
let registrationPage:RegistrationPage
let config: TestConfig

test.beforeEach(async({page})=>{
    config=new TestConfig
    await page.goto(config.appUrl)
    homepage=new HomePage(page)
    registrationPage=new RegistrationPage(page)

})
test.afterEach(async({page})=>{
   await page.waitForTimeout(3000)
   await page.close()
})
test('verify registration success @master @sanity @regression',async()=>{
    //go to homepage and click on register

  await homepage.ClkonMyAccountlink()
   await homepage.ClkonRegister()
   
   //In registeration page fill the data
  await registrationPage.EnterfirstName(RandomDataUtil.getFirstName())
  await registrationPage.EnterLastName(RandomDataUtil.getlastName())
  await registrationPage.EnterEmail(RandomDataUtil.getEmail())
  await registrationPage.EnterTelephone(RandomDataUtil.getPhoneNumber())
  const password=RandomDataUtil.getPassword()
  await registrationPage.EnterPassword(password)
  await registrationPage.EnterConformPassword(password)
  await registrationPage.ClickCheckbox()
  await registrationPage.ClickContinue()

  //validate conform message 
  const successmsg =await registrationPage.ConformMessage()
  expect(successmsg).toContain('Your Account Has Been Created!')




})