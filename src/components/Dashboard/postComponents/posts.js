import { PostColumn, PostBlock, PostImage, PostInteract } from "../styled.js";

const PostBoard = (props) => {
  const { posts, oldPosts } = props;

  console.log("running");
  console.log(posts);
  posts.forEach((e) => {
    console.log(e);
  })

  return (
    <PostColumn>
      {posts.map((e) => (
        <PostBlock key={e.date}>
          <header>
            <img href={e.ownerPic} alt="profile" />
            {e.postOwner}
          </header>

          <PostImage>
            <img href={e.postPic} alt="post" />
          </PostImage>

          <PostInteract>
            <div className="message">{e.postMessage}</div>
            <div className="date">{e.data}</div>
          </PostInteract>
        </PostBlock>
      ))}
    </PostColumn>
  )
}

export default PostBoard;
//FIX DATE
/**
 * profilePic displayName
 * image
 * message
 * date
 */