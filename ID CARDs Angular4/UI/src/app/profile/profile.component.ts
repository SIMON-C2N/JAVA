import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public idForm: FormGroup;
  ids
  constructor(private _fb: FormBuilder) {}
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
    console.log(this.idForm);
    var str=JSON.stringify(this.idForm.value);
    console.log(str.length);
  }
}
