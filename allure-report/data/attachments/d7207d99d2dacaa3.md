# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> verify registration success @master @sanity @regression
- Location: tests\AccountRegistration.spec.ts:36:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "Warning: E-Mail Address is already registered!"
Received string:    "Your Account Has Been Created!"
```

# Test source

```ts
  1  | /**
  2  |  * Test Case: Account Registration
  3  |  * 
  4  |  * Tags: @master @sanity @regression
  5  |  * 
  6  |  * Steps:
  7  |  * 1) Navigate to application URL 
  8  |  * 2) Go to 'My Account' and click 'Register'
  9  |  * 3) Fill in registration details with random data
  10 |  * 4) Agree to Privacy Policy and submit the form
  11 |  * 5) Validate the confirmation message
  12 |  */
  13 | import {test,expect} from "@playwright/test"
  14 | import {HomePage} from "../pages/HomePage"
  15 | import {RegistrationPage} from "../pages/RegistrationPage"
  16 | import {TestConfig} from "../test.config.ts"
  17 | import {RandomDataUtil} from "../utils/randomDataGenarator.ts"
  18 | 
  19 | 
  20 | //Declare globlay
  21 | let homepage:HomePage 
  22 | let registrationPage:RegistrationPage
  23 | let config: TestConfig
  24 | 
  25 | test.beforeEach(async({page})=>{
  26 |     config=new TestConfig
  27 |     await page.goto(config.appUrl)
  28 |     homepage=new HomePage(page)
  29 |     registrationPage=new RegistrationPage(page)
  30 | 
  31 | })
  32 | test.afterEach(async({page})=>{
  33 |    await page.waitForTimeout(3000)
  34 |    await page.close()
  35 | })
  36 | test('verify registration success @master @sanity @regression',async()=>{
  37 |     //go to homepage and click on register
  38 | 
  39 |   await homepage.ClkonMyAccountlink()
  40 |    await homepage.ClkonRegister()
  41 |    
  42 |    //In registeration page fill the data
  43 |   await registrationPage.EnterfirstName(RandomDataUtil.getFirstName())
  44 |   await registrationPage.EnterLastName(RandomDataUtil.getlastName())
  45 |   await registrationPage.EnterEmail(RandomDataUtil.getEmail())
  46 |   await registrationPage.EnterTelephone(RandomDataUtil.getPhoneNumber())
  47 |   const password=RandomDataUtil.getPassword()
  48 |   await registrationPage.EnterPassword(password)
  49 |   await registrationPage.EnterConformPassword(password)
  50 |   await registrationPage.ClickCheckbox()
  51 |   await registrationPage.ClickContinue()
  52 | 
  53 |   //validate conform message 
  54 |   const successmsg =await registrationPage.ConformMessage()
> 55 |   expect(successmsg).toContain('Warning: E-Mail Address is already registered!')
     |                      ^ Error: expect(received).toContain(expected) // indexOf
  56 | 
  57 | 
  58 | 
  59 | 
  60 | })
```