package com.poll.repository.implementation;

import com.poll.model.QuestionnaireEntity;
import com.poll.repository.QuestionnaireRepository;
import com.poll.repository.orm.QuestionnaireOrmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

@Repository
public class QuestionnaireRepositoryImpl implements QuestionnaireRepository {

    @PersistenceContext
    private EntityManager entityManager;

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

    @Override
    public QuestionnaireEntity read(Long id) {

        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<QuestionnaireEntity> query = cb.createQuery(QuestionnaireEntity.class);
        Root<QuestionnaireEntity> questionnaire = query.from(QuestionnaireEntity.class);
        questionnaire.fetch("questions");
        query.select(questionnaire).where(cb.equal(questionnaire.get("idQuestionnaire"), id));
        TypedQuery<QuestionnaireEntity> typedQuery = entityManager.createQuery(query);
        return typedQuery.getSingleResult();
    }
}
