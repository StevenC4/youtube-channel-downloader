import React, { Component } from 'react';
import 'style/App.scss';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import Homepage from 'components/Homepage';
import ChannelDownloader from 'components/Channel/ChannelDownloader';
import Channels from 'components/Channel/Channels';
import Playlists from 'components/Playlist/Playlists';

Modal.setAppElement('#root')

const channels = {
  byId: {
    'UCOKHwx1VCdgnxwbjyb9Iu1g': {
      ytChannelId: 'UCOKHwx1VCdgnxwbjyb9Iu1g',
      name: 'Blender Guru',
      published: 1260360402,
      playlistIds: []
    },
    'UCYJdpnjuSWVOLgGT9fIzL0g': {
      ytChannelId: 'UCYJdpnjuSWVOLgGT9fIzL0g',
      name: `Jelle's Marble Runs`,
      published: 1542746295,
      playlistIds: []
    },
    'UCAL3JXZSzSm8AlZyD3nQdBA': {
      ytChannelId: 'UCAL3JXZSzSm8AlZyD3nQdBA',
      name: 'Primitive Technology',
      published: 1430523346,
      playlistIds: []
    },
    'UCudx6plmpbs5WtWvsvu-EdQ': {
      ytChannelId: 'UCudx6plmpbs5WtWvsvu-EdQ',
      name: 'Zeltik',
      published: 1422481967,
      playlistIds: [
        'PLKb_pMSfR7rULeeQwbxrmMZyocJLhTcTI',
        'PLKb_pMSfR7rXPdopB-pvX1hFXUB-zsX9k',
        'PLKb_pMSfR7rX9Fy2Nh5dRWWRcRqfWn5QH',
        'PLKb_pMSfR7rWvmcmhEUvV841U_yM7I3Sp',
        'PLKb_pMSfR7rXbXQGinFS3JMt_JnQTOlWw',
        'PLKb_pMSfR7rVB2MoOd4F3uHrtXuYPSsV4'
      ]
    }
  },
  ids: ['UCOKHwx1VCdgnxwbjyb9Iu1g', 'UCYJdpnjuSWVOLgGT9fIzL0g', 'UCudx6plmpbs5WtWvsvu-EdQ', 'UCAL3JXZSzSm8AlZyD3nQdBA']
};

