package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SongDto {
    private long _songId;
    private String _publishDate;
    private String _lyrics;
    private long _userId;
    private String _userFirstName;
    private String _userLastName;
}
