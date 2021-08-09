import { ChoosePic } from "../styled.js";

const ChooseFile = ({ pickedImage }) => {
  return (
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
};

export default ChooseFile;
