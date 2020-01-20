package com.poll.mapper;

import com.poll.dto.coordinates.CoordinatesCreateRequestDto;
import com.poll.model.CoordinatesEntity;

import java.util.Collection;
import java.util.Collections;

public class CoordinatesMapper {

    @SuppressWarnings("unchecked")
    public static CoordinatesEntity fromDto(CoordinatesCreateRequestDto dto) {
        return new CoordinatesEntity(
                Double.valueOf(dto.getEconomy()),
                Double.valueOf(dto.getSocial()),
                null,
                Collections.EMPTY_SET);
    }
}
