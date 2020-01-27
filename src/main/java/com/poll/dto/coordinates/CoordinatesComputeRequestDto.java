package com.poll.dto.coordinates;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

@NoArgsConstructor(access = AccessLevel.PRIVATE, force = true)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Getter
public class CoordinatesComputeRequestDto {

    @NotNull
    @Valid
    List<String> answerValues;

    public static CoordinatesComputeRequestDto of(final List<String> answerValues) {
        return new CoordinatesComputeRequestDto(answerValues);
    }
}
