import React from "react";
import { Route } from "react-router-dom";
import Collection from "../../component/collection/collection.component";
import CollectionOverview from '../../component/collection-overview/collection-overview.component';

const ShopPage = ({match}) => {
  return (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default ShopPage;
