import { Page, Locator, expect } from '@playwright/test';

export class RegistrationPage {
    private readonly page: Page;
    
    // Locators using CSS selectors
    private readonly txtFirstname: Locator;
    private readonly txtLastname: Locator;
    private readonly txtEmail: Locator;
    private readonly txtTelephone: Locator;
    private readonly txtPassword: Locator;
    private readonly txtConfirmPassword: Locator;
    private readonly chkdPolicy: Locator;
    private readonly btnContinue: Locator;
    private readonly msgConfirmation: Locator;

    //Constructor
    constructor(page:Page){
        this.page=page;
        this.txtFirstname=page.locator('#input-firstname');
        this.txtLastname=page.locator('#input-lastname');
        this.txtEmail=page.locator('#input-email');
        this.txtTelephone=page.locator('#input-telephone');
        this.txtPassword=page.locator('#input-password');
        this.txtConfirmPassword=page.locator('#input-confirm')
        this.chkdPolicy=page.locator("input[value='1'][name='agree']")
        this.btnContinue=page.locator("input[value='Continue']")
        this.msgConfirmation=page.locator('h1:has-text("Your Account Has Been Created!")')

    }

    //Action methods
    async EnterfirstName(fname:string):Promise<void>{
       await this.txtFirstname.fill(fname)
    }
    async EnterLastName(lname:string):Promise<void>{
       await this.txtLastname.fill(lname)
    }
    async EnterEmail (email:string):Promise<void>{
       await this.txtEmail.fill(email)
    }
    async EnterTelephone(phone:string):Promise<void>{
       await this.txtTelephone.fill(phone)
    }
    async EnterPassword(password:string):Promise<void>{
       await this.txtPassword.fill(password)
    }
    async EnterConformPassword(cpassword:string):Promise<void>{
       await this.txtConfirmPassword.fill(cpassword)
    }
    async ClickCheckbox():Promise<void>{
       await this.chkdPolicy.check()
    }
    async ClickContinue():Promise<void>{
        await this.btnContinue.click()
    }
    async ConformMessage():Promise<string>{
      return await this.msgConfirmation.textContent()??'';
    }

    //single method
    async completeRegistrataion(userData:{
        firstname:string;
        lastname:string;
        telephone:string;
        email:string;
        password:string;

    }):Promise<void>{
       await this.EnterfirstName(userData.firstname);
       await this.EnterLastName(userData.lastname);
       await this.EnterTelephone(userData.telephone);
       await this.EnterEmail(userData.email);
       await this.EnterPassword(userData.password);
       await this.EnterConformPassword(userData.password);
       await this.ClickCheckbox();
       await this.ClickContinue();
       await this.ConformMessage();



    }
    
}