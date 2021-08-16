import React from 'react';
import { ChoosePic } from '../styled';

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

export default ChooseFile;
