import { CreateMessage, MessagePic, MessageCenter } from "../styled.js";

const AddMessage = (props) => {
  const { image, /*firebase*/ } = props;

  return (
    <CreateMessage>
      <MessagePic>
        <img src={URL.createObjectURL(image[0])} alt="testing" />
      </MessagePic>

      <MessageCenter>
        <textarea></textarea>

        <input
          type="button"
          value="Create"
          //creates post
        />
        <input
          type="button"
          value="Start Over"
          id="delBtn"
          //delets image from storage
          //goes back to choosePic
        />
      </MessageCenter>
    </CreateMessage>
  );
};

export default AddMessage;

// https://firebase.google.com/docs/storage/web/file-metadata

// https://firebase.google.com/docs/database/web/start

/**
 * I need the post to appear on the dashboard for everyone to see.
 * 
 * The post will include
 *  - the image
 *  - message
 *  - displayName & userPic : just userPic
 *  - comment section?
 *  - a like option?
 * 
 * I would also like to create profiles so that the logged in user can see all of the posts they created.
 * 
 * How To Do That
 *  The image itself can be saved in storage, much like the profile images. I *could* use metadata to create the custom message. I could also use metadata to display the name and/or userPic.
 *   -OR-
 *  While the image will be saved in storage, I could use the database to create all of the extra stuff instead. This MAY make it easier to display on the dashboard, in the case of including interaction (likes/comments).
 * 
 * We could just try it the first way and see if that works.
 */