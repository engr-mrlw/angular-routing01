import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { provideRouter } from '@angular/router';
import routeConfig from './app/app.routes';
// import routeConfig from './app/routes';

// bootstrapApplication(AppComponent, appConfig)
bootstrapApplication(AppComponent, {
  providers : [
    provideRouter(routeConfig)
  ]
}).catch((err) => console.error(err));

// bootstrapApplication(AppComponent, appConfig)
// .catch((err) => console.error(err));
