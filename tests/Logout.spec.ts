/**
 * Test Case: User Logout
 * 
 * Tags: @master @regression
 * 
 * Steps:
 * 1) Navigate to the application URL
 * 2) Go to Login page from Home page
 * 3) Login with valid credentials
 * 4) Verify 'My Account' page
 * 5) Click on Logout link
 * 6) Click on Continue button
 * 7) Verify user is redirected to Home Page
 */

import{test,expect} from "@playwright/test"
import { HomePage } from "../pages/HomePage"
import { Loginpage } from "../pages/LoginPage"
import { MyAccount } from "../pages/MyAccount"
import { LogoutPage } from "../pages/LogoutPage"
import { TestConfig } from "../test.config"

//Declared shared variables
let homepage:HomePage
let loginpage:Loginpage
let myaccout:MyAccount
let logoutpage:LogoutPage
let config:TestConfig

//setup before each setup
test.beforeEach(async({page})=>{
   config= new TestConfig
   await page.goto(config.appUrl)
   //Inistilzing Page objects
  homepage=new HomePage(page)
  loginpage =new Loginpage(page)
  myaccout =new MyAccount(page)

})
//setup after each
test.afterEach(async({page})=>{
   await page.close()
})


test('verify logout test @master @regression', async()=>{
    //nevigate to application Url
   await homepage.ClkonMyAccountlink()
   await homepage.ClkonLogin()

   //enter valid credintials
   await loginpage.EnterEmail(config.email)
   await loginpage.EnterPassword(config.password)
  await loginpage.Loginbtn()

  //verify My Acct page
 expect(await myaccout.isMyAccountPageExists()).toBeTruthy()
 logoutpage=await myaccout.ClkonLogout()
 //verify logout page is visible or not
 expect(logoutpage.iscontinuebtnvisible()).toBeTruthy()
 //click continue btn and verify redirecting to homepage
 homepage=await logoutpage.Continuebtn()
 expect(await homepage.isHomepageexist()).toBe(true)
})