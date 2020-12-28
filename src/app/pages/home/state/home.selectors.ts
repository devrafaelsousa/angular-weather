import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HomeState } from "./home.reducer";

export const selectorHomeState = createFeatureSelector('home');

export const selectCurrentWeather = createSelector(
    selectorHomeState,
    (homeState: HomeState) => homeState.entity,
);

export const selectCurrentWeatherLoading = createSelector(
    selectorHomeState,
    (homeState: HomeState) => homeState.loading,
);

export const selectCurrentWeatherError = createSelector(
    selectorHomeState,
    (homeState: HomeState) => homeState.error,
);
