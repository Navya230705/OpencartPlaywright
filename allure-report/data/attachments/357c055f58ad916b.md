# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.ts >> verify end to end test @EndToEnd
- Location: tests\EndToEndTest.spec.ts:27:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: Promise {}
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - heading "Qafox.com" [level=1] [ref=e33]:
        - link "Qafox.com" [ref=e34] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
      - generic [ref=e36]:
        - textbox "Search" [ref=e37]
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - button " 0 item(s) - $0.00" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e46]:
    - generic: 
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Desktops" [ref=e50] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=20
      - listitem [ref=e51]:
        - link "Laptops & Notebooks" [ref=e52] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=18
      - listitem [ref=e53]:
        - link "Components" [ref=e54] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=25
      - listitem [ref=e55]:
        - link "Tablets" [ref=e56] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=57
      - listitem [ref=e57]:
        - link "Software" [ref=e58] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=17
      - listitem [ref=e59]:
        - link "Phones & PDAs" [ref=e60] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=24
      - listitem [ref=e61]:
        - link "Cameras" [ref=e62] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=33
      - listitem [ref=e63]:
        - link "MP3 Players" [ref=e64] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=34
  - generic [ref=e67]:
    - generic [ref=e68]:
      - generic [ref=e70]:
        - img "MacBookAir" [ref=e72]
        - link "iPhone 6" [ref=e74] [cursor=pointer]:
          - /url: index.php?route=product/product&path=57&product_id=49
          - img "iPhone 6" [ref=e75]
        - img "MacBookAir" [ref=e77]
        - link "iPhone 6" [ref=e79] [cursor=pointer]:
          - /url: index.php?route=product/product&path=57&product_id=49
          - img "iPhone 6" [ref=e80]
      - generic:
        - generic [ref=e84] [cursor=pointer]: 
        - generic [ref=e85] [cursor=pointer]: 
    - heading "Featured" [level=3] [ref=e86]
    - generic [ref=e87]:
      - generic [ref=e89]:
        - link "MacBook" [ref=e91] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=43
          - img "MacBook" [ref=e92]
        - generic [ref=e93]:
          - heading "MacBook" [level=4] [ref=e94]:
            - link "MacBook" [ref=e95] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=43
          - paragraph [ref=e96]: Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..
          - paragraph [ref=e97]:
            - text: $602.00
            - generic [ref=e98]: Ex Tax:$500.00
        - generic [ref=e99]:
          - button " Add to Cart" [ref=e100] [cursor=pointer]:
            - generic [ref=e101]: 
            - text: Add to Cart
          - button "" [ref=e102] [cursor=pointer]:
            - generic [ref=e103]: 
          - button "" [ref=e104] [cursor=pointer]:
            - generic [ref=e105]: 
      - generic [ref=e107]:
        - link "iPhone" [ref=e109] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=40
          - img "iPhone" [ref=e110]
        - generic [ref=e111]:
          - heading "iPhone" [level=4] [ref=e112]:
            - link "iPhone" [ref=e113] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=40
          - paragraph [ref=e114]: iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..
          - paragraph [ref=e115]:
            - text: $123.20
            - generic [ref=e116]: Ex Tax:$101.00
        - generic [ref=e117]:
          - button " Add to Cart" [ref=e118] [cursor=pointer]:
            - generic [ref=e119]: 
            - text: Add to Cart
          - button "" [ref=e120] [cursor=pointer]:
            - generic [ref=e121]: 
          - button "" [ref=e122] [cursor=pointer]:
            - generic [ref=e123]: 
      - generic [ref=e125]:
        - link "Apple Cinema 30\"" [ref=e127] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=42
          - img "Apple Cinema 30\"" [ref=e128]
        - generic [ref=e129]:
          - heading "Apple Cinema 30\"" [level=4] [ref=e130]:
            - link "Apple Cinema 30\"" [ref=e131] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=42
          - paragraph [ref=e132]: The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..
          - paragraph [ref=e133]:
            - text: $110.00 $122.00
            - generic [ref=e134]: Ex Tax:$90.00
        - generic [ref=e135]:
          - button " Add to Cart" [ref=e136] [cursor=pointer]:
            - generic [ref=e137]: 
            - text: Add to Cart
          - button "" [ref=e138] [cursor=pointer]:
            - generic [ref=e139]: 
          - button "" [ref=e140] [cursor=pointer]:
            - generic [ref=e141]: 
      - generic [ref=e143]:
        - link "Canon EOS 5D" [ref=e145] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=30
          - img "Canon EOS 5D" [ref=e146]
        - generic [ref=e147]:
          - heading "Canon EOS 5D" [level=4] [ref=e148]:
            - link "Canon EOS 5D" [ref=e149] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=30
          - paragraph [ref=e150]: Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r..
          - paragraph [ref=e151]:
            - text: $98.00 $122.00
            - generic [ref=e152]: Ex Tax:$80.00
        - generic [ref=e153]:
          - button " Add to Cart" [ref=e154] [cursor=pointer]:
            - generic [ref=e155]: 
            - text: Add to Cart
          - button "" [ref=e156] [cursor=pointer]:
            - generic [ref=e157]: 
          - button "" [ref=e158] [cursor=pointer]:
            - generic [ref=e159]: 
    - generic [ref=e160]:
      - generic [ref=e162]:
        - img "Harley Davidson" [ref=e164]
        - img "Dell" [ref=e166]
        - img "Disney" [ref=e168]
        - generic:
          - img "Starbucks"
        - generic:
          - img "Nintendo"
        - img "NFL" [ref=e170]
        - img "RedBull" [ref=e172]
        - img "Sony" [ref=e174]
        - img "Coca Cola" [ref=e176]
        - img "Burger King" [ref=e178]
        - img "Canon" [ref=e180]
        - img "Harley Davidson" [ref=e182]
        - img "Dell" [ref=e184]
        - img "Disney" [ref=e186]
        - generic:
          - img "Starbucks"
        - generic:
          - img "Nintendo"
        - img "NFL" [ref=e188]
        - img "RedBull" [ref=e190]
        - img "Sony" [ref=e192]
        - img "Coca Cola" [ref=e194]
        - img "Burger King" [ref=e196]
      - generic:
        - generic [ref=e209] [cursor=pointer]: 
        - generic [ref=e210] [cursor=pointer]: 
  - contentinfo [ref=e211]:
    - generic [ref=e212]:
      - generic [ref=e213]:
        - generic [ref=e214]:
          - heading "Information" [level=5] [ref=e215]
          - list [ref=e216]:
            - listitem [ref=e217]:
              - link "About Us" [ref=e218] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4
            - listitem [ref=e219]:
              - link "Delivery Information" [ref=e220] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6
            - listitem [ref=e221]:
              - link "Privacy Policy" [ref=e222] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3
            - listitem [ref=e223]:
              - link "Terms & Conditions" [ref=e224] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5
        - generic [ref=e225]:
          - heading "Customer Service" [level=5] [ref=e226]
          - list [ref=e227]:
            - listitem [ref=e228]:
              - link "Contact Us" [ref=e229] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - listitem [ref=e230]:
              - link "Returns" [ref=e231] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/return/add
            - listitem [ref=e232]:
              - link "Site Map" [ref=e233] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/sitemap
        - generic [ref=e234]:
          - heading "Extras" [level=5] [ref=e235]
          - list [ref=e236]:
            - listitem [ref=e237]:
              - link "Brands" [ref=e238] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer
            - listitem [ref=e239]:
              - link "Gift Certificates" [ref=e240] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/voucher
            - listitem [ref=e241]:
              - link "Affiliate" [ref=e242] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=affiliate/login
            - listitem [ref=e243]:
              - link "Specials" [ref=e244] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/special
        - generic [ref=e245]:
          - heading "My Account" [level=5] [ref=e246]
          - list [ref=e247]:
            - listitem [ref=e248]:
              - link "My Account" [ref=e249] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - listitem [ref=e250]:
              - link "Order History" [ref=e251] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/order
            - listitem [ref=e252]:
              - link "Wish List" [ref=e253] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - listitem [ref=e254]:
              - link "Newsletter" [ref=e255] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
      - separator [ref=e256]
      - paragraph [ref=e257]:
        - text: Powered By
        - link "OpenCart" [ref=e258] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Qafox.com © 2026
