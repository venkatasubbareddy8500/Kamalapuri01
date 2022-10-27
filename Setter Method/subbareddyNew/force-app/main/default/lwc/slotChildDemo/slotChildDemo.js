import { LightningElement } from 'lwc';

export default class SlotChildDemo extends LightningElement {
    handleFooterChange(){
        const fooetElement=this.template.querySelector('.slds-card__footer')
        if(fooetElement){
            fooetElement.classList.remove('slds-hide')
        }
    }
}