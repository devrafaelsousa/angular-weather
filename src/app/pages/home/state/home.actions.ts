import { createAction, createReducer, props } from "@ngrx/store";

import { Bookmark } from "src/app/shared/models/boolmark.model";

export const loadCurrentWeather = createAction(
    '[Home] Load Current Weather',
    props<{ query: string}>(),
);

export const loadCurrentWeatherSuccess = createAction(
    '[Weather API] Load Current Weather Success', 
    props<{ entity: any }>(),
);

export const loadCurrentWeatherFailed = createAction(
    '[Weather API] Load Current Weather Failed',
);

export const toggleBookmark = createAction(
    '[Home] Toggle Bookmark',
    props<{ entity: Bookmark }>(),
);