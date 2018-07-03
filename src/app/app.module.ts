import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { App } from './app.component';
import { HomePage } from './pages';
import { AppCiudadService, AppCiudadRemote } from './services';
import { AroundMePage, ContainersPage, MaterialsPage } from './pages';
import { ContainerCardComponent } from './pages';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    App,
    AroundMePage,
    ContainersPage,
    MaterialsPage,
    HomePage,
    ContainerCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(App),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    AroundMePage,
    ContainersPage,
    MaterialsPage,
    HomePage,
    ContainerCardComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppCiudadRemote,
    AppCiudadService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
