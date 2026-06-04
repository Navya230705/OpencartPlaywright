import { Page, Locator } from '@playwright/test';
//import { CheckoutPage } from './CheckoutPage'; // Import CheckoutPage if needed

export class ShoppingCartPage {
    private readonly page: Page;
    
    // Locators using CSS selectors
    private readonly lblTotalPrice: Locator;
    private readonly btnCheckout: Locator;
    private readonly errormsg:Locator;

    constructor(page: Page) {
        this.page = page;
        
        // Initialize locators with CSS selectors
        this.lblTotalPrice = page.locator("//*[@id='content']/div[2]/div/table//strong[text()='Total:']//following::td");
        this.btnCheckout = page.locator("a[class='btn btn-primary']");
        this.errormsg=page.locator('.alert.alert-danger.alert-dismissible');
    }

    /**
     * Get the total price from the shopping cart
     * @returns Promise<string | null> - The total price text
     */
    async getTotalPrice(): Promise<string | null> {
        try {
            return await this.lblTotalPrice.textContent();
        } catch (error) {
            console.log(`Unable to retrieve total price: ${error}`);
            return null;
        }
    }

    /**
     * Click on the Checkout button
     * @returns Promise<CheckoutPage> - CheckoutPage instance
     */
    async clickOnCheckout() {
        await this.btnCheckout.click();
        //return new CheckoutPage(this.page);
    }
    async isErrorMsgvisible(){
        try{
            if(this.errormsg!=null){
                console.log('Products marked with *** are not available in the desired quantity or not in stock!')
            return true
        }else{
            return false
        }
        }catch(error){
            console.log(`Error msg is not visible ${error}`)
            return false
        }
    }

    /**
     * Verify if shopping cart page is loaded
     * @returns Promise<boolean> - true if page is loaded
     */
    async isPageLoaded(): Promise<boolean> {
        try {
            return await this.btnCheckout.isVisible();
        } catch (error) {
            return false;
        }
    }
}