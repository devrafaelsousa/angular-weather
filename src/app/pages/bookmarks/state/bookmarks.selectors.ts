import { createFeatureSelector, createSelector } from "@ngrx/store";

import { BookmarksState } from "./bookmarks.reducer";

export const selectorBookmarksState = createFeatureSelector('bookmarks');

export const selectBookmarksList = createSelector(
    selectorBookmarksState,
    (bookmarksState: BookmarksState) => bookmarksState.list,
);