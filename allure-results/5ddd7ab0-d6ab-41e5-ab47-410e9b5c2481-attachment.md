# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SearchProduct.spec.ts >> verify SearchProducts @master @regression
- Location: tests\SearchProduct.spec.ts:38:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: Promise {}
```

# Test source

```ts
  1  | /**
  2  |  * Test Case: Product Search
  3  |  * 
  4  |  * Tags: @master @regression
  5  |  * 
  6  |  * Steps:
  7  |  * 1) Navigate to the application URL
  8  |  * 2) Enter the product name in the search field
  9  |  * 3) Click the search button
  10 |  * 4) Verify if the product is displayed in the search results
  11 |  */
  12 | import {test,expect,Locator} from "@playwright/test"
  13 | import {HomePage} from "../pages/HomePage"
  14 | import { Searchresults } from "../pages/SearchResultsPage"
  15 | //import { Productpage } from "../pages/ProductPage"
  16 | //import { ShoppingCartPage } from "../pages/ShoppingCart"
  17 | import { TestConfig } from "../test.config"
  18 | //Declare variables
  19 | let homepage:HomePage;
  20 | let searchresults:Searchresults;
  21 | //let productpage:Productpage;
  22 | //let shoppingcartpage:ShoppingCartPage;
  23 | let config:TestConfig;
  24 | 
  25 | //Before Each Test
  26 | test.beforeEach(async({page})=>{
  27 |     config=new TestConfig
  28 |    await page.goto(config.appUrl)
  29 |     homepage=new HomePage(page)
  30 |    searchresults= new Searchresults(page)
  31 |   //productpage= new Productpage(page)
  32 |  //shoppingcartpage= new ShoppingCartPage(page)
  33 | 
  34 | })
  35 | test.afterEach(async({page})=>{
  36 |    await page.close()
  37 | })
  38 | test('verify SearchProducts @master @regression',async()=>{
  39 |     //Search product
  40 |    await homepage.SearchTab(config.productName)
  41 |    await homepage.Searchicon()
  42 |    //verify product is displayed in search
> 43 |   expect(searchresults.issearchresultspageexits()).toBe(true)
     |                                                    ^ Error: expect(received).toBe(expected) // Object.is equality
  44 |   const productname=config.productName
  45 |  const isproductfound= searchresults.isproductexist(productname)
  46 |  expect(isproductfound).toBeTruthy()
  47 | 
  48 | })
  49 | 
```