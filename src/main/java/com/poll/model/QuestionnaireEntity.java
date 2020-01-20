package com.poll.model;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "questionnaire")
public class QuestionnaireEntity {
    private long idQuestionnaire;
    private String name;
    private String description;
    private Collection<QuestionEntity> questions;
    private UserEntity user;

    @Id
    @Column(name = "idQuestionnaire")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long getIdQuestionnaire() {
        return idQuestionnaire;
    }

    public void setIdQuestionnaire(long idQuestionnaire) {
        this.idQuestionnaire = idQuestionnaire;
    }

    @Basic
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        QuestionnaireEntity that = (QuestionnaireEntity) o;

        if (idQuestionnaire != that.idQuestionnaire) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (description != null ? !description.equals(that.description) : that.description != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = (int) idQuestionnaire;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        return result;
    }

    @OneToMany(mappedBy = "questionnaire")
    public Collection<QuestionEntity> getQuestions() {
        return questions;
    }

    public void setQuestions(Collection<QuestionEntity> questionEntities) {
        this.questions = questionEntities;
    }

    @ManyToOne
    @JoinColumn(name = "user_idUser", referencedColumnName = "idUser", nullable = false)
    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity userEntity) {
        this.user = userEntity;
    }
}