```

# Test source

```ts
  1   | /**
  2   |  * Test Case: End-to-End Test on Demo E-commerce Application
  3   |  *
  4   |  * Purpose:
  5   |  * This test simulates a complete user flow on an e-commerce site.
  6   |  * 
  7   |  * Steps:
  8   |  * 1) Register a new account
  9   |  * 2) Logout after registration
  10  |  * 3) Login with the same account
  11  |  * 4) Search for a product and add it to the shopping cart
  12  |  * 5) Verify cart contents
  13  |  * 6) Attempt checkout (disabled since feature isn't available on demo site)
  14  |  */
  15  | import {test,expect,Locator, Page} from "@playwright/test"
  16  | import {HomePage} from "../pages/HomePage"
  17  | import {RegistrationPage} from "../pages/RegistrationPage"
  18  | import { RandomDataUtil } from "../utils/randomDataGenarator"
  19  | import { Loginpage } from "../pages/LoginPage"
  20  | import { LogoutPage } from "../pages/LogoutPage"
  21  | import { Searchresults } from "../pages/SearchResultsPage"
  22  | import {MyAccount} from "../pages/MyAccount"
  23  | import { Productpage } from "../pages/ProductPage"
  24  | import { ShoppingCartPage } from "../pages/ShoppingCart"
  25  | import { TestConfig } from "../test.config"
  26  | // This is the main test block that runs the entire flow
  27  | test("verify end to end test @EndToEnd",async({page})=>{
  28  |     const config=new TestConfig
  29  |     page.goto(config.appUrl)
  30  | 
  31  | const registeredEmail:string=await performRegistration(page)
  32  | console.log('✅ Registration Completed')
  33  | 
  34  | await performLogout(page)
  35  | console.log('✅ Logout Completed')
  36  | 
  37  | await performlogin(page,registeredEmail)
  38  | console.log('✅ Login Completed')
  39  | 
  40  | await addProductToCart(page)
  41  | console.log('🛒 Product Added to cart')
  42  | 
  43  | await verifyShoppingCart(page)
  44  | console.log('✅ Shopping cart verification completed!')
  45  | 
  46  | 
  47  | })
  48  | 
  49  |     //Function to perform Registation
  50  |     async function performRegistration(page:Page) {
  51  |         // 1) Register a new account
  52  |    let homepage=new HomePage(page);
  53  |    await homepage.ClkonMyAccountlink()
  54  |    await homepage.ClkonRegister()
  55  | 
  56  |       const registrationpage=new RegistrationPage(page);
  57  |   await registrationpage.EnterfirstName(RandomDataUtil.getFirstName())
  58  |   await registrationpage.EnterLastName(RandomDataUtil.getlastName())
  59  |   await registrationpage.EnterTelephone(RandomDataUtil.getPhoneNumber())
  60  | 
  61  |    let Email=RandomDataUtil.getEmail()
  62  |    await registrationpage.EnterEmail(Email)
  63  | 
  64  |    await registrationpage.EnterPassword('test1234')
  65  |   await registrationpage.EnterConformPassword('test1234')
  66  | 
  67  |    await registrationpage.ClickCheckbox()
  68  |    await registrationpage.ClickContinue()//click on submit
  69  | //validate conformation message
  70  |    expect(await registrationpage.ConformMessage()).toContain('Your Account Has Been Created!')
  71  |     return Email; // Return the email for later use in login
  72  |    
  73  |     }
  74  | 
  75  |     // Function to log out the current user
  76  |     async function performLogout(page:Page) {
  77  |     let myaccountpage=new MyAccount(page)
  78  |     let logoutpage:LogoutPage= await myaccountpage.ClkonLogout()
  79  | 
  80  |     expect(await logoutpage.iscontinuebtnvisible()).toBe(true)
  81  |     const homepage=logoutpage.Continuebtn()
> 82  |     expect((await homepage).isHomepageexist()).toBe(true) 
      |                                                ^ Error: expect(received).toBe(expected) // Object.is equality
  83  |     }
  84  | 
  85  |     // Function to log in using the registered email
  86  |     async function performlogin(page:Page , Email:string) {
  87  |      const config=new TestConfig()
  88  |   await  page.goto(config.appUrl)
  89  |   const homepage=new HomePage(page);
  90  |    await homepage.ClkonMyAccountlink()
  91  |  await homepage.ClkonLogin()
  92  |  let loginpage=new Loginpage(page);
  93  |  await loginpage.EnterEmail(Email)
  94  |  await loginpage.EnterPassword('test1234')
  95  |  await loginpage.Loginbtn()
  96  |  let myaccountpage=new MyAccount(page)
  97  | expect(await  myaccountpage.isMyAccountPageExists()).toBeTruthy()
  98  |     }
  99  |     // Function to search for a product and add it to cart
  100 |     async function addProductToCart(page:Page) {
  101 |    let homepage=new HomePage(page);
  102 |   const config= new TestConfig()
  103 |   const productname=config.productName
  104 |   const productquantity:string=config.productQuantity
  105 | 
  106 |   await homepage.SearchTab(productname)
  107 |   await homepage.Searchicon()
  108 | let searchResultsPage=new Searchresults(page)
  109 | // Validate search results page
  110 | expect(await searchResultsPage.issearchresultspageexits()).toBeTruthy()
  111 | // Validate that the desired product exists in the results
  112 | expect(await searchResultsPage.isproductexist(productname)).toBeTruthy()
  113 |     // Select product and set quantity
  114 |    const Productpage=await searchResultsPage.Selectproduct(productname)
  115 |   await Productpage?.Enterquantity(productquantity)
  116 |   await Productpage?.ClickonAddtocart()
  117 |    await page.waitForTimeout(3000)
  118 |    expect(await Productpage?.isconformMsgvisible()).toBe(true)
  119 |         
  120 |     }
  121 |     // Function to verify the shopping cart details
  122 |     async function verifyShoppingCart(page:Page) {
  123 |         const ProductPage = new Productpage(page)
  124 |         await ProductPage.ClickonItem()
  125 |         const ShoppingCartPage=await ProductPage.ClickonViewCart()
  126 |         console.log("🛒 Navigated to shopping cart!");
  127 |           const config = new TestConfig();
  128 |         expect(await ShoppingCartPage.isPageLoaded()).toBe(true)
  129 |        expect(await  ShoppingCartPage.getTotalPrice()).toBe(config.totalPrice)
  130 |        await ShoppingCartPage.clickOnCheckout()
  131 |        expect(await ShoppingCartPage.isErrorMsgvisible()).toBe(true)
  132 | 
  133 | 
  134 |         
  135 |     }
  136 |     
  137 | 
  138 | 
```