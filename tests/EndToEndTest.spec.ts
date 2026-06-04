/**
 * Test Case: End-to-End Test on Demo E-commerce Application
 *
 * Purpose:
 * This test simulates a complete user flow on an e-commerce site.
 * 
 * Steps:
 * 1) Register a new account
 * 2) Logout after registration
 * 3) Login with the same account
 * 4) Search for a product and add it to the shopping cart
 * 5) Verify cart contents
 * 6) Attempt checkout (disabled since feature isn't available on demo site)
 */
import {test,expect,Locator, Page} from "@playwright/test"
import {HomePage} from "../pages/HomePage"
import {RegistrationPage} from "../pages/RegistrationPage"
import { RandomDataUtil } from "../utils/randomDataGenarator"
import { Loginpage } from "../pages/LoginPage"
import { LogoutPage } from "../pages/LogoutPage"
import { Searchresults } from "../pages/SearchResultsPage"
import {MyAccount} from "../pages/MyAccount"
import { Productpage } from "../pages/ProductPage"
import { ShoppingCartPage } from "../pages/ShoppingCart"
import { TestConfig } from "../test.config"
// This is the main test block that runs the entire flow
test("verify end to end test @EndToEnd",async({page})=>{
    const config=new TestConfig
    page.goto(config.appUrl)

const registeredEmail:string=await performRegistration(page)
console.log('✅ Registration Completed')

await performLogout(page)
console.log('✅ Logout Completed')

await performlogin(page,registeredEmail)
console.log('✅ Login Completed')

await addProductToCart(page)
console.log('🛒 Product Added to cart')

await verifyShoppingCart(page)
console.log('✅ Shopping cart verification completed!')


})

    //Function to perform Registation
    async function performRegistration(page:Page) {
        // 1) Register a new account
   let homepage=new HomePage(page);
   await homepage.ClkonMyAccountlink()
   await homepage.ClkonRegister()

      const registrationpage=new RegistrationPage(page);
  await registrationpage.EnterfirstName(RandomDataUtil.getFirstName())
  await registrationpage.EnterLastName(RandomDataUtil.getlastName())
  await registrationpage.EnterTelephone(RandomDataUtil.getPhoneNumber())

   let Email=RandomDataUtil.getEmail()
   await registrationpage.EnterEmail(Email)

   await registrationpage.EnterPassword('test1234')
  await registrationpage.EnterConformPassword('test1234')

   await registrationpage.ClickCheckbox()
   await registrationpage.ClickContinue()//click on submit
//validate conformation message
   expect(await registrationpage.ConformMessage()).toContain('Your Account Has Been Created!')
    return Email; // Return the email for later use in login
   
    }

    // Function to log out the current user
    async function performLogout(page:Page) {
    let myaccountpage=new MyAccount(page)
    let logoutpage:LogoutPage= await myaccountpage.ClkonLogout()

    expect(await logoutpage.iscontinuebtnvisible()).toBe(true)
    const homepage=await logoutpage.Continuebtn()
    expect(await homepage.isHomepageexist()).toBe(true)
    
    
    }

    // Function to log in using the registered email
    async function performlogin(page:Page , Email:string) {
     const config=new TestConfig()
  await  page.goto(config.appUrl)
  const homepage=new HomePage(page);
   await homepage.ClkonMyAccountlink()
 await homepage.ClkonLogin()
 let loginpage=new Loginpage(page);
 await loginpage.EnterEmail(Email)
 await loginpage.EnterPassword('test1234')
 await loginpage.Loginbtn()
 let myaccountpage=new MyAccount(page)
expect(await  myaccountpage.isMyAccountPageExists()).toBeTruthy()
    }
    // Function to search for a product and add it to cart
    async function addProductToCart(page:Page) {
   let homepage=new HomePage(page);
  const config= new TestConfig()
  const productname=config.productName
  const productquantity:string=config.productQuantity

  await homepage.SearchTab(productname)
  await homepage.Searchicon()
let searchResultsPage=new Searchresults(page)
// Validate search results page
expect(await searchResultsPage.issearchresultspageexits()).toBeTruthy()
// Validate that the desired product exists in the results
expect(await searchResultsPage.isproductexist(productname)).toBeTruthy()
    // Select product and set quantity
   const Productpage=await searchResultsPage.Selectproduct(productname)
  await Productpage?.Enterquantity(productquantity)
  await Productpage?.ClickonAddtocart()
   await page.waitForTimeout(3000)
   expect(await Productpage?.isconformMsgvisible()).toBe(true)
        
    }
    // Function to verify the shopping cart details
    async function verifyShoppingCart(page:Page) {
        const ProductPage = new Productpage(page)
        await ProductPage.ClickonItem()
        const ShoppingCartPage=await ProductPage.ClickonViewCart()
        console.log("🛒 Navigated to shopping cart!");
          const config = new TestConfig();
        expect(await ShoppingCartPage.isPageLoaded()).toBe(true)
       expect(await  ShoppingCartPage.getTotalPrice()).toBe(config.totalPrice)
       await ShoppingCartPage.clickOnCheckout()
       expect(await ShoppingCartPage.isErrorMsgvisible()).toBe(true)


        
    }
    

