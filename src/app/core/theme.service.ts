import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly LS_KEY = 'theme';
  private isBrowser = false;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  get current(): 'light'|'dark' {
    if (!this.isBrowser) return 'light';
    const v = document.documentElement.getAttribute('data-theme');
    return (v === 'dark' ? 'dark' : 'light');
  }

  set(theme: 'light'|'dark') {
    if (!this.isBrowser) return;
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(this.LS_KEY, theme); } catch {}
  }

  toggle() {
    this.set(this.current === 'dark' ? 'light' : 'dark');
  }
}
