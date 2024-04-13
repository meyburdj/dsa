interface Song {
    title: string;
    artist: string;
    duration: number;
}

class Playlist {
    private songs: Song[]
    private currentSongIndex: number;

    constructor() {
        this.songs = [];
        this.currentSongIndex = 0
    }

    addSong(song: Song): void {
        this.songs.push(song)
    }

    removeSong(title: string): void {
        this.songs = this.songs.filter(song => song.title !== title)
    }

    getCurrentSong(): Song {
        return this.songs[this.currentSongIndex]
    }

    nextSong(): void {
        if (this.currentSongIndex < this.songs.length - 1) {
            this.currentSongIndex++
        } else {
            this.currentSongIndex = 0
        }
    }

}