# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> verify login credint
- Location: tests\Login.spec.ts:27:6

# Error details

```
Error: locator.textContent: Target page, context or browser has been closed
Call log:
  - waiting for locator('.alert.alert-danger.alert-dismissible')

```

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test"
  2  | import { HomePage } from "../pages/HomePage"
  3  | import { TestConfig } from "../test.config"
  4  | //import { RandomDataUtil } from "../utils/randomDataGenarator"
  5  | import { Loginpage } from "../pages/LoginPage"
  6  | import { MyAccount } from "../pages/MyAccount"
  7  | 
  8  |  //Declare global
  9  |  let homepage:HomePage
  10 |  let loginpage:Loginpage
  11 |  let myacct:MyAccount
  12 |  let config:TestConfig
  13 |   
  14 |  test.beforeEach(async({page})=>{
  15 |     config=new TestConfig
  16 |   await page.goto(config.appUrl)
  17 |    homepage=new HomePage(page)
  18 |    loginpage=new Loginpage(page)
  19 |    myacct=new MyAccount(page)
  20 | 
  21 |  })
  22 |  test.afterEach(async({page})=>{
> 23 |     await page.waitForTimeout(3000)
     |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  24 |    await page.close()
  25 | 
  26 |  })
  27 |  test('verify login credint', async()=>{
  28 | 
  29 |    await homepage.ClkonMyAccountlink()
  30 |    await homepage.ClkonLogin()
  31 | 
  32 |     //login page enter email and password
  33 |    await loginpage.EnterEmail(config.email)
  34 |    await loginpage.EnterPassword(config.password)
  35 |    await loginpage.Loginbtn()
  36 |    //if login fail
  37 |   const fmsg= await loginpage.ErrorMsg()
  38 |   expect(fmsg).toContain('Warning: No match for E-Mail Address and/or Password.')
  39 | 
  40 |    //validate success msg on my acct
  41 |   await myacct.isMyAccountPageExists()
  42 | const sucmsg= await myacct.SuccessMsg()
  43 | expect(sucmsg).toContain('My Account')
  44 | 
  45 | 
  46 | 
  47 |  })
  48 |     
  49 | 
  50 |  
```