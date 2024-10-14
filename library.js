const library = {
       tracks: { 
         t01: { id: "t01", name: "Code Monkey", artist: "Jonathan Coulton", album: "Thing a Week Three" },
         t02: { id: "t02", name: "Model View Controller", artist: "James Dempsey", album: "WWDC 2003" },
         t03: { id: "t03", name: "Four Thirty-Three", artist: "John Cage", album: "Woodstock 1952" }
       },
       playlists: { 
         p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
         p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] }
       }
     };
     
     /////////////////////////////
     // FUNCTIONS TO IMPLEMENT:
     /////////////////////////////
     
     // prints a list of all playlists, in the form:
     // p01: Coding Music - 2 tracks
     // p02: Other Playlist - 1 tracks
     const printPlaylists = function() {
       for (const playlistId in library.playlists) {
         const playlist = library.playlists[playlistId];
         console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
       }
     };
     
     // prints a list of all tracks, using the following format:
     // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
     // t02: Model View Controller by James Dempsey (WWDC 2003)
     // t03: Four Thirty-Three by John Cage (Woodstock 1952)
     const printTracks = function() {
       for (const trackId in library.tracks) {
         const track = library.tracks[trackId];
         console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
       }
     };
     
     // prints a list of tracks for a given playlist, using the following format:
     // p01: Coding Music - 2 tracks
     // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
     // t02: Model View Controller by James Dempsey (WWDC 2003)
     const printPlaylist = function(playlistId) {
       const playlist = library.playlists[playlistId];
       console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
     
       for (const trackId of playlist.tracks) {
         const track = library.tracks[trackId];
         console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
       }
     };
     
     // adds an existing track to an existing playlist
     const addTrackToPlaylist = function(trackId, playlistId) {
       const playlist = library.playlists[playlistId];
       playlist.tracks.push(trackId);
     };
     
     // generates a unique id
     const generateUid = function() {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
     };
     
     // adds a track to the library
     const addTrack = function(name, artist, album) {
       const newId = generateUid();
       library.tracks[newId] = { id: newId, name, artist, album };
     };
     
     // adds a playlist to the library
     const addPlaylist = function(name) {
       const newId = generateUid();
       library.playlists[newId] = { id: newId, name, tracks: [] };
     };
     
     // STRETCH: prints a list of tracks matching the query (case insensitive)
     const printSearchResults = function(query) {
       const lowerQuery = query.toLowerCase();
     
       for (const trackId in library.tracks) {
         const track = library.tracks[trackId];
         if (
           track.name.toLowerCase().includes(lowerQuery) ||
           track.artist.toLowerCase().includes(lowerQuery) ||
           track.album.toLowerCase().includes(lowerQuery)
         ) {
           console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
         }
       }
     };
     
     /////////////////////////////
     // TEST THE FUNCTIONS:
     /////////////////////////////
     
     printPlaylists();
     console.log('------------------');
     printTracks();
     console.log('------------------');
     printPlaylist('p01');
     console.log('------------------');
     addTrackToPlaylist('t03', 'p01');
     printPlaylist('p01');
     console.log('------------------');
     addTrack('New Song', 'New Artist', 'New Album');
     printTracks();
     console.log('------------------');
     addPlaylist('My Playlist');
     printPlaylists();
     console.log('------------------');
     printSearchResults('code');
     