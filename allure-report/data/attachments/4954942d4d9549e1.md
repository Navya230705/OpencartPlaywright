# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Logout.spec.ts >> verify logout test @master @regression
- Location: tests\Logout.spec.ts:46:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: Promise {}
```

# Test source

```ts
  1  | /**
  2  |  * Test Case: User Logout
  3  |  * 
  4  |  * Tags: @master @regression
  5  |  * 
  6  |  * Steps:
  7  |  * 1) Navigate to the application URL
  8  |  * 2) Go to Login page from Home page
  9  |  * 3) Login with valid credentials
  10 |  * 4) Verify 'My Account' page
  11 |  * 5) Click on Logout link
  12 |  * 6) Click on Continue button
  13 |  * 7) Verify user is redirected to Home Page
  14 |  */
  15 | 
  16 | import{test,expect} from "@playwright/test"
  17 | import { HomePage } from "../pages/HomePage"
  18 | import { Loginpage } from "../pages/LoginPage"
  19 | import { MyAccount } from "../pages/MyAccount"
  20 | import { LogoutPage } from "../pages/LogoutPage"
  21 | import { TestConfig } from "../test.config"
  22 | 
  23 | //Declared shared variables
  24 | let homepage:HomePage
  25 | let loginpage:Loginpage
  26 | let myaccout:MyAccount
  27 | let logoutpage:LogoutPage
  28 | let config:TestConfig
  29 | 
  30 | //setup before each setup
  31 | test.beforeEach(async({page})=>{
  32 |    config= new TestConfig
  33 |    await page.goto(config.appUrl)
  34 |    //Inistilzing Page objects
  35 |   homepage=new HomePage(page)
  36 |   loginpage =new Loginpage(page)
  37 |   myaccout =new MyAccount(page)
  38 | 
  39 | })
  40 | //setup after each
  41 | test.afterEach(async({page})=>{
  42 |    await page.close()
  43 | })
  44 | 
  45 | 
  46 | test('verify logout test @master @regression', async()=>{
  47 |     //nevigate to application Url
  48 |    await homepage.ClkonMyAccountlink()
  49 |    await homepage.ClkonLogin()
  50 | 
  51 |    //enter valid credintials
  52 |    await loginpage.EnterEmail(config.email)
  53 |    await loginpage.EnterPassword(config.password)
  54 |   await loginpage.Loginbtn()
  55 | 
  56 |   //verify My Acct page
  57 |  expect(await myaccout.isMyAccountPageExists()).toBeTruthy()
  58 |  logoutpage=await myaccout.ClkonLogout()
  59 |  //verify logout page is visible or not
  60 |  expect(logoutpage.iscontinuebtnvisible()).toBeTruthy()
  61 |  //click continue btn and verify redirecting to homepage
  62 |  homepage=await logoutpage.Continuebtn()
> 63 |  expect(homepage.isHomepageexist()).toBe(true)
     |                                     ^ Error: expect(received).toBe(expected) // Object.is equality
  64 | })
```