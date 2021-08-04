import { Route, HashRouter, Switch } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
