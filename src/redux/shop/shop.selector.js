import memoize from 'lodash.memoize';
import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const shopSelector = state => state.shop;

export const shopSelectorItems = createSelector(
    [shopSelector],
    (shop) => shop.collections
)

export const selectCollection = memoize(collectionUrlParam => createSelector(
    [shopSelectorItems],
    (collections) => collections.find((collection)=>(
        collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )) 
))