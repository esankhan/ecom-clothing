import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../store/directory/directorySelector";
import "./directory.scss";
import MenuItem from "../menu-item/menu-item";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...restSection }) => (
        <MenuItem key={id} {...restSection} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
