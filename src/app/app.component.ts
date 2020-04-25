import { Component, ViewContainerRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Settings } from './app.settings.model';
import { AppSettings } from './app.settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   public settings: Settings;
   constructor(public appSettings: AppSettings, translate: TranslateService) {
      translate.addLangs(['en', 'fr']);
      translate.setDefaultLang('en');
      translate.use('en');
      this.settings = this.appSettings.settings;
      // const browserLang: string = translate.getBrowserLang();
      // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
   }
}
