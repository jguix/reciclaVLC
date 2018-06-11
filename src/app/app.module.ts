import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { App } from './app.component';
import { HomePage } from './pages/home/home';
import { AppCiudadRemote } from './services/app-ciudad.remote';
import { HttpClientModule } from '@angular/common/http';
import { AppCiudadService } from './services/app-ciudad.service';
import { ContainersPage } from './pages/containers/containers';
import { AroundMePage } from './pages/around-me/around-me';
import { MaterialsPage } from './pages/materials/materials';
import { ContainerComponent } from './pages/containers/components/container.component';

@NgModule({
  declarations: [
    App,
    AroundMePage,
    ContainersPage,
    MaterialsPage,
    HomePage,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(App)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    AroundMePage,
    ContainersPage,
    MaterialsPage,
    HomePage,
    ContainerComponent,
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
