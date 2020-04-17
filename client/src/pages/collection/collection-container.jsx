import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIscollectionLoaded } from "../../store/shop/shopSelector";
import WithSpinner from "../../component/with-spinner/with-spinner";
import Collection from "./collection";

const mapStateToProps = createStructuredSelector({
  loading: (state) => !selectIscollectionLoaded(state),
});

const CollectionContainer = compose(
  connect(mapStateToProps, null),
  WithSpinner
)(Collection);

export default CollectionContainer;
