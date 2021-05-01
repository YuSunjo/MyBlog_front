import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback="loading">
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </Suspense>

    </BrowserRouter>
  );
}

export default App;
