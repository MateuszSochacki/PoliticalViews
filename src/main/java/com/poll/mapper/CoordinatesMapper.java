package com.poll.mapper;

import com.poll.dto.coordinates.CoordinatesRequestDto;
import com.poll.model.CoordinatesEntity;
import com.poll.model.UserEntity;

import java.util.Collections;

public final class CoordinatesMapper {

    @SuppressWarnings("unchecked")
    public static CoordinatesEntity fromDto(CoordinatesRequestDto dto, UserEntity user) {
        return new CoordinatesEntity(
                Double.valueOf(dto.getEconomy()),
                Double.valueOf(dto.getSocial()),
                user,
                Collections.EMPTY_SET);
    }
}
