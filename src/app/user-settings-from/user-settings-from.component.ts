import { Component, OnInit } from '@angular/core';
import {usersettings} from '../data/user.settings';

@Component({
  selector: 'app-user-settings-from',
  templateUrl: './user-settings-from.component.html',
  styleUrls: ['./user-settings-from.component.css']
})
export class UserSettingsFromComponent implements OnInit {
  usersettings:usersettings=
    {
      name:'hichem',
      emailOffers:true,
      interfacestyle:'Dark',
      subscriptionType:'Annualy',
      notes:'he are some ........'

    }

  constructor() { }

  ngOnInit() {
  }

}
