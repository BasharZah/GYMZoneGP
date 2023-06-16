import { Pipe, PipeTransform } from '@angular/core';
import { FirebaseService } from '../shared/Firebase.services';

@Pipe({
  name: 'GetURL'
})
export class GetURLformPipe implements PipeTransform {

    constructor(private firebaseService:FirebaseService){}
  transform(value: any, args?: any): any {
    // Perform your custom transformation on the value here
    // For example, let's capitalize the input string

    let URL = '';
    this.firebaseService.readFile(value).subscribe((url) => {
        // Use the URL to display or process the image
        URL = url;   
    });

    
    return URL;
  }
}
