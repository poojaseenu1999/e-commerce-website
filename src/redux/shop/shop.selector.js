import { createSelector } from "reselect";

const shopSelector = state => state.shop;

export const shopSelectorItems = createSelector(
    [shopSelector],
    (shop) => shop.collections
)