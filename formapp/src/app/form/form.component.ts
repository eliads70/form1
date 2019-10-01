import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  
  users = [];
  addUser(id , fullName, email, phoneNum) {
    this.users.push([[id], [fullName], [email], [phoneNum]]);
    console.log(this.users);
  }

  deleteUser(index){
    this.users.splice(index, 1);
  }
  editUser(index)
  {
    this.users.splice(index, 1);
  }

  idNum(users){
  users.forEach(user => {
    user = this.users.length; user++;
  });
  }


  ngOnInit() {
  }

}
