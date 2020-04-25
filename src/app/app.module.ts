import { BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ToastaModule } from 'ngx-toasta';
import { BidiModule } from '@angular/cdk/bidi';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { environment } from '../environments/environment';

import { AppRoutes } from './app-routing';
import { GlobalModule } from './Global/Global.module';
import { TemplatesModule } from './Templates/Templates.module';
import { MenuItems } from './Core/menu/menu-items/menu-items';

import { UndelyService } from './Services/Undely.service';

import { AppSettings } from './app.settings';
import { AppComponent } from './app.component';
import { MainComponent } from './Main/Main.component';
import { HeaderOneComponent } from './Layouts/Header/HeaderOne/HeaderOne.component';
import { HeaderTwoComponent } from './Layouts/Header/HeaderTwo/HeaderTwo.component';
import { HeaderThreeComponent } from './Layouts/Header/HeaderThree/HeaderThree.component';
import { FooterOneComponent } from './Layouts/Footer/FooterOne/FooterOne.component';
import { FooterTwoComponent } from './Layouts/Footer/FooterTwo/FooterTwo.component';
import { MenuComponent } from './Layouts/Menu/Menu/Menu.component';
import { HomeoneComponent } from './Pages/Home/HomeOne/HomeOne.component';
import { HomeTwoComponent } from './Pages/Home/HomeTwo/HomeTwo.component';
import { HomeThreeComponent } from './Pages/Home/HomeThree/HomeThree.component';
import { CartComponent } from './Pages/Cart/Cart.component';
import { NotFoundComponent } from './Pages/NotFound/NotFound.component';
import { SideBarMenuComponent } from './Layouts/Menu/SidebarMenu/SidebarMenu.component';
import { PaymentDetailSideBarComponent } from './Layouts/PaymentDetailSideBar/PaymentDetailSideBar.component';
import { FixedHeaderComponent } from './Layouts/Header/FixedHeader/FixedHeader.component';
import { AuthInterceptor } from './Auth/auth.interceptor';
import { AuthService } from './Auth/auth.service';
import { UserService } from './Services/user.service';
import { SharedModule } from './Shared/shared.module';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CustomOverlayContainer } from './Theme/utils/custom-overlay-container';


/********** Custom option for ngx-translate ******/
export function createTranslateLoader(http: HttpClient) {
   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeoneComponent,
    HeaderOneComponent,
    FooterOneComponent,
    MenuComponent,
    SideBarMenuComponent,
    CartComponent,
    NotFoundComponent,
    PaymentDetailSideBarComponent,
    HomeTwoComponent,
    HeaderTwoComponent,
    FooterTwoComponent,
    HomeThreeComponent,
    HeaderThreeComponent,
    FixedHeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'undely-seo-pre'}),
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {onSameUrlNavigation: 'reload'}),
    GlobalModule,
    TemplatesModule,
    HttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'undely'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ToastaModule.forRoot(),
    BidiModule,
    TranslateModule.forRoot({
       loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
         }
      }),
      SlickCarouselModule,
      SharedModule
  ],
   providers: [
      MenuItems,
      UndelyService,
      AppSettings,
      { provide: OverlayContainer, useClass: CustomOverlayContainer },
      {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
      },
      AuthService,
      UserService
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
