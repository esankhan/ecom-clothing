import React from "react";
import "./collection.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollection } from "../../store/shop/shopSelector";

import CollectionItem from "../../component/collection-item/collection-item";

const Collection = ({ match }) => {
  return (
    <div className="collection-page">
      <h2>Cate</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
