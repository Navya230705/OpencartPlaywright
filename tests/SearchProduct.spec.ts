/**
 * Test Case: Product Search
 * 
 * Tags: @master @regression
 * 
 * Steps:
 * 1) Navigate to the application URL
 * 2) Enter the product name in the search field
 * 3) Click the search button
 * 4) Verify if the product is displayed in the search results
 */
import {test,expect,Locator} from "@playwright/test"
import {HomePage} from "../pages/HomePage"
import { Searchresults } from "../pages/SearchResultsPage"
//import { Productpage } from "../pages/ProductPage"
//import { ShoppingCartPage } from "../pages/ShoppingCart"
import { TestConfig } from "../test.config"
//Declare variables
let homepage:HomePage;
let searchresults:Searchresults;
//let productpage:Productpage;
//let shoppingcartpage:ShoppingCartPage;
let config:TestConfig;

//Before Each Test
test.beforeEach(async({page})=>{
    config=new TestConfig
   await page.goto(config.appUrl)
    homepage=new HomePage(page)
   searchresults= new Searchresults(page)
  //productpage= new Productpage(page)
 //shoppingcartpage= new ShoppingCartPage(page)

})
test.afterEach(async({page})=>{
   await page.close()
})
test('verify SearchProducts @master @regression',async()=>{
    //Search product
   await homepage.SearchTab(config.productName)
   await homepage.Searchicon()
   //verify product is displayed in search
  expect(searchresults.issearchresultspageexits()).toBeTruthy()
  const productname=config.productName
 const isproductfound= searchresults.isproductexist(productname)
 expect(isproductfound).toBeTruthy()

})
