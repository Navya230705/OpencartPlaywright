import{test,expect} from "@playwright/test"
import { HomePage } from "../pages/HomePage"
import { TestConfig } from "../test.config"
//import { RandomDataUtil } from "../utils/randomDataGenarator"
import { Loginpage } from "../pages/LoginPage"
import { MyAccount } from "../pages/MyAccount"

 //Declare global
 let homepage:HomePage
 let loginpage:Loginpage
 let myacct:MyAccount
 let config:TestConfig
  
 test.beforeEach(async({page})=>{
    config=new TestConfig
  await page.goto(config.appUrl)//base url

// Initialize page objects
   homepage=new HomePage(page)
   loginpage=new Loginpage(page)
   myacct=new MyAccount(page)

 })
 test.afterEach(async({page})=>{
    //await page.waitForTimeout(3000)
   await page.close()

 })
 test('verify login credint @master @sanity @regression', async()=>{

   await homepage.ClkonMyAccountlink()
   await homepage.ClkonLogin()

    //login page enter email and password
   await loginpage.EnterEmail(config.email)
   await loginpage.EnterPassword(config.password)
   await loginpage.Loginbtn()
   //if login fail
  //const fmsg= await loginpage.ErrorMsg()
  //expect(fmsg).toContain('Warning: No match for E-Mail Address and/or Password.')

   //validate success msg on my acct
// const isloggedin= await myacct.isMyAccountPageExists()
 //expect(isloggedin).toBeTruthy()
const sucmsg= await myacct.SuccessMsg()
expect(sucmsg).toContain('My Account')



 })
    

 