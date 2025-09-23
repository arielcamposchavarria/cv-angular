import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

type Lang = 'es' | 'en' | 'pt';
const STORAGE_KEY = 'lang';

@Injectable({ providedIn: 'root' })
export class LangService {
  current: Lang = 'es';

  constructor(
    private translate: TranslateService,
    @Inject(DOCUMENT) private doc: Document
  ) {
    const saved = (localStorage.getItem(STORAGE_KEY) as Lang) || this.detect();
    this.set(saved);
  }

  private detect(): Lang {
    const nav = navigator.language?.toLowerCase() || '';
    if (nav.startsWith('es')) return 'es';
    if (nav.startsWith('pt')) return 'pt';
    return 'en';
  }

  set(lang: Lang) {
    this.current = lang;
    this.translate.use(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    this.doc.documentElement.setAttribute('lang', lang);
  }
}
