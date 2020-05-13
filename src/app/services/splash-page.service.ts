import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { distinctUntilChanged } from 'rxjs/operators';

import { SpaEnvApiService } from './spa-env-api.service';
import { SpaEnvResponse, APP_ROUTES } from '../app.constants';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Responsible for determing if the splash page (aka maintenance mode) is
 * enabled. It uses the spa-env-server to get these values.
 * \
 * Subscribe to .values() to get the spa env values.
 */

@Injectable({
  providedIn: 'root'
})
export class SplashPageService {

  private loaded = false;
  public maintenanceMode: boolean = false;

  /**
   * We use private BehaviorSubjects to get variables instead of repeating HTTP requests.
   */
  private $valueSubject = new BehaviorSubject<SpaEnvResponse>( null );


  public $values: Observable<SpaEnvResponse> = this.$valueSubject.asObservable();

  constructor( private envApiService: SpaEnvApiService,
               private router: Router ) {
  }

  /**
   * Check if maitenance mode is active, and if so redirect to splash page.
   */
  public setup(): void {
    this.load().then( isMaintenance => {
      if ( isMaintenance ) {
        this.router.navigate( [APP_ROUTES.maintenance] );
      }
    });
  }

  public load(): Promise<SpaEnvResponse> {
    return new Promise((resolve, reject) => {

        this.envApiService.getEnvs().pipe( distinctUntilChanged() )
          .subscribe(envs => { this.$valueSubject.next(envs);
        });
    });
  }
}

/*
    this.cacheApiService
      .getCache(cacheName)
      .pipe(map(x => x[propertyName]))
      .subscribe(val => $subject.next(val));

      */
