import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  kepek:any
  keresoSzo="alma"
  constructor(private base:BaseService){

    this.base.getPhotos().subscribe(
      (res)=>{
        this.kepek=res
        console.log(res)
      }
    )

  }

  kereses(event:any){
    console.log(event)
  }
}
