import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import MovieList from './components/MovieList';
import MovieEditor from './components/MovieEditor';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <BrowserRouter>
          <nav
            className="navbar navbar-dark bg-dark"
            style={{ marginBottom: 24 }}
          >
            <Link to="/" className="navbar-brand">
              Popular movies
            </Link>
          </nav>
          <Switch>
            <Route path="/movies">
              <MovieList />
            </Route>
            <Route path="/movie/:id">
              <MovieEditor />
            </Route>
            <Route>
              <Redirect to="/movies" />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
