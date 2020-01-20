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
public class QuestionnaireCreateRequestDto {

    @NotNull
    @NotEmpty
    private final String name;

    @NotNull
    @NotEmpty
    private final String description;

    @NotNull
    @NotEmpty
    private final Long userId;

    public static QuestionnaireCreateRequestDto of(final String name, final String description, final Long userId) {
        return new QuestionnaireCreateRequestDto(name, description, userId);
    }
}
