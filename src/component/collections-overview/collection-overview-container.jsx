import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsFetching } from "../../store/shop/shopSelector";
import WithSpinner from "../with-spinner/with-spinner";
import CollectionOverview from "./collections-overview";

const mapStateToProps = createStructuredSelector({
  loading: selectIsFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps, null),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
