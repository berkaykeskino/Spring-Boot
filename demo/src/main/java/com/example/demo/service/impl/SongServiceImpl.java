package com.example.demo.service.impl;

import org.springframework.stereotype.Service;

import com.example.demo.dto.SongDto;
import com.example.demo.entity.Song;
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
        System.out.println(songDto.toString()+" AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        System.out.println(songDto.get_lyrics()+" "+songDto.get_publishDate());
        Song song = SongMapper.mapToSong(songDto);
        Song savedSong = _songRepository.save(song);

        return SongMapper.mapToSongDto(savedSong);
    }
}
