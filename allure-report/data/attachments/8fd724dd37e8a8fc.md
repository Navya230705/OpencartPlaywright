# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> verify registration success @master @sanity @regression
- Location: tests\AccountRegistration.spec.ts:36:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
```

```
Error: locator.fill: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class RegistrationPage {
  4  |     private readonly page: Page;
  5  |     
  6  |     // Locators using CSS selectors
  7  |     private readonly txtFirstname: Locator;
  8  |     private readonly txtLastname: Locator;
  9  |     private readonly txtEmail: Locator;
  10 |     private readonly txtTelephone: Locator;
  11 |     private readonly txtPassword: Locator;
  12 |     private readonly txtConfirmPassword: Locator;
  13 |     private readonly chkdPolicy: Locator;
  14 |     private readonly btnContinue: Locator;
  15 |     private readonly msgConfirmation: Locator;
  16 | 
  17 |     //Constructor
  18 |     constructor(page:Page){
  19 |         this.page=page;
  20 |         this.txtFirstname=this.page.locator('#input-firstname');
  21 |         this.txtLastname=this.page.locator('#input-lastname');
  22 |         this.txtEmail=this.page.locator('#input-email');
  23 |         this.txtTelephone=this.page.locator('#input-telephone');
  24 |         this.txtPassword=this.page.locator('#input-password');
  25 |         this.txtConfirmPassword=this.page.locator('#input-confirm')
  26 |         this.chkdPolicy=this.page.locator("input[value='1'][name='agree']")
  27 |         this.btnContinue=this.page.locator("input[value='Continue']")
  28 |         this.msgConfirmation=this.page.locator('h1:has-text("Your Account Has Been Created!")')
  29 | 
  30 |     }
  31 | 
  32 |     //Action methods
  33 |     async EnterfirstName(fname:string):Promise<void>{
> 34 |        await this.txtFirstname.fill(fname)
     |                                ^ Error: locator.fill: Target page, context or browser has been closed
  35 |     }
  36 |     async EnterLastName(lname:string):Promise<void>{
  37 |        await this.txtLastname.fill(lname)
  38 |     }
  39 |     async EnterEmail (email:string):Promise<void>{
  40 |        await this.txtEmail.fill(email)
  41 |     }
  42 |     async EnterTelephone(phone:string):Promise<void>{
  43 |        await this.txtTelephone.fill(phone)
  44 |     }
  45 |     async EnterPassword(password:string):Promise<void>{
  46 |        await this.txtPassword.fill(password)
  47 |     }
  48 |     async EnterConformPassword(cpassword:string):Promise<void>{
  49 |        await this.txtConfirmPassword.fill(cpassword)
  50 |     }
  51 |     async ClickCheckbox():Promise<void>{
  52 |        await this.chkdPolicy.check()
  53 |     }
  54 |     async ClickContinue():Promise<void>{
  55 |         await this.btnContinue.click()
  56 |     }
  57 |     async ConformMessage():Promise<string>{
  58 |       return await this.msgConfirmation.textContent()??'';
  59 |     }
  60 | 
  61 |     //single method
  62 |     async completeRegistrataion(userData:{
  63 |         firstname:string;
  64 |         lastname:string;
  65 |         telephone:string;
  66 |         email:string;
  67 |         password:string;
  68 | 
  69 |     }):Promise<void>{
  70 |        await this.EnterfirstName(userData.firstname);
  71 |        await this.EnterLastName(userData.lastname);
  72 |        await this.EnterTelephone(userData.telephone);
  73 |        await this.EnterEmail(userData.email);
  74 |        await this.EnterPassword(userData.password);
  75 |        await this.EnterConformPassword(userData.password);
  76 |        await this.ClickCheckbox();
  77 |        await this.ClickContinue();
  78 |        await this.ConformMessage();
  79 | 
  80 | 
  81 | 
  82 |     }
  83 |     
  84 | }
```