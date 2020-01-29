package com.poll.repository;

import com.poll.model.QuestionnaireEntity;

import java.util.List;

public interface QuestionnaireRepository {
    Long save(QuestionnaireEntity fromDto);

    QuestionnaireEntity read(Long id);
    List<QuestionnaireEntity> readMany(Long userId);
}
