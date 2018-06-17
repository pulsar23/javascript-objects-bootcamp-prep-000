var playlist = {artist_name:"song title"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[key] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist;
}