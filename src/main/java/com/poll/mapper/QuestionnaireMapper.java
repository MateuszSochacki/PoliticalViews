package com.poll.mapper;

import com.poll.dto.questionnaire.AnswerResponseRequestDto;
import com.poll.dto.questionnaire.QuestionResponseRequestDto;
import com.poll.dto.questionnaire.QuestionnaireCreateRequestDto;
import com.poll.dto.questionnaire.QuestionnaireResponseRequestDto;
import com.poll.model.AnswerEntity;
import com.poll.model.QuestionEntity;
import com.poll.model.QuestionnaireEntity;
import com.poll.model.UserEntity;

import java.math.BigDecimal;
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

    public static QuestionnaireResponseRequestDto toDto(QuestionnaireEntity entity) {
        return QuestionnaireResponseRequestDto.of(
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
}
