package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.SongDto;

public interface ISongService {
    SongDto createSong(SongDto songDto);
    List<SongDto> getAllSongs();
    SongDto getSongById(Long songId);
}
