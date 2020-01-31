package com.poll.dto.coordinates;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@NoArgsConstructor(access = AccessLevel.PRIVATE, force = true)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Getter
public final class CoordinatesRequestDto {

    @NotNull
    @NotEmpty
    private final String economy;

    @NotNull
    @NotEmpty
    private final String social;

    private final Long userId;

    public static CoordinatesRequestDto of(final String economy, final String social, final Long userId) {
        return new CoordinatesRequestDto(economy, social, userId);
    }
}
