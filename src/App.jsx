import { Link, Redirect, Route, Switch } from 'react-router-dom';

import { MainPage } from './components/MainPage';
import { Users } from './components/Users';

import './styles/App.css';

function App() {
  return (
    <div className='App'>
      <h1>App Layout</h1>

      <Link to='/users'>User List Page</Link>

      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/users/:userId?' component={Users} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
