package com.poll.mapper;

import com.poll.dto.coordinates.CoordinatesRequestDto;
import com.poll.model.CoordinatesEntity;

import java.util.Collections;

public final class CoordinatesMapper {

    @SuppressWarnings("unchecked")
    public static CoordinatesEntity fromDto(CoordinatesRequestDto dto) {
        return new CoordinatesEntity(
                Double.valueOf(dto.getEconomy()),
                Double.valueOf(dto.getSocial()),
                null,
                Collections.EMPTY_SET);
    }
}
