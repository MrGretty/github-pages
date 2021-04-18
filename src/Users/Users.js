import { useState } from 'react';
import { withRouter } from 'react-router';

import UsersList from 'Users/UsersList/UsersList';

import { get } from 'api';
import { maxValue } from 'utils';

const Users = ({ history, data }) => {
  const [users, setUsers] = useState(data);
  const onLoadMore = (lastUserGithubId) => async () => {
    const result = await get(`https://api.github.com/users?since=${lastUserGithubId}&per_page=10`);
    setUsers([...users, ...result]);
  };

  const onOpenUserProfile = (userId) => history.push(`user/${userId}`);

  return (
    <UsersList
      data={users}
      onUserProfileOpen={onOpenUserProfile}
      onLoadMore={onLoadMore(maxValue(users.map((user) => user.id)))}
    />
  );
};

export default withRouter(Users);
