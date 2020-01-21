package com.poll.dto.questionnaire;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.List;

@NoArgsConstructor(access = AccessLevel.PRIVATE, force = true)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Getter
public final class QuestionCreateRequestDto {

    @NotNull
    @NotEmpty
    private final String name;

    @NotNull
    @NotEmpty
    private final Integer number;

    @NotNull
    @Valid
    private final List<AnswerCreateRequestDto> answers;

    public static QuestionCreateRequestDto of(
            final String name,
            final Integer number,
            final List<AnswerCreateRequestDto> answers) {
        return new QuestionCreateRequestDto(name, number, answers);
    }
}
