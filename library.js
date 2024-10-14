const library = {
       tracks: {
         t01: {
           id: "t01",
           name: "Code Monkey",
           artist: "Jonathan Coulton",
           album: "Thing a Week Three",
         },
         t02: {
           id: "t02",
           name: "Model View Controller",
           artist: "James Dempsey",
           album: "WWDC 2003",
         },
         t03: {
           id: "t03",
           name: "Four Thirty-Three",
           artist: "John Cage",
           album: "Woodstock 1952",
         },
       },
       playlists: {
         p01: {
           id: "p01",
           name: "Coding Music",
           tracks: ["t01", "t02"],
         },
         p02: {
           id: "p02",
           name: "Other Playlist",
           tracks: ["t03"],
         },
       },
     
       // Method to print all playlists
       printPlaylists: function () {
         for (const playlist in this.playlists) {
           const { name, tracks } = this.playlists[playlist];
           console.log(`${playlist}: ${name} - ${tracks.length} tracks`);
         }
       },
     
       // Method to print all tracks
       printTracks: function () {
         for (const track in this.tracks) {
           const { name, artist, album } = this.tracks[track];
           console.log(`${track}: ${name} by ${artist} (${album})`);
         }
       },
     
       // Method to print a specific playlist
       printPlaylist: function (playlistId) {
         const playlist = this.playlists[playlistId];
         if (playlist) {
           console.log(`${playlistId}: ${playlist.name} - ${playlist.tracks.length} tracks`);
           for (const trackId of playlist.tracks) {
             const track = this.tracks[trackId];
             console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
           }
         } else {
           console.log('Playlist not found.');
         }
       },
     
       // Method to add an existing track to an existing playlist
       addTrackToPlaylist: function (trackId, playlistId) {
         const playlist = this.playlists[playlistId];
         if (playlist && this.tracks[trackId]) {
           playlist.tracks.push(trackId);
           console.log(`Added track ${trackId} to playlist ${playlistId}.`);
         } else {
           console.log('Invalid track or playlist ID.');
         }
       },
     
       // Method to generate a unique ID
       generateUid: function () {
         return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
       },
     
       // Method to add a track to the library
       addTrack: function (name, artist, album) {
         const id = this.generateUid();
         this.tracks[id] = { id, name, artist, album };
         console.log(`Added track: ${name} by ${artist} (${album}).`);
       },
     
       // Method to add a playlist to the library
       addPlaylist: function (name) {
         const id = this.generateUid();
         this.playlists[id] = { id, name, tracks: [] };
         console.log(`Added playlist: ${name}.`);
       },
     
       // STRETCH: Method to print search results based on a query
       printSearchResults: function (query) {
         const lowerQuery = query.toLowerCase();
         for (const track in this.tracks) {
           const { name, artist, album } = this.tracks[track];
           if (
             name.toLowerCase().includes(lowerQuery) ||
             artist.toLowerCase().includes(lowerQuery) ||
             album.toLowerCase().includes(lowerQuery)
           ) {
             console.log(`${track}: ${name} by ${artist} (${album})`);
           }
         }
       },
     };
     
     // Example usage
     library.printPlaylists();
     library.printTracks();
     library.printPlaylist('p01');
     library.addTrackToPlaylist('t03', 'p01');
     library.addTrack('New Track', 'New Artist', 'New Album');
     library.addPlaylist('My Playlist');
     library.printSearchResults('code');
     