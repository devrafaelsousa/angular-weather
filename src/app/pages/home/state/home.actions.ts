import { createAction, props } from "@ngrx/store";

export const changeAction = createAction(
    '[Home] Change Text',
    props<{ text: string }>(),
);