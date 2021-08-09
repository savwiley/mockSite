import { AcceptPic, PreviewPic } from "../styled.js";

const AcceptFile = (props) => {
  const { image, pickedImage, didAccept } = props;

  return (
    <AcceptPic>
      <PreviewPic>
        <img src={URL.createObjectURL(image[0])} alt="testing" />
      </PreviewPic>
      <div>
        <input
          type="button"
          value="Continue"
          onClick={() => {
            didAccept(true);
          }}
        />
        <input
          type="button"
          value="Go Back"
          id="delBtn"
          onClick={() => {
            pickedImage(null);
          }}
        />
      </div>
    </AcceptPic>
  );
};

export default AcceptFile;
