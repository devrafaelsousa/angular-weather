import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HomeState } from "./home.reducer";

export const selectorHomeState = createFeatureSelector('home');

export const selectHomeText = createSelector(
    selectorHomeState,
    (homeState: HomeState) => homeState.text, 
);