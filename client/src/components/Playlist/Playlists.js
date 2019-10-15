import React from 'react';
import { Route } from 'react-router-dom';
import PlaylistList from 'components/Playlist/PlaylistList';
import PlaylistViewer from 'components/Playlist/PlaylistViewer';

const Playlists = props => {
  return (
    <div>
      <Route path={`${props.match.path}/:playlistId`} render={
        renderProps =>
          <PlaylistViewer
            {...renderProps}
            playlist={props.playlists.byId[renderProps.match.params.playlistId]}
            videos={props.videos}
          />
      }
      />
      <Route path={props.match.path} exact render={
        renderProps =>
          <PlaylistList
            {...renderProps}
            {...props}
          />
      }
      />
    </div>
  );
};

export default Playlists;
