# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> verify login credint
- Location: tests\Login.spec.ts:27:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Target page, context or browser has been closed
Call log:
  - waiting for locator('h2:has-text(\'My Account\')')

```

# Test source

```ts
  1  | import{test,Page,expect,Locator} from "@playwright/test"
  2  | 
  3  | export class MyAccount{
  4  |     private readonly page:Page
  5  |     private readonly myaccmsg:Locator
  6  | 
  7  |     //constru
  8  |     constructor(page:Page){
  9  |         this.page=page
  10 |         this.myaccmsg=page.locator("h2:has-text('My Account')")
  11 |     }
  12 |     //Action method
  13 |     async SuccessMsg(){
> 14 |         const smsg=await this.myaccmsg.textContent()
     |                                        ^ Error: locator.textContent: Target page, context or browser has been closed
  15 |         return smsg
  16 |     }
  17 |     async isMyAccountPageExists(): Promise<boolean> {
  18 |         try {
  19 |             const isVisible = await this.myaccmsg.isVisible();
  20 |             return isVisible;
  21 |         } catch (error) {
  22 |             console.log(`Error checking My Account page heading visibility: ${error}`);
  23 |             return false;
  24 |         }
  25 | }
  26 | }
```