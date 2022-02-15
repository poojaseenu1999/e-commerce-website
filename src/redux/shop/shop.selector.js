import memoize from "lodash.memoize";
import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;

export const shopSelectorItems = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const ShopSelectorForPreview = createSelector(
    [shopSelectorItems],
    (collections) => (Object.keys(collections).map((key) => collections[key]))
)

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [shopSelectorItems],
    (collections) => collections[collectionUrlParam]
  )
);
