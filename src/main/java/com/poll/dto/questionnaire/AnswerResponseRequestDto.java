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
public final class AnswerResponseRequestDto {

    @NotNull
    private final Long answerId;

    @NotNull
    @NotEmpty
    private final String contents;

    @NotNull
    private final BigDecimal economy;

    @NotNull
    private final BigDecimal social;

    public static AnswerResponseRequestDto of(
            final Long answerId,
            final String contents,
            final BigDecimal economy,
            final BigDecimal social) {
        return new AnswerResponseRequestDto(answerId, contents, economy, social);
    }
}
