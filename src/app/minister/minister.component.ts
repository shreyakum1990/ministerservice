import { Component, OnInit } from '@angular/core';
import { MinisterService } from '../minister.service';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-minister',
  templateUrl: './minister.component.html',
  styleUrls: ['./minister.component.css']
})
export class MinisterComponent implements OnInit {
  private min : any = [];
  private mins : any[] =[];
  constructor(private ministersrvc : MinisterService) { }

  ngOnInit() {
    this.getMinisterRecord();
  }

  saveMinisterRecord(){
    this.ministersrvc.createEmp(this.min).subscribe(
      (res) => {
        console.log("Record is save", res)
      },
      (err) => {
        console.log("This is error",err)
      }
    )
  }

  // getMinisterRecord(){
  //   this.ministersrvc.getEmp(this.min).subscribe(
  //     (res) => {
  //       var resJson = res.json();
  //       var keys = Object.keys(resJson);
  //       this.mins = keys.map(key) => {
  //         return {key : key,res : resJson[key]};
  //       }
  //     },
  //     (err) => {
  //       console.log("This is error",err)
  //     },
  //     () => {
  //       this.getMinisterRecord();
  //     }
  //   )
  // }

}
