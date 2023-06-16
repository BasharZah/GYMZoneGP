import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { AngularFireList, AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userData: any; 
 


  constructor(
   public afStore:AngularFirestore,
   public ngFireAuth: AngularFireAuth,
   public router:Router,
   private db:AngularFireDatabase
  ) { 
    this.ngFireAuth.authState.subscribe(user =>{
      if (user) {
        this.userData = user
        localStorage.setItem('user',JSON.stringify(this.userData))
        JSON.parse(localStorage.getItem('user'))
      } else {
        localStorage.setItem('user',null)
        JSON.parse(localStorage.getItem('user'))
      }
    })


 

  }



signIn(email:string,password:string){
  return this.ngFireAuth.signInWithEmailAndPassword(email,password)
}

registerUser(email:string,password:string){
  return this.ngFireAuth.createUserWithEmailAndPassword(email,password)
}


get isLoggedIn() : boolean{
  const user =  JSON.parse(localStorage.getItem('user'))
  return (user !== null ) ? true:false
}

async updatePassword(newPassword: string) {
  const user = this.ngFireAuth.currentUser;
  return (await user).updatePassword(newPassword);
}


setUserData(user:any){

  const userRef : AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`)
  const  employeeRef: AngularFireObject<any> = this.db.object( `/users/${user.uid}`)

  const userData : User = {
    uid: user.uid,
    email: user.email,
    name: user.name,
    displayName: user.displayName,
    photoURL: user.photoURL,
  }

  employeeRef.set(userData)


  return userRef.set(userData,{
    merge: true
  })
}



signOut(){
  return this.ngFireAuth.signOut().then(()=>{
     sessionStorage.clear();
     this.router.navigate(['login'])
     
  })
}



}
