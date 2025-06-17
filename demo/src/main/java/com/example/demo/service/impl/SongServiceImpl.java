package com.example.demo.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.dto.SongDto;
import com.example.demo.entity.Song;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.mapper.SongMapper;
import com.example.demo.repository.SongRepository;
import com.example.demo.service.ISongService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class SongServiceImpl implements ISongService{

    private SongRepository _songRepository;

    @Override
    public SongDto createSong(SongDto songDto){
        Song song = SongMapper.mapToSong(songDto);
        Song savedSong = _songRepository.save(song);

        return SongMapper.mapToSongDto(savedSong);
    }

    @Override
    public List<SongDto> getAllSongs(){
        List<Song> songs = _songRepository.findAll();
        
        return songs.stream()
                .map(song -> SongMapper.mapToSongDto(song))
                .toList();
    }

    public SongDto getSongById(Long songId){
        Song song = _songRepository.findById(songId).
                                    orElseThrow(
                                        () -> new ResourceNotFoundException("Song not found with ID: " + songId)
                                    );

        return SongMapper.mapToSongDto(song);
    }
}
