package com.poll.dto.questionnaire;

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
public final class QuestionnairesResponseDto {

    @NotNull
    @Valid
    private final List<QuestionnaireResponseDto> questionnaires;

    public static QuestionnairesResponseDto of(
            final List<QuestionnaireResponseDto> questionnaires) {
        return new QuestionnairesResponseDto(questionnaires);
    }
}
