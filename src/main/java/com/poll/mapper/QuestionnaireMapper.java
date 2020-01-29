package com.poll.mapper;

import com.poll.dto.questionnaire.*;
import com.poll.model.AnswerEntity;
import com.poll.model.QuestionEntity;
import com.poll.model.QuestionnaireEntity;
import com.poll.model.UserEntity;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public final class QuestionnaireMapper {

    public static QuestionnaireEntity fromDto(QuestionnaireCreateRequestDto dto, UserEntity userEntity) {
        return new QuestionnaireEntity(
                dto.getName(),
                dto.getDescription(),
                dto.getQuestions()
                        .stream()
                        .map(question -> new QuestionEntity(
                                question.getName(),
                                question.getNumber(),
                                question.getAnswers()
                                        .stream()
                                        .map(answer -> new AnswerEntity(
                                                answer.getContents(),
                                                answer.getEconomy().intValueExact(),
                                                answer.getSocial().intValueExact()
                                        ))
                                        .collect(Collectors.toList())
                        ))
                        .collect(Collectors.toList()),
                userEntity);
    }

    public static QuestionnaireAggregateResponseDto toDto(QuestionnaireEntity entity) {
        return QuestionnaireAggregateResponseDto.of(
                entity.getIdQuestionnaire(),
                entity.getName(),
                entity.getDescription(),
                entity.getQuestions()
                        .stream()
                        .map(qe -> QuestionResponseRequestDto.of(
                                qe.getIdQuestion(),
                                qe.getContents(),
                                qe.getNumber(),
                                qe.getAnswers()
                                        .stream()
                                        .map(ae -> AnswerResponseRequestDto.of(
                                                ae.getIdAnswer(),
                                                ae.getContents(),
                                                BigDecimal.valueOf(ae.getxValue()),
                                                BigDecimal.valueOf(ae.getyValue())
                                        ))
                                        .collect(Collectors.toList())
                        ))
                        .collect(Collectors.toList())
        );
    }

    @SuppressWarnings("unchecked")
    public static QuestionnairesResponseDto toDto(List<QuestionnaireEntity> entities) {
        return QuestionnairesResponseDto.of(entities
                .stream()
                .map(questionnaire -> QuestionnaireResponseDto.of(
                        questionnaire.getIdQuestionnaire(),
                        questionnaire.getName(),
                        questionnaire.getDescription()
                )).collect(Collectors.toList())
        );
    }
}
