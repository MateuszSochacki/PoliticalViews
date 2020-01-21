package com.poll.mapper;

import com.poll.dto.user.UserCreateRequestDto;
import com.poll.model.UserEntity;

import java.util.Collections;

public final class UserMapper {

    @SuppressWarnings("unchecked")
    public static UserEntity fromDto(UserCreateRequestDto dto) {
        return new UserEntity(
                dto.getUserName(),
                dto.getPassword(),
                Collections.EMPTY_SET,
                Collections.EMPTY_SET,
                Collections.EMPTY_SET,
                Collections.EMPTY_SET,
                Collections.EMPTY_SET);
    }
}
