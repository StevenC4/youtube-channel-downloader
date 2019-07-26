import React from 'react';
import './App.css';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='navBar'>
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
        </div>
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

const channelIds = [1, 3, 21, 13];
const channels = {
  1: {ytChannelId: 1, name: 'Blender Guru'},
  3: {ytChannelId: 3, name: `Jelle's Marble Runs`},
  13: {ytChannelId: 13, name: 'Primitive Technology'},
  21: {ytChannelId: 21, name: 'Zeltik'}
};

function ChannelList({match}) {
  return (
    <div>
      <h3>List of channels</h3>
      <nav>
        <ul>
          {channelIds.map(channelId =>
            <li key={channelId}>
              <NavLink to={`${match.url}/${channelId}`}>{channels[channelId].name}</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

function ChannelViewer({match}) {
  return (
    <div>
      <h3>Channel viewer: {match.params.id}</h3>
      <h3>Video list</h3>
    </div>
  );
}

export default App;
