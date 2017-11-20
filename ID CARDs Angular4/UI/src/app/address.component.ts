import { Component, Input, ViewChild} from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'address',
    templateUrl: 'address.component.html',
})
export class AddressComponent {
    @Input('group')
<<<<<<< HEAD
    public adressForm: FormGroup
}
=======
    public adressForm: FormGroup;


    
}
>>>>>>> 8a5598ec2bed14bced315c552ba054ebe312d860
