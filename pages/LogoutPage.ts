import{test,expect,Locator, Page} from "@playwright/test"
import { HomePage } from "./HomePage";
export class LogoutPage{

//Locators
private readonly page:Page
private readonly btncontinue:Locator
//Constructors
constructor(page:Page){
    this.page=page;
    this.btncontinue=page.locator(".btn.btn-primary")

}
//Actions
async Continuebtn():Promise<HomePage>{
   await this.btncontinue.click()
   return new HomePage(this.page)
}
async iscontinuebtnvisible():Promise<boolean>{
 return  await this.btncontinue.isVisible()
}

}
