package com.poll.repository;

import com.poll.model.QuestionnaireEntity;

public interface QuestionnaireRepository {
    Long save(QuestionnaireEntity fromDto);

    QuestionnaireEntity read(Long id);
}
