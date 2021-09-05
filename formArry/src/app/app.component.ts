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
  order!: FormArray;
  dorder!: {};
  constructor (private fb:FormBuilder){
  }

  ngOnInit(): void {
    this.addOrder = this.fb.group({
      order : this.fb.array([this.initAddOrder()])
    })

  }

  get orderArr():any {
    return (this.addOrder.get('order') as FormArray).controls;
  }

  initAddOrder(){
    return this.fb.group({
      name:[""],
      phone:[""],
      email:[""],
      delete:[""],
    })
  }


  deleteOrder(index:number){
  this.order.removeAt(index)
  }
  oderSubmit(){
    console.log(this.addOrder.value);

  }

  Submit(){
    console.log(this.addOrder.value);

  }

  selectDuplicate(i:number){
    this.dorder = this.addOrder.value.order[i] ;
  }
  oderPush(){
     console.log(this.dorder);

    this.order = this.addOrder.get('order') as FormArray;
    this.order.push(this.initAddOrder());
    this.order.patchValue([

    ]);
  }
}


