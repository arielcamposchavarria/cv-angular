// src/app/app.config.ts
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideHttpClient, HttpClient, withFetch } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

// Loader que carga /assets/i18n/{lang}.json
export function clientHttpLoaderFactory(http: HttpClient): TranslateLoader {
  return {
    getTranslation: (lang: string) =>
      http.get<Record<string, any>>(`/assets/i18n/${lang}.json`)
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    // HttpClient con fetch para SSR
    provideHttpClient(withFetch()),

    // TranslateService y pipe |translate
    importProvidersFrom(
      TranslateModule.forRoot({
        fallbackLang: 'es',               // ← reemplaza defaultLanguage
        loader: {
          provide: TranslateLoader,
          useFactory: clientHttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
  ]
};
