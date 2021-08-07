import { PostModal, PostTop, CloseButton, ChoosePic } from "./styled.js";
import { RiCloseLine } from "react-icons/ri";

const newPost = ({ setShown }) => {
  return (
    <PostModal>
      <div class="inner">
        <PostTop>
          <h2>New Post</h2>

          <CloseButton
            onClick={() => {
              setShown(false);
            }}
          >
            <RiCloseLine />
          </CloseButton>
        </PostTop>

        <ChoosePic>
          <input type="file" accept="image/*" />
        </ChoosePic>
      </div>
    </PostModal>
  );
};

export default newPost;
