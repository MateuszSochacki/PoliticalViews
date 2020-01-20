package com.poll.dto.questionnaire;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@NoArgsConstructor(access = AccessLevel.PRIVATE, force = true)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Getter
public class AnswerCreateRequestDto {

    @NotNull
    @NotEmpty
    private final String contents;

    @NotNull
    private final BigDecimal economy;

    @NotNull
    private final BigDecimal social;

    public static AnswerCreateRequestDto of(final String contents, final BigDecimal economy, final BigDecimal social) {
        return new AnswerCreateRequestDto(contents, economy, social);
    }
}
