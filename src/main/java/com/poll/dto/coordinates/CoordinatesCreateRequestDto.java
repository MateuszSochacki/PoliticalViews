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
public final class CoordinatesCreateRequestDto {

    @NotNull
    @NotEmpty
    private final String economy;

    @NotNull
    @NotEmpty
    private final String social;

    public static CoordinatesCreateRequestDto of(final String economy, final String social) {
        return new CoordinatesCreateRequestDto(economy, social);
    }
}
