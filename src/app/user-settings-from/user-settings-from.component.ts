import { Component, OnInit } from '@angular/core';
import {usersettings} from '../data/user.settings';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-settings-from',
  templateUrl: './user-settings-from.component.html',
  styleUrls: ['./user-settings-from.component.css']
})
export class UserSettingsFromComponent implements OnInit {
  Originalusersettings:usersettings=
    {
      name:null,
      emailOffers:null,
      interfacestyle:null,
      subscriptionType:null,
      notes:null

    }
  usersettings:usersettings={...this.Originalusersettings}

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    console.log('form is'+ form.valid)
  }

}
