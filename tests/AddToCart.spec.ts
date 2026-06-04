/**
 * Test Case: Add Product to Cart
 * 
 * Tags: @master @regression
 * 
 * Steps:
 * 1. Navigate to application URL
 * 2. Enter an existing product name in the search box
 * 3. Click the search button
 * 4. Verify the product appears in the search results
 * 5. Select the product
 * 6. Set quantity
 * 7. Add the product to the cart
 * 8. Verify the success message
 */
import {test,expect,Locator} from "@playwright/test"
import {HomePage} from "../pages/HomePage"
import { Searchresults } from "../pages/SearchResultsPage"
import { Productpage } from "../pages/ProductPage"
import { ShoppingCartPage } from "../pages/ShoppingCart"
import { TestConfig } from "../test.config"
let homepage:HomePage;
let searchresults:Searchresults;
let productpage:Productpage;
let shoppingcartpage:ShoppingCartPage;
let config:TestConfig;
test.beforeEach(async({page})=>{
    config=new TestConfig;
    await page.goto(config.appUrl)
   searchresults= new Searchresults(page)
   homepage=new HomePage(page)
   productpage=new Productpage(page)
   shoppingcartpage=new ShoppingCartPage(page)
})
test.afterEach(async({page})=>{
    page.close()
})
test('Add product to cart @master @regression',async()=>{
    //search product
    await homepage.SearchTab(config.productName)
    await homepage.Searchicon()
    //verify product is exist or not
    expect(await searchresults.issearchresultspageexits).toBeTruthy()
    if(await searchresults.isproductexist(config.productName) ){
        await searchresults.Selectproduct(config.productName)
        await productpage.Enterquantity('2')
        await productpage.ClickonAddtocart()
        expect(await productpage.isconformMsgvisible()).toBeTruthy()
    }
})
