import { Injectable } from '@angular/core';

import { AngularFirestore , AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService  {

  constructor(private firestore: AngularFirestore , private storage:AngularFireStorage) { }


  addData(collectionName: string, data: any) {
    return this.firestore.collection(collectionName).add(data);
  }


  updateData(collectionName: string , documentId:string , formData) {
    const collectionRef = this.firestore.collection(collectionName);
    const documentRef = collectionRef.doc(documentId);
  
   return documentRef.update(formData) ; 
     
  }

  getData(collectionName: string) {
    return this.firestore.collection(collectionName).get() ;
  }


  getDataByCondations(collectionName: string , fieldName:string , operator:any  , filedValue:string) {
    const collectionRef: AngularFirestoreCollection<any> = this.firestore.collection(collectionName);
    console.log(collectionRef);
    return collectionRef.ref.where(fieldName, operator, filedValue).get() ;
  }



  updateDocument(collectionPath: string, documentId: string, updatedData: any) {
    const documentRef: AngularFirestoreDocument<any> = this.firestore.collection(collectionPath).doc(documentId);
    return documentRef.update(updatedData);
  }


 

  uploadFile(images: File[]) {
    const uploadTasks:any[] = [] ;
    
    images.forEach((image: File) => {
      const filePath = `images/${new Date().getTime()}_${image.name}`;
      const storageRef = this.storage.ref(filePath);
      const uploadTask = this.storage.upload(filePath, image);
  
      uploadTasks.push(filePath);
    });
  
    return uploadTasks;
  }



  readFile(path:string){

    // Get a reference to the image file in Firebase Storage
    const imageRef = this.storage.ref(path); 

    // Get the download URL of the image
    return imageRef.getDownloadURL();

  }

}
