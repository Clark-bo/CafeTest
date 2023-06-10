import {Selector} from 'testcafe'

class inventoryPage {
    constructor(){
        this.title = Selector('.title').withText('Products')
    }

} export default new inventoryPage