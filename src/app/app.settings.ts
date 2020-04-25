import { Injectable } from '@angular/core';
import { Settings } from './app.settings.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppSettings {
    public settings = new Settings(
        'Undely',   // theme name
        'home-2',  // default, compact, mini
        'blue-light',   // indigo-light, teal-light, red-light, gray-light, blue-dark, green-dark, pink-dark, gray-dark
        false       // true = rtl, false = ltr
    );
    private dataSource = new BehaviorSubject(this.settings);
    currentSettings = this.dataSource.asObservable();

    changeSettings(data: Settings) {
        this.dataSource.next(data);
      }

}
