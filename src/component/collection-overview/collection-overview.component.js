import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import './collection-overview.styles.scss';
import CollectionPreview from "../../component/collection-preview/collection-preview.component.jsx";
import { ShopSelectorForPreview } from "../../redux/shop/shop.selector";

const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
         {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: ShopSelectorForPreview,
  });

export default connect(mapStateToProps)(CollectionOverview);