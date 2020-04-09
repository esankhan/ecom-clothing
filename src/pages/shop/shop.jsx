import React from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { selectCollections } from "../../store/shop/shopSelector";
import { createStructuredSelector } from "reselect";

import CollectionsOverview from "../../component/collections-overview/collections-overview";
import Collection from "../collection/collection";
import PreviewCollection from "../../component/preview-collection/preview-collection";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default connect()(ShopPage);
