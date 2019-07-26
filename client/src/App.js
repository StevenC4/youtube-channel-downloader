import React from 'react';
import './App.css';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink to='/' exact activeClassName='activeLink'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/channels' activeClassName='activeLink'>Channels</NavLink>
            </li>
          </ul>
        </nav>
        <Route path='/' exact component={Index}/>
        <Route path='/channels' component={Channels}/>
      </BrowserRouter>
    </div>
  );
}

function Index() {
  return (
    <div>
      <h2>Index page</h2>
      <p>Basic stats about numbers of videos and channels you've subscribed to</p>
    </div>
  );
}

function Channels({match}) {
  return (
    <div>
      <h2>Channels page</h2>
      <Route path={`${match.path}/:id`} component={ChannelViewer} />
      <Route path={match.path} exact component={ChannelList} />
    </div>
    );
}

function ChannelList() {
  return (
    <div>
      <h3>List of channels</h3>
    </div>
  );
}

function ChannelViewer({match}) {
  return (
    <div>
      <h3>Channel viewer: {match.params.id}</h3>
      <p3>Video list</p3>
    </div>
  );
}

export default App;
