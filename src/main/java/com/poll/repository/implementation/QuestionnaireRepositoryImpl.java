package com.poll.repository.implementation;

import com.poll.model.QuestionnaireEntity;
import com.poll.repository.QuestionnaireRepository;
import com.poll.repository.orm.QuestionnaireOrmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class QuestionnaireRepositoryImpl implements QuestionnaireRepository {

    @Autowired
    private QuestionnaireOrmRepository ormRepository;

    @Override
    public Long save(final QuestionnaireEntity entity) {
        return ormRepository.saveAndFlush(entity).getIdQuestionnaire();
    }
}
