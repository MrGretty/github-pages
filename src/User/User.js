import { withRouter } from 'react-router';

import withEmptyUserData from 'hocs/withEmptyUserData';

import 'User/user.css';

const User = ({ data, history }) => {
  return (
    <div className="userContainer">
      <button className="backButton" onClick={history.goBack}>
        Back to search
      </button>
      <div className="userTable">
        <section>
          <div className="row">
            <div className="col">Id</div>
            <div className="col">Name</div>
            <div className="col">Followers</div>
            <div className="col">Following</div>
          </div>
          <div className="row">
            <div className="col">{data.id}</div>
            <div className="col">{data.name || 'unknomn'}</div>
            <div className="col">{data.followers}</div>
            <div className="col">{data.following}</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default withRouter(withEmptyUserData(User));
