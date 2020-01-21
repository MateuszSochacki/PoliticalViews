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
public final class QuestionResponseRequestDto {

    @NotNull
    private final Long questionId;

    @NotNull
    @NotEmpty
    private final String name;

    @NotNull
    @NotEmpty
    private final Integer number;

    @NotNull
    @Valid
    private final List<AnswerResponseRequestDto> answers;

    public static QuestionResponseRequestDto of(
            final Long questionId,
            final String name,
            final Integer number,
            final List<AnswerResponseRequestDto> answers) {
        return new QuestionResponseRequestDto(questionId, name, number, answers);
    }
}
