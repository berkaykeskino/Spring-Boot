package com.example.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.SongDto;
import com.example.demo.service.ISongService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/song")
@RequiredArgsConstructor
public class SongController {
    
    private final ISongService _ISongService;

    @PostMapping("/create")
    public ResponseEntity<SongDto> createSong(@RequestBody SongDto songDto){
        SongDto savedSongDto = _ISongService.createSong(songDto);
        return new ResponseEntity<>(savedSongDto, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<SongDto>> getAllSongs() {
        List<SongDto> songs = _ISongService.getAllSongs();
        return new ResponseEntity<>(songs, HttpStatus.OK);
    }

    @GetMapping("/{songId}")
    public ResponseEntity<SongDto> getSongById(@PathVariable("songId") Long songId) {
        SongDto song = _ISongService.getSongById(songId);
        return new ResponseEntity<>(song, HttpStatus.OK);
    }

}
