import{test,Locator,expect, Page} from "@playwright/test"
import { ShoppingCartPage } from "./ShoppingCart"
export class Productpage{
    
    private readonly page:Page
    //Locators
    private readonly txtqty:Locator
    private readonly btnaddtocart:Locator
    private readonly confmsg :Locator
    private readonly clkonitem:Locator
    private readonly clkonviewcart : Locator

    //constructor
    constructor(page:Page){
        this.page=page
        this.txtqty=page.locator('#input-quantity')
        this.btnaddtocart=page.locator('#button-cart')
        this.confmsg=page.locator('.alert.alert-success.alert-dismissible')
        this.clkonitem=page.locator('#cart-total')
        this.clkonviewcart =page.locator("strong:has-text('View Cart')")
    }

    //Action Methods
    //Enter quntity
    async Enterquantity(qtynum:string){
       await this.txtqty.fill(qtynum)
    }
    //Click on Addtocart
    async ClickonAddtocart(){
        await this.btnaddtocart.click()
    }
    //validate confirmation msg
    async isconformMsgvisible(){
       try{
         if(this.confmsg!=null){
            return true
        }
        else{
            return false
        }
       }catch(error){
        console.log(`Confirmation msg not visible ${error}`)
        return false
       }
    }
    //click on items
    async ClickonItem(){
        await this.clkonitem.click()
    }
    //click on view cart
    async ClickonViewCart(){
        await this.clkonviewcart.click()
        return  new ShoppingCartPage(this.page)
    }
     /**
     * Complete workflow to add product to cart
     * @param quantity - Quantity of product to add
     */
    async addproducttocart(quantity:string){
      await this.Enterquantity(quantity)
      await this.ClickonAddtocart()
      await this.isconformMsgvisible()
    }
}
