import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { Spartan } from './spartan';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted = false;
  spartanModel = new Spartan('Rob','rob@bank.com','777770000',true);
  errorMsg = ''

  constructor(private _enrollmentService:EnrollmentService){}

  onSubmit(){
    this._enrollmentService.enroll(this.spartanModel)
      .subscribe(
        data=> console.log('Success!', data),
        error=> this.errorMsg = error.statusText
      );
    this.submitted = true;
  }
}
