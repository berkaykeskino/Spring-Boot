package com.example.demo.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.dto.SongDto;
import com.example.demo.entity.Song;
import com.example.demo.entity.User;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.mapper.SongMapper;
import com.example.demo.repository.SongRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.ISongService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class SongServiceImpl implements ISongService{

    private SongRepository _songRepository;
    private UserRepository _userRepository;

    @Override
    public SongDto createSong(SongDto songDto){
        Song song = SongMapper.mapToSong(songDto);
        User user = _userRepository.findById(songDto.get_userId()).orElseThrow(
                () -> new ResourceNotFoundException("User not found for attempted song creation"));

        Song savedSong = _songRepository.save(song);
        return SongMapper.mapToSongDto(savedSong, user);
    }

    @Override
    public List<SongDto> getAllSongs() {
        List<Song> songs = _songRepository.findAll();

        return songs.stream()
                .map(song -> {
                    User user = _userRepository.findById(song.get_userId())
                            .orElseThrow(() -> new ResourceNotFoundException(
                                    "User not found for song ID: " + song.get_songId()));
                    return SongMapper.mapToSongDto(song, user);
                })
                .toList();
    }

    public SongDto getSongById(Long songId){
        Song song = _songRepository.findById(songId).
                                    orElseThrow(
                                        () -> new ResourceNotFoundException("Song not found with ID: " + songId)
                                    );
        User user = _userRepository.findById(song.get_userId()).orElseThrow(
                () -> new ResourceNotFoundException("User not found for attempted song creation"));

        return SongMapper.mapToSongDto(song, user);
    }
}
