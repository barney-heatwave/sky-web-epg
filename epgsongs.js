const playlist = [{
    name: 'earlyMorning',
    times: [2, 3, 4, 5, 6],
    songs: ["audio/early_morning/1998_trk04.mp3", "audio/early_morning/adagio.mp3", "audio/early_morning/all_obsessed.mp3", "audio/early_morning/no_saints.mp3", "audio/early_morning/swingin_partay.mp3"]
},
{
    name: 'morning',
    times: [7, 8, 9, 10, 11],
    songs: ["audio/morning/1998_trk04.mp3", "audio/morning/cool_groovings.mp3", "audio/morning/game_on.mp3", "audio/morning/half_pipe.mp3", "audio/morning/hope.mp3", "audio/morning/internationale!.mp3", "audio/morning/move_it.mp3", "audio/morning/muted.mp3", "audio/morning/no_saints.mp3", "audio/morning/swingin_partay.mp3"]
},
{
    name: 'primetime',
    times: [19, 20, 21, 22],
    songs: ["audio/primetime/1998_trk04.mp3", "audio/primetime/apocalypse(remix).mp3", "audio/primetime/bondicular(remix).mp3", "audio/primetime/choir_of_impending_breakbeat.mp3", "audio/primetime/cine2000.mp3", "audio/primetime/kompressor(remix).mp3", "audio/primetime/no_saints.mp3", "audio/primetime/orchestral_hardcore(remix).mp3", "audio/primetime/orchestral_hardcore.mp3", "audio/primetime/quest.mp3", "audio/primetime/swingin_partay.mp3", "audio/primetime/the_trap.mp3"]
},
{
    name: 'daytime',
    times: [12, 13, 14, 15, 16, 17, 18, 19],
    songs: ["audio/daytime/1998_trk04.mp3", "audio/daytime/2009_trk7.mp3", "audio/daytime/4mp3", "audio/daytime/connected.mp3", "audio/daytime/funkerama.mp3", "audio/daytime/gritty_groove.mp3", "audio/daytime/internationale!(remix)", "audio/daytime/no_saints.mp3", "audio/daytime/smooth_strings_trip.mp3", "audio/daytime/sunset.mp3", "audio/daytime/swingin_partay.mp3"]
},
{
    name: 'nightclub',
    times: [23, 0, 1, 2],
    songs: ["audio/nightclub/adagio.mp3", "audio/nightclub/apocalypse.mp3", "audio/nightclub/dance_9.mp3", "audio/nightclub/internationale!.mp3", "audio/nightclub/nu-soul_village(remix).mp3", "audio/nightclub/obsessive.mp3", "audio/nightclub/universe.mp3"]
}
]

let nowPlaying = null;
// const player = document.getElementById("player"); // Get Audio Element
// player.autoplay = true;
// player.addEventListener("ended", selectRandom); // Run function when song ends

function selectRandom() {
    // destructure object because all we want is the song array
    const { songs } = playlist.find(list => list.times.includes(new Date().getHours()));
    // remove the currently playing song, or nothing if null
    const filteredSongs = songs.filter(song => song != nowPlaying);
    // pick a random song out of the remaining songs
    const selection = filteredSongs[Math.floor(Math.random() * filteredSongs.length)]
    lastSong = selection; // Remember last song
    player.src = selection; // Tell HTML the location of the new Song
    console.log(`Now playing ${selection}`);
}

selectRandom(); // Select initial song
//player.play(); // Start Song