import { Link, Route, Switch } from 'react-router-dom';

import { UserListPage } from './UserListPage';
import { SingleUserPage } from './SingleUserPage';
import { EditUserPage } from './EditUserPage';

export const Users = () => {
  return (
    <div>
      <h3>Users Layout</h3>

      <p>
        <Link to='/'>Main page</Link>
      </p>

      <Switch>
        <Route path='/users' exact component={UserListPage} />
        <Route path='/users/:userId/profile' exact component={SingleUserPage} />
        <Route path='/users/:userId/edit' exact component={EditUserPage} />
      </Switch>
    </div>
  );
};
