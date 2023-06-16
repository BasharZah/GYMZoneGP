import { Injectable } from '@angular/core';

import { AngularFireList , AngularFireObject,AngularFireDatabase } from '@angular/fire/database';
import { Employee } from '../models/Employee';
 

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  employeeListRef : AngularFireList<any>;
  employeeRef: AngularFireObject<any>;


  constructor( private db:AngularFireDatabase) { 
    this.employeeListRef = db.list('/employee')
  }

  createEmployee(emp:Employee){
    return this.employeeListRef.push({
      name: emp.name,
      email:emp.email,
      mobile:emp.mobile,
      details:emp.details,
    })
  }


  getEmployee(id:string){
    return this.employeeRef = this.db.object('/employee/'+ id)
  }

  getEmployeeList(){
    return this.employeeListRef = this.db.list('/employee')
  }


  UpdateEmployee(id,emp:Employee){
    return this.employeeRef.update({
      name: emp.name,
      email:emp.email,
      mobile:emp.mobile,
      details:emp.details,
    })
  }


  deleteEmployee(id:string){
      this.employeeRef = this.db.object('/employee/'+ id)
      this.employeeRef.remove()
  }


}