const playlists = {
  byId: {
    'PLKb_pMSfR7rULeeQwbxrmMZyocJLhTcTI': {
      ytPlaylistId: 'PLKb_pMSfR7rULeeQwbxrmMZyocJLhTcTI',
      published: '2019-02-25T03:26:33.000Z',
      ytChannelId: 'UCudx6plmpbs5WtWvsvu-EdQ',
      title: 'Zelda Tier Lists',
      description: 'My various Zelda Tier lists!',
      videoIds: [
        '0kM4IB7swnA',
        'Fw-ugyUqfPk',
        'Ia0mBZaVoSg'
      ]
    },
    'PLKb_pMSfR7rXPdopB-pvX1hFXUB-zsX9k': {
      ytPlaylistId: 'PLKb_pMSfR7rXPdopB-pvX1hFXUB-zsX9k',
      published: '2019-02-25T03:26:33.000Z',
      ytChannelId: 'UCudx6plmpbs5WtWvsvu-EdQ',
      title: 'Links to the Past',
      description: 'A cinematic series telling stories from the Legend of Zelda series.',
      videoIds: [
        'JXBdQ_X6kPg',
        'gjy8p-Rc-6k',
        'zrpFUBffsDU',
        'shEJn9GWNpk'
       ]
    },
    'PLKb_pMSfR7rX9Fy2Nh5dRWWRcRqfWn5QH': {
      ytPlaylistId: 'PLKb_pMSfR7rX9Fy2Nh5dRWWRcRqfWn5QH',
      published: '2019-02-25T03:26:33.000Z',
      ytChannelId: 'UCudx6plmpbs5WtWvsvu-EdQ',
      title: 'Top 5s',
      description: 'My Countdown Videos!',
      videoIds: [
        'FvWK840uzV0',
        '1kdXcBUsQV8',
        '2Ae1FuweYcc',
        'NVxIimxOUE0',
        'MwyrpWfSRoc'
       ]
    },
    'PLKb_pMSfR7rWvmcmhEUvV841U_yM7I3Sp': {
      ytPlaylistId: 'PLKb_pMSfR7rWvmcmhEUvV841U_yM7I3Sp',
      published: '2019-02-25T03:26:33.000Z',
      ytChannelId: 'UCudx6plmpbs5WtWvsvu-EdQ',
      title: 'Hyrule Highlights',
      description: 'A series of episodes each covering a cool detail, glitch, Easter egg, theory or anything else from a Zelda game!',
      videoIds: [
        'KD0DvRupJLw',
        'V355yU_xWxA',
        'jswEi3bdgqQ',
        'kVXW8vmPYPE',
        'Q3O7wA5jW6c'
       ]
    },
    'PLKb_pMSfR7rXbXQGinFS3JMt_JnQTOlWw': {
      ytPlaylistId: 'PLKb_pMSfR7rXbXQGinFS3JMt_JnQTOlWw',
      published: '2019-02-25T03:26:33.000Z',
      ytChannelId: 'UCudx6plmpbs5WtWvsvu-EdQ',
      title: 'Reviews',
      description: 'My game reviews!',
      videoIds: [
        '4Ul1dme6f0A',
        'nT1NjeBsZHs',
        'nABNYwsDEqw',
        'dx5wF66YwX8'
       ]
    },
    'PLKb_pMSfR7rVB2MoOd4F3uHrtXuYPSsV4': {
      ytPlaylistId: 'PLKb_pMSfR7rVB2MoOd4F3uHrtXuYPSsV4',
      published: '2019-02-25T03:26:33.000Z',
      ytChannelId: 'UCudx6plmpbs5WtWvsvu-EdQ',
      title: 'Zelda: Breath of the Wild',
      description: 'All my videos covering the upcoming 2017 Zelda game, Breath of the Wild!',
      videoIds: [
        '0kM4IB7swnA',
        'jUoDe7MhLBA',
        '72phpntWYlU',
        'toC9UqVnz8g',
        '-h0h1CydP6o'
       ]
    },
  },
  ids: [
    'PLKb_pMSfR7rULeeQwbxrmMZyocJLhTcTI',
    'PLKb_pMSfR7rXPdopB-pvX1hFXUB-zsX9k',
    'PLKb_pMSfR7rX9Fy2Nh5dRWWRcRqfWn5QH',
    'PLKb_pMSfR7rWvmcmhEUvV841U_yM7I3Sp',
    'PLKb_pMSfR7rXbXQGinFS3JMt_JnQTOlWw',
    'PLKb_pMSfR7rVB2MoOd4F3uHrtXuYPSsV4'
  ]
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

const eldarChannelId = 'UCFRZRx9ykfwFsVh6LF-kJ6A';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels,
      playlists,
      videos,
      modal: {
        open: modalOpen,
        contentLabel: '',
      }
    };
    this.handleModalRequestClose = this.handleModalRequestClose.bind(this);
    this.setModalOpenState = this.setModalOpenState.bind(this);
  }

  setModalOpenState(open, contentLabel) {
    this.setState({
      modal: {
        open,
        contentLabel
      }
    });
  }

  handleModalRequestClose() {
    this.setModalOpenState(false, '');
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
                <li>
                  <NavLink to='/playlists' activeClassName='activeLink'>Playlists</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <Route path='/' exact component={Homepage} />
          <Route path='/channels' render={renderProps =>
            <Channels
              {...renderProps}
              channels={this.state.channels}
              playlists={this.state.playlists}
              videos={this.state.videos}
              setModalOpenState={this.setModalOpenState}
            />
          } />
          <Route path='/playlists' render={renderProps =>
            <Playlists
              {...renderProps}
              channels={this.state.channels}
              playlists={this.state.playlists}
              videos={this.state.videos}
              setModalOpenState={this.setModalOpenState}
            />
          } />
        </BrowserRouter>
        <Modal
          isOpen={this.state.modal.open}
          onRequestClose={this.handleModalRequestClose}
          contentLabel={this.state.modal.contentLabel}
          style={{
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              padding: 0
            }
          }}
        >
          <ChannelDownloader channels={this.state.channels} />
        </Modal>
      </div>
    );
  }
}

export default App;
