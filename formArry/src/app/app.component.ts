import { Component,OnInit} from '@angular/core';
import { FormBuilder,FormArray,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'formArry';
  addOrder !: FormGroup;

  constructor (private formBuilder:FormBuilder){
  }

  ngOnInit(): void {
    this.addOrder = this.formBuilder.group({
      order : this.formBuilder.array([this.initAddOrder()])
    })

  }

  get orderArr():any {
    return (this.addOrder.get('order') as FormArray).controls;
  }

  initAddOrder(){
    return this.formBuilder.group({
      name:[""],
      phone:[""],
      email:[""],
    })
  }


  deleteOrder(index:number){
  this.orderArr.removeAt(index)
  }
  oderSubmit(){
    console.log(this.addOrder.value);

  }

  Submit(){
    console.log(this.addOrder.value);

  }
  oderPush(){
    this.orderArr.push(this.initAddOrder())
  }
}


