import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../store/shop/shopSelector";
import "./collections-overview.scss";

import PreviewCollection from "../preview-collection/preview-collection";

const CollectionsOverview = ({ collection }) => {
  return (
    <div className="collections-overview">
      {collection.map(({ id, ...restCollection }) => (
        <PreviewCollection key={id} {...restCollection} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collection: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
