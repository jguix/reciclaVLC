import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Type } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { App } from './app.component';

// Custom services
import { 
  AppCiudadService, 
  AppCiudadRemote,
  ContainerService,
  MaterialService
} from '@app/services';

// Custom components
import { 
  AroundMePage,
  ContainerPage,
  ContainersPage,
  ContainerCardComponent,
  HomePage,
  MaterialsPage,
  MaterialPage
} from '@app/pages';

const CUSTOM_COMPONENTS: Array<Type<any>> = [
  AroundMePage,
  ContainerPage,
  ContainersPage,
  ContainerCardComponent,
  HomePage,
  MaterialPage,
  MaterialsPage
];

const CUSTOM_SERVICES: Array<Type<any>> = [
  AppCiudadService, 
  AppCiudadRemote,
  ContainerService,
  MaterialService
];

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    App,
    ...CUSTOM_COMPONENTS,
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
    ...CUSTOM_COMPONENTS,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ...CUSTOM_SERVICES
  ]
})
export class AppModule {}
