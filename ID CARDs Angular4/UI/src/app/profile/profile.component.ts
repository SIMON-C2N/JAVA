import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, FormArray, FormBuilder } from '@angular/forms';
import { ProfileService } from '../profile.service';


export interface ObjectIds{  
  ids:Object[];
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  obj:ObjectIds;
  public idForm: FormGroup;
  constructor(private _fb: FormBuilder, private profileservice:ProfileService) {}
  ngOnInit() {
    this.idForm = this._fb.group({
      ids: this._fb.array([
        this.initAddress(),
      ])
  });
}
 
  initAddress() {
    return this._fb.group({
      name: ['', Validators.required],
        role: ['']
    });
  }

  addAddress() {
  const control = <FormArray>this.idForm.controls['ids'];
  control.push(this.initAddress());
  }

  removeAddress(i: number) {
  const control = <FormArray>this.idForm.controls['ids'];
  control.removeAt(i);
  }

  multiidcards(){
    this.obj=this.idForm.value;
    this.profileservice.sendUsersToServer(this.idForm.value).subscribe(
      value=>{
        console.log("successfully submitted"+value);
      }
    );
    console.log("before sending to the service"+this.idForm.value);   
  }
}
