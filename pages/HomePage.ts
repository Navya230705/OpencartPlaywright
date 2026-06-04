import { Page, expect, Locator } from "@playwright/test"
//import { error } from "node:console";
export class HomePage {
    //Locators
    private readonly page: Page;
    private readonly linkMyAccount: Locator;
    private readonly linkRegister: Locator;
    private readonly linkLogin: Locator;
    private readonly searchTab:Locator;
    private readonly searchbutton:Locator;

    //Constructor
    constructor(page: Page) {
        this.page = page;
        this.linkMyAccount =  page.locator('span:has-text("My Account")');
        this.linkRegister = page.locator('a:has-text("Register")')
        this.linkLogin = page.locator('a:has-text("Login")')
        this.searchTab=page.locator("input[placeholder='Search']")
        this.searchbutton=page.locator(".fa.fa-search")


    }
    //Action methods
    //check home page is present
    async isHomepageexist() {
        const title: string = await this.page.title()
        if (title) {
            return true;
        }
        return false;

    }
    //MyAccount link
    async ClkonMyAccountlink() {
        try {
           await this.linkMyAccount.click()
        } catch(error) {
            console.log(`Error occured while clicking 'MyAccount' : ${error}`)
            throw error;
        }

    }
    //Register Link
    async ClkonRegister() {
        try{
         await this.linkRegister.click()
        }catch(error){
          console.log(`Error occured while clicking 'Registerlink':${error}`)
          throw error;
        }
        
    }
    async ClkonLogin() {
        try{
       await this.linkLogin.click()
        }
        catch(error){
            console.log(`Error occured while clicking 'Login Link':${error}`)
            throw error;
        }
        
    }
    async SearchTab(productname:string){
       await this.searchTab.fill(productname)
    }
    async Searchicon(){
        await this.searchbutton.click()
    }

}
