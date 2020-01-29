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
public final class QuestionnaireAggregateResponseDto {

    @NotNull
    private final Long questionnaireId;

    @NotNull
    @NotEmpty
    private final String name;

    @NotNull
    @NotEmpty
    private final String description;

    @NotNull
    @Valid
    private final List<QuestionResponseRequestDto> questions;

    public static QuestionnaireAggregateResponseDto of(
            final Long questionnaireId,
            final String name,
            final String description,
            final List<QuestionResponseRequestDto> questions) {
        return new QuestionnaireAggregateResponseDto(questionnaireId, name, description, questions);
    }
}
