import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import moment from 'moment';
import Modal from 'react-modal';

Modal.setAppElement('#root')

const channels = {
  byId: {
    'UCOKHwx1VCdgnxwbjyb9Iu1g': {
      ytChannelId: 'UCOKHwx1VCdgnxwbjyb9Iu1g',
      name: 'Blender Guru',
      published: 1260360402,
      videos: []
    },
    'UCYJdpnjuSWVOLgGT9fIzL0g': {
      ytChannelId: 'UCYJdpnjuSWVOLgGT9fIzL0g',
      name: `Jelle's Marble Runs`,
      published: 1542746295,
      videos: []
    },
    'UCAL3JXZSzSm8AlZyD3nQdBA': {
      ytChannelId: 'UCAL3JXZSzSm8AlZyD3nQdBA',
      name: 'Primitive Technology',
      published: 1430523346,
      videos: []
    },
    'UCudx6plmpbs5WtWvsvu-EdQ': {
      ytChannelId: 'UCudx6plmpbs5WtWvsvu-EdQ',
      name: 'Zeltik',
      published: 1422481967,
      videos: ['-h0h1CydP6o', '0d3FHa4YTsE']
    }
  },
  ids: ['UCOKHwx1VCdgnxwbjyb9Iu1g', 'UCYJdpnjuSWVOLgGT9fIzL0g', 'UCudx6plmpbs5WtWvsvu-EdQ', 'UCAL3JXZSzSm8AlZyD3nQdBA']
};

const videos = {
  byId: {
    '-h0h1CydP6o': {
      id: '-h0h1CydP6o',
      name: `The Mystery of Breath of the Wild's Forgotten Temple - Zelda Theory`,
      published: 1562711401,
      thumbnail: 'https://i2.ytimg.com/vi/-h0h1CydP6o/hqdefault.jpg',
      description: `What is Breath of the Wild's Forgotten Temple? ►Follow me on Twitter! http://www.twitter.com/Zeltik or Instagram: @zeltikinsta ► Music in this video: Nintendo ZREO Ruven Wegner, "Water Temple" ► Discord Link: https://discord.gg/zeltik ► Patreon: https://www.patreon.com/zeltik ► Intro music by: http://bit.ly/RuvenWegner Thank you to my amazing Patreon supporters: Andrew Lindberg, Scott Crim, Nick Goodman, Charley Sjerps, Torrey Easter, Malina Workman, Cameron Bryant, Kristian Skjellet, Liam Timoney, Tito Saenz, Joshua Bock, Lux Pro, desmond paul james o'neill, Tram Tran, Rusty Caufield, Frankie Nolan, Andrew D Wood, Alex Polanoc, Lina Derevyanko, Daniel Newton, Luke Voges, Triggerpigking, Bretton Weber #Zelda #BreathoftheWild #LegendofZelda`
    },
    '0d3FHa4YTsE': {
      id: '0d3FHa4YTsE',
      name: 'The DARK Truth about Malice - Breath of the Wild Sequel Theory (ft. NintendoBlackCrisis)',
      published: 1561921200,
      thumbnail: 'https://i1.ytimg.com/vi/0d3FHa4YTsE/hqdefault.jpg',
      description: `What IS Malice? ► PART TWO: https://www.youtube.com/watch?v=WYQzY9DmHlE ►Follow me on Twitter! http://www.twitter.com/Zeltik or Instagram: @zeltikinsta ► Music in this video: Nintendo ZREO Inner Devil, Siren of Chernobyl: https://soundcloud.com/the-inner-devil ► Discord Link: https://discord.gg/zeltik ► Patreon: https://www.patreon.com/zeltik ► Intro music by: http://bit.ly/RuvenWegner Thank you to my amazing Patreon supporters: Andrew Lindberg, Scott Crim, Nick Goodman, Charley Sjerps, Torrey Easter, Malina Workman, Cameron Bryant, Kristian Skjellet, Liam Timoney, Tito Saenz, Joshua Bock, Lux Pro, desmond paul james o'neill, Tram Tran, Rusty Caufield, Frankie Nolan, Andrew D Wood, Alex Polanoc, Lina Derevyanko, Daniel Newton, Luke Voges, Triggerpigking, Bretton Weber #Zelda #BreathoftheWild2 #LegendofZelda`
    }
  },
  ids: ['-h0h1CydP6o', '0d3FHa4YTsE']
}

let modalOpen = false;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels,
      videos,
      modalOpen
    };
    this.openChannelAdder = this.openChannelAdder.bind(this);
  }

  openChannelAdder() {
    this.setState({
      modalOpen: true
    });
  }

  render() {
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
          <Route path='/channels' render={renderProps => <Channels {...renderProps} openChannelAdder={this.openChannelAdder} />}/>
        </BrowserRouter>
        <Modal
            isOpen={this.state.modalOpen}
            onAfterOpen={() => console.log('On after opten')}
            onRequestClose={() => console.log('Closing modal')}
            style={{
              content : {
                top                   : '50%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-50%',
                transform             : 'translate(-50%, -50%)'
              }
            }}
            contentLabel="Add a Channel"
          ></Modal>
      </div>
    );
  }
}

function Index() {
  return (
    <div>
      <h2>Index page</h2>
      <p>Basic stats about numbers of videos and channels you've subscribed to</p>
    </div>
  );
}

function Channels(props) {
  return (
    <div>
      <Route path={`${props.match.path}/:id`} component={ChannelViewer} />
      <Route path={props.match.path} exact render={renderProps => <ChannelList {...renderProps} openChannelAdder={props.openChannelAdder} />} />
    </div>
    );
}

class ChannelList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.openChannelAdder();
  }

  render() {
    return (
      <div>
        <nav className='channels'>
          <div className='addChannelButton' onClick={this.handleClick}>+ Add Channel</div>
          <ul>
            {channels.ids.map(channelId =>
              <li key={channelId} className='channelInfoBox'>
                <NavLink to={`${this.props.match.url}/${channelId}`}>
                  <div className='channelName'>{channels.byId[channelId].name}</div>
                  <div className='channelPublished'>{moment.unix(channels.byId[channelId].published).format('LLL')}</div>
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    );
  }
}

function ChannelViewer({match}) {
  const channelId = match.params.id;
  const channel = channels.byId[channelId];
  return (
    <div>
      <h2>{channel.name}</h2>
      <h3>Video list</h3>
      {channel.videos.map(videoId => <Video key={videoId} videoId={videoId}/>)}
    </div>
  );
}

function Video({videoId}) {
  const video = videos.byId[videoId];
  return (
    <div>
      <p>{video.name}</p>
      <p className='videoPublished'>{moment.unix(video.published).format('LLL')}</p>
      <iframe
        id={`ytplayer-${videoId}`}
        type='text/html'
        width='320'
        height='180'
        title={video.name}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://localhost`}
        frameBorder='0'></iframe>
    </div>
  );
}

export default App;
