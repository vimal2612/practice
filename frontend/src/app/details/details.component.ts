import { Component, OnInit } from '@angular/core';
import { LiteService } from '../lite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  template: `
    <p>
      details works!
    </p>
  `,
  styles: []
})
export class DetailsComponent implements OnInit {

  // constructor(private _router:Router, private _liteService:LiteService) {
  //   this._liteService.show()
  //   .subscribe( 
  //     data=> console.log(data),
  //     error=>console.error(error)
  //   )
  //  }

  ngOnInit() {
  }

}
