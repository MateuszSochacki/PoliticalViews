package com.poll.mapper;

import com.poll.dto.questionnaire.QuestionnaireCreateRequestDto;
import com.poll.model.AnswerEntity;
import com.poll.model.QuestionEntity;
import com.poll.model.QuestionnaireEntity;
import com.poll.model.UserEntity;

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
}
