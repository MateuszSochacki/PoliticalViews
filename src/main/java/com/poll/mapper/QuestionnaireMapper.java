package com.poll.mapper;

import com.poll.dto.questionnaire.QuestionnaireCreateRequestDto;
import com.poll.model.QuestionnaireEntity;
import com.poll.model.UserEntity;

import java.util.Collections;

public final class QuestionnaireMapper {

    @SuppressWarnings("unchecked")
    public static QuestionnaireEntity fromDto(QuestionnaireCreateRequestDto dto, UserEntity userEntity) {
        return new QuestionnaireEntity(
                dto.getName(),
                dto.getDescription(),
                Collections.EMPTY_LIST,
                userEntity);
    }
}
