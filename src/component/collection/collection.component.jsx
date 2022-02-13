import React from "react";
import "./collection.styles.scss";
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selector';

const Collection = ({ match }) => {
  console.log('collectionMatch', match);
  return (
    <div className="collection">
      <h1>Collection page</h1>
    </div>
  );
};

const mapStateToProps=(state, ownProps) => ({
   collection: selectCollection(ownProps.match.params.collectionId)(state)
}) 

export default connect(mapStateToProps)(Collection);
