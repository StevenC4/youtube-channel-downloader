import React from 'react';
import { Route } from 'react-router-dom';
import ChannelList from 'components/Channel/ChannelList';
import ChannelViewer from 'components/Channel/ChannelViewer';
import Playlists from '../Playlist/Playlists';

const Channels = props => {
  
  return (
    <div>
      <Route path={`${props.match.path}/:channelId`} exact render={
        renderProps =>
          <ChannelViewer
            {...renderProps}
            channel={props.channels.byId[renderProps.match.params.channelId]}
            playlists={props.playlists}
            videos={props.videos}
          />
      }
      />
      <Route path={`${props.match.path}/:channelId/playlists`} render={
        renderProps =>
          <Playlists
            {...renderProps}
            channel={props.channels.byId[renderProps.match.params.playlistId]}
            playlists={props.playlists}
            videos={props.videos}
          />
      }
      />
      <Route path={props.match.path} exact render={
        renderProps =>
          <ChannelList
            {...renderProps}
            {...props}
          />
      }
      />
    </div>
  );
};

export default Channels;
