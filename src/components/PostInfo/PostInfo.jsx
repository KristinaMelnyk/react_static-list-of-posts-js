import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export const PostInfo = ({ post = {}, user = null, comments = [] }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title" data-cy="PostTitle">
        {post?.title || 'No title'}
      </h3>

      {user && <UserInfo user={user} />}

      <p className="PostInfo__body">{post?.body || 'No content'}</p>
      <hr />
      
      {comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  </div>
);
