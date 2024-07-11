import {Page,expect} from '@playwright/test'
export class Navigation{

    readonly page : Page

    constructor(page:Page){
        this.page = page
    }
    async formslayout(){
        let msg = this.page.getByText('Data loaded with AJAX get')
        await msg.click()
        await expect(msg).toHaveText("Data loaded with AJAX get request.")
    }

}