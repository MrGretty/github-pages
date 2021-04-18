import Card from 'components/Card/Card';
import 'Users/UserItem/userItem.css';

const UserItem = ({ user, onUserClick }) => {
  return (
    <Card>
      <div className="user-content">
        <div className="user-avatar">
          <img alt={user.login} src={user.avatar_url} />
        </div>
        <div className="user-text" onClick={onUserClick}>{user.login}</div>
      </div>
    </Card>
  );
};

export default UserItem;
