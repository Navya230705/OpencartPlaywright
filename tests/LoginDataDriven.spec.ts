import{test,expect} from "@playwright/test"
import { HomePage } from "../pages/HomePage"
import { TestConfig } from "../test.config"
//import { RandomDataUtil } from "../utils/randomDataGenarator"
import { Loginpage } from "../pages/LoginPage"
import { MyAccount } from "../pages/MyAccount"
import { DataProvider } from "../utils/dataProviders"

const jsonpath='testdata/logindata.json'
const jsontestdata=DataProvider.getTestDatafromJson(jsonpath)
for(const data of jsontestdata){
    test(`Data driven login:${data.testName} @datadriven`, async({page})=>{
        const config=new TestConfig
        await page.goto(config.appUrl)
        //Home Page
       const homepage= new HomePage(page)
      await homepage.ClkonMyAccountlink()
      await homepage.ClkonLogin()
      //Login Page
      
      const loginpage=new Loginpage(page)
     await loginpage.EnterEmail(data.email)
     await loginpage.EnterPassword(data.password)
     await loginpage.Loginbtn()

     if(data.expected.toLowerCase()==='success'){
       const myacct= new MyAccount(page)
      const smsg=await myacct.SuccessMsg()
      expect(smsg).toContain('My Account')
     }else{
       //const errormsg= loginpage.ErrorMsg()
      // expect(errormsg).toContain('Warning: No match for E-Mail Address and/or Password.')
      expect(await loginpage.ErrorMsg()).toContain('Warning: No match')
     //await loginpage.ErrorMsg()

     }


        

    })

    
}
const csvpath='testdata/logindata.csv'
const csvtestdata=DataProvider.getDatafromcsv(csvpath)
for(const data of csvtestdata){
    test(`CSV Data driven login:${data.testName} @datadriven`, async({page})=>{
        const config=new TestConfig
        await page.goto(config.appUrl)
        //Home Page
       const homepage= new HomePage(page)
      await homepage.ClkonMyAccountlink()
      await homepage.ClkonLogin()
      //Login Page
      
      const loginpage=new Loginpage(page)
     await loginpage.EnterEmail(data.email)
     await loginpage.EnterPassword(data.password)
     await loginpage.Loginbtn()

     if(data.expected.toLowerCase()==='success'){
       const myacct= new MyAccount(page)
      const smsg=await myacct.SuccessMsg()
      expect(smsg).toContain('My Account')
     }else{
       //const errormsg= loginpage.ErrorMsg()
      // expect(errormsg).toContain('Warning: No match for E-Mail Address and/or Password.')
      expect(await loginpage.ErrorMsg()).toContain('Warning: No match')
     //await loginpage.ErrorMsg()

     }


        

    })
}
