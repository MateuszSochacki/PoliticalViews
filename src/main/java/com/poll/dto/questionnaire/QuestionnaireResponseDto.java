package com.poll.dto.questionnaire;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@NoArgsConstructor(access = AccessLevel.PRIVATE, force = true)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Getter
public class QuestionnaireResponseDto {

    @NotNull
    private final Long questionnaireId;

    @NotNull
    @NotEmpty
    private final String name;

    @NotNull
    @NotEmpty
    private final String description;

    public static QuestionnaireResponseDto of(
            final Long questionnaireId,
            final String name,
            final String description) {
        return new QuestionnaireResponseDto(questionnaireId, name, description);
    }
}
