import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PythaModel } from './pytha-dashboard.model';
import { ApiService } from '../shared/api.service';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-pytha-dashboard',
  templateUrl: './pytha-dashboard.component.html',
  styleUrls: ['./pytha-dashboard.component.css']
})
export class PythaDashboardComponent implements OnInit {

  formValue !: FormGroup;
  pythaModelObj : PythaModel = new PythaModel();
  formuleData !: any;
  constructor(private formbuilder: FormBuilder,
    private api : ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      formule : [''],
    })
    this.getAllFormule();
  }

  postFormuleDetails(){
    this.pythaModelObj.formule = this.formValue.value.formule;

    this.api.postFormule(this.pythaModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("ça a été ajouté")
      this.formValue.reset();
      this.getAllFormule();
    },
    err=>{
      alert("Buuug");
    })
  }

  getAllFormule(){
    this.api.getFormule()
    .subscribe(res=>{
      this.formuleData = res;
    })
  }

  deleteFormule(row : any){
    this.api.deleteFormule(row.id)
    .subscribe(res=>{
      alert("Formule supprimé");
      this.getAllFormule();
    })
  }

  onEdit(row:any){
    this.pythaModelObj.id = row.id;
    this.formValue.controls['formule'].setValue(row.formule);
  }
  updateFormuleDetails(){
    this.pythaModelObj.formule = this.formValue.value.formule;
    this.api.updateFormule(this.pythaModelObj,this.pythaModelObj.id)
    .subscribe(res=>{
      alert("Triolet Modifié");
      this.formValue.reset();
      this.getAllFormule();
    })
  }

}
