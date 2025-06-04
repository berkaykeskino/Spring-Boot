package com.example.demo.mapper;

import com.example.demo.dto.UserDto;
import com.example.demo.entity.User;

public class UserMapper {
    public static User mapToUser(UserDto userDto){
        return new User(
            userDto.getId(),
            userDto.get_firstName(),
            userDto.get_lastName(),
            userDto.get_email(),
            userDto.get_password()
        );
    }

    public static UserDto mapToUserDto(User user) {
        return new UserDto(
                user.getId(),
                user.get_firstName(),
                user.get_lastName(),
                user.get_email(),
                user.get_password());
    }
}
