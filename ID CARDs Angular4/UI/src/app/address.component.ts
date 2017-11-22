import { Component, Input, ViewChild} from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'address',
    templateUrl: 'address.component.html',
})
export class AddressComponent {
    @Input('group')
    public adressForm: FormGroup;


    
}
