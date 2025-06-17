package com.example.demo.mapper;

import com.example.demo.dto.SongDto;
import com.example.demo.entity.Song;

public class SongMapper {
    public static Song mapToSong(SongDto songDto){
        return new Song(
            songDto.get_songId(),
            songDto.get_publishDate(),
            songDto.get_lyrics(),
            songDto.get_userId()
        );
    }

    public static SongDto mapToSongDto(Song song){
        return new SongDto(
                song.get_songId(),
                song.get_publishDate(),
                song.get_lyrics(),
                song.get_userId()
        );
    }
}
