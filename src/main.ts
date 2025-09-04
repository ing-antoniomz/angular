import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';

bootstrapApplication(App, {
  ...appConfig,                // mantienes tu configuración existente
  providers: [
    ...(appConfig.providers || []), // preserva otros providers si existen
    provideHttpClient()              // 👈 agrega HttpClient para servicios
  ]
})
.catch((err) => console.error(err));
