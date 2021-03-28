import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { Spartan } from './spartan';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TDF';
  spartanModel = new Spartan('Rob','rob@bank.com','777770000',true);

  constructor(private _enrollmentService:EnrollmentService){}

  onSubmit(){
    this._enrollmentService.enroll(this.spartanModel)
      .subscribe(
        data=> console.log('Success!', data),
        error=> console.log('error',error)
      )
  }
}
