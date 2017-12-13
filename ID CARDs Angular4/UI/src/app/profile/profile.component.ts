import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  selectedfiles:FileList;
  currentfile:File;
  @ViewChild("fileinput") fileinputvariable
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
  sendfile(){    
    this.selectedfiles=this.fileinputvariable.nativeElement.files;
    console.log("selectedfile"+this.selectedfiles);
    this.currentfile=this.selectedfiles.item(0);
    console.log("currentfile"+this.currentfile);
    this.profileservice.sendfiletoserver(this.currentfile).subscribe(
      text=>{
        let str=text;
        alert(str);
      }     
    );

  }
}
