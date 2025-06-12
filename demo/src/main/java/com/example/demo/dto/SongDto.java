package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import com.example.demo.entity.User;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SongDto {
    private long _songId;
    private String _publishDate;
    private String _lyrics;
    private User _user;
}
