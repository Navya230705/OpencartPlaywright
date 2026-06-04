import {test,Locator, Page} from "@playwright/test"
import { Productpage } from "./ProductPage"
export class Searchresults{
    //Locators
    private readonly page:Page
    private readonly searchheader:Locator
    private readonly searchproducts:Locator
    //consturctor
    constructor(page:Page){
        this.page=page
        this.searchheader=page.locator('#content h1')
        this.searchproducts=page.locator('h4>a')
    }
    //Action methods
    /**
     * Verify if the search results page exists by checking the header text
     * @returns Promise<boolean> - true if the search results page exists
     */
    async issearchresultspageexits():Promise<boolean>{
      try{
        const headerText=  await this.searchheader.textContent()
      return headerText?.includes('Search -')??false
      }catch(error){
        return false
      }

    }
    /**
     * Check if a product exists in the search results by its name
     * @param productName - The name of the product to search for
     * @returns Promise<boolean> - true if the product exists
     */
    async isproductexist(productname:string){
       try{
        const products= await this.searchproducts.all()
       for(const eachproduct of products){
       const title=await eachproduct.textContent()
       if(title===productname){
        return true
       }
       }

       }catch(error){
        console.log(`Error checking product existence ${error}`)
       }
       return false
    }
    
    /**
     * Select a product from the search results by its name
     * @param productName - The name of the product to select
     * @returns Promise<ProductPage> - ProductPage instance after selecting the product
     */
    async Selectproduct(productname:string){
     try{
      const products = await this.searchproducts.all()
     for(const product of products){
     const items= await product.textContent()
     if(items === productname){
      product.click()
      return new Productpage(this.page)

     }
     }
      console.log(`Product not found ${productname}`)
     }catch(error){
      console.log(`Error while selecting product ${error}`)
      
     }
     return null
    }
}