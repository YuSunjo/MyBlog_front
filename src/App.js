import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import Navbar from './navbar/Navbar';
import Members from './pages/Members';
import CreateBoard from './pages/CreateBoard';
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback="loading">
        <Switch>
          <Route exact path="/" component={Navbar} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/createBoard" component={CreateBoard} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
