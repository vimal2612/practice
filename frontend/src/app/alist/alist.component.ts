import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { LiteService } from '../lite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alist',
  templateUrl: './alist.component.html',
  styles: []
})
export class AlistComponent implements OnInit {

  alistForm: FormGroup = new FormGroup({
    fullname: new FormControl(null, [Validators.email, Validators.required]),
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.minLength(4), Validators.required]),
    mobile: new FormControl(null, [Validators.minLength(4), Validators.required]),
    city: new FormControl(null, [Validators.minLength(4), Validators.required])
  });


  constructor(private _router:Router, private _liteService:LiteService) { 
  }

  ngOnInit() {
  }

  send() {
   this._liteService.send(JSON.stringify(this.alistForm.value))
.subscribe(
  data=> {console.log(data); this._router.navigate(['/']);},
  error=>console.error(error)
)
//console.log(JSON.stringify(this.registerForm.value));
}
}
