import UserItem from 'Users/UserItem/UserItem';
import Card from 'components/Card/Card';

import 'Users/UsersList/usersList.css';

const UsersList = ({ data, onUserProfileOpen, onLoadMore }) => {
  const onUserOpen = (userId) => (e) => onUserProfileOpen(userId);

  return (
    <div className="containerList">
      {data.map((user) => (
        <UserItem onUserClick={onUserOpen(user.id)} key={user.id} user={user} />
      ))}
      <Card>
        <div className="containerListLoadMore" onClick={onLoadMore}>
          <img alt="Load more" src="http://pngimg.com/uploads/plus/small/plus_PNG37.png" />
        </div>
      </Card>
    </div>
  );
};

export default UsersList;
