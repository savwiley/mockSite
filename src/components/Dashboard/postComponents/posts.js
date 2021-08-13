import { PostColumn, PostBlock } from "../styled.js";

const PostBoard = (props) => {
  const { posts } = props;

  return (
    <PostColumn>
      {posts.forEach((e) => {
        <PostBlock>

        </PostBlock>
      })}
    </PostColumn>
  )
}

export default PostBoard;

/**
 * profilePic displayName
 * image
 * message
 * date
 */