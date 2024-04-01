// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
    { title: "Billie Jean", artist: "Michael Jackson", genre: "Pop" },
    { title: "Another One Bites The Dust", artist: "Queen", genre: "Rock" },
    { title: "Thriller", artist: "Michael Jackson", genre: "Pop" },
    { title: "Ego", artist: "Beyonce", genre: "Pop" },
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Pop",
    "Groot": "Rock"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    for (const guardian in guardians) {
        const playlist = songs
            .filter(song => song.genre === guardians[guardian])
            .map(song => `${song.title} by ${song.artist}`); // Changed hyphen to "by"
        displayPlaylist(guardian, playlist);
    }
}

// Function to dynamically create and append playlist elements to the HTML
function displayPlaylist(guardian, playlist) {
    const playlistsDiv = document.getElementById('playlists');
    const guardianPlaylistDiv = document.createElement('div');
    guardianPlaylistDiv.classList.add('playlist');
    const guardianNameHeading = document.createElement('h2');
    guardianNameHeading.textContent = guardian;
    const playlistUl = document.createElement('ul');
    playlist.forEach(song => {
        const songLi = document.createElement('li');
        const songTitleSpan = document.createElement('span');
        const songArtistSpan = document.createElement('span');
        const songInfo = song.split(" by ");
        songTitleSpan.textContent = songInfo[0];
        songArtistSpan.textContent = songInfo[1];
        songTitleSpan.classList.add('song-title'); // Apply CSS class to song title span
        songLi.appendChild(songTitleSpan);
        songLi.appendChild(document.createTextNode(' by ')); // Add "by" text node
        songLi.appendChild(songArtistSpan);
        playlistUl.appendChild(songLi);
    });
    guardianPlaylistDiv.appendChild(guardianNameHeading);
    guardianPlaylistDiv.appendChild(playlistUl);
    playlistsDiv.appendChild(guardianPlaylistDiv);

    // Remove bullet points
    playlistUl.style.listStyleType = 'none';
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
