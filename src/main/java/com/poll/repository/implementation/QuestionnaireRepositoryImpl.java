package com.poll.repository.implementation;

import com.poll.model.QuestionnaireEntity;
import com.poll.repository.QuestionnaireRepository;
import com.poll.repository.orm.QuestionnaireOrmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class QuestionnaireRepositoryImpl implements QuestionnaireRepository {

    @Autowired
    private QuestionnaireOrmRepository questionnaireOrmRepository;

    @Override
    public Long save(final QuestionnaireEntity entity) {

        entity.getQuestions()
                .forEach(question -> {
                    question.setQuestionnaire(entity);
                    question.getAnswers()
                            .forEach(ans -> ans.setQuestion(question));
                });
        return questionnaireOrmRepository.saveAndFlush(entity).getIdQuestionnaire();
    }
}
