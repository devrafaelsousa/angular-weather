import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import { Store } from "@ngrx/store";

import { WeatherService } from "src/app/shared/services/weather.service";
import * as fromHomeActions from './home.actions';

@Injectable() 
export class HoreEffects {

    query: string;

    loadCurrentWeather$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromHomeActions.loadCurrentWeather),
            mergeMap(({ query }) => this.weatherService.getCityWeatherByQuery(query)),
            catchError((err, caught$) => {
                this.store.dispatch
                return caught$;
            }),
            map((entity: any) => fromHomeActions.loadCurrentWeatherSuccess({ entity })),
        ),
    );

    constructor(private actions$: Actions,
        private store: Store,
        private weatherService: WeatherService) {
    }
}