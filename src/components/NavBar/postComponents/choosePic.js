import React from "react";
import PropTypes from "prop-types";
import { ChoosePic } from "../styled";

const ChooseFile = ({ pickedImage }) => (
  <ChoosePic>
    <input
      type="file"
      accept="image/*"
      id="uploadButton"
      onChange={(e) => {
        pickedImage(e.target.files);
      }}
      hidden
    />
    <label htmlFor="uploadButton">Select From Computer</label>
  </ChoosePic>
);

ChooseFile.propTypes = {
  pickedImage: PropTypes.func,
};

export default ChooseFile;
