
import{test,Page,expect,Locator} from "@playwright/test"
export class Loginpage{

    //Locators
    private readonly page:Page
    private readonly email:Locator
    private readonly password :Locator
    private readonly loginbtn:Locator
    private readonly errormsg:Locator

    //Constructor
    constructor(page:Page){
        this.page=page
        this.email=page.locator("#input-email")
        this.password=page.locator("#input-password")
        this.loginbtn=page.locator("input[value='Login']")
        this.errormsg=page.locator('.alert.alert-danger.alert-dismissible')
    
    }
    //Action Methods

    async EnterEmail(email:string){
       await this.email.fill(email)
    }
    async EnterPassword(password:string){
        await this.password.fill(password)
    }
    async Loginbtn(){
        await this.loginbtn.click()
    }
    async ErrorMsg():Promise<null | string>{
       
       return  ( this.errormsg.textContent() )
    }


}