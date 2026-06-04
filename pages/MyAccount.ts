import{test,Page,expect,Locator} from "@playwright/test"
import { LogoutPage } from "./LogoutPage"
export class MyAccount{
    private readonly page:Page
    private readonly myaccmsg:Locator
    private readonly logout:Locator

    //constru
    constructor(page:Page){
        this.page=page
        this.myaccmsg=page.locator("h2:has-text('My Account')")
        this.logout=page.locator("text='Logout'").nth(1);
    }
    //Action method
    async SuccessMsg(){
        const smsg=await this.myaccmsg.textContent()
        return smsg
    }
    async isMyAccountPageExists(): Promise<boolean> {
        try {
            const isVisible = await this.myaccmsg.isVisible();
            return isVisible;
        } catch (error) {
            console.log(`Error checking My Account page heading visibility: ${error}`);
            return false;
        }
}
async ClkonLogout():Promise<LogoutPage>{
   try{
    await this.logout.click()
   return new LogoutPage(this.page)
   }catch(error){
    console.log(`unable to click on Logout: ${error}`)
    throw error
   }


}
async getPageTitle(): Promise<string> {
        return (this.page.title());
    }

}