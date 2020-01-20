package com.poll.model;

import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "user")
@NoArgsConstructor
public class UserEntity {
    private long idUser;
    private String name;
    private String password;
    private Collection<CoordinatesEntity> coordinates;
    private Collection<EconomyEntity> economies;
    private Collection<QuestionnaireEntity> questionnaires;
    private Collection<SocialViewEntity> socialviews;
    private Collection<StateViewEntity> stateviews;

    public UserEntity(long idUser, String name, String password, Collection<CoordinatesEntity> coordinates,
                       Collection<EconomyEntity> economies, Collection<QuestionnaireEntity> questionnaires,
                       Collection<SocialViewEntity> socialviews, Collection<StateViewEntity> stateviews) {
        this.idUser = idUser;
        this.name = name;
        this.password = password;
        this.coordinates = coordinates;
        this.economies = economies;
        this.questionnaires = questionnaires;
        this.socialviews = socialviews;
        this.stateviews = stateviews;
    }

    public UserEntity(String name, String password, Collection<CoordinatesEntity> coordinates,
                      Collection<EconomyEntity> economies, Collection<QuestionnaireEntity> questionnaires,
                      Collection<SocialViewEntity> socialviews, Collection<StateViewEntity> stateviews) {
        this.name = name;
        this.password = password;
        this.coordinates = coordinates;
        this.economies = economies;
        this.questionnaires = questionnaires;
        this.socialviews = socialviews;
        this.stateviews = stateviews;
    }

    @Id
    @Column(name = "idUser")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long getIdUser() {
        return idUser;
    }

    public void setIdUser(long idUser) {
        this.idUser = idUser;
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
    @Column(name = "password")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserEntity that = (UserEntity) o;

        if (idUser != that.idUser) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (password != null ? !password.equals(that.password) : that.password != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = (int) idUser;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (password != null ? password.hashCode() : 0);
        return result;
    }

    @OneToMany(mappedBy = "user")
    public Collection<CoordinatesEntity> getCoordinates() {
        return coordinates;
    }

    public void setCoordinates(Collection<CoordinatesEntity> coordinatesEntities) {
        this.coordinates = coordinatesEntities;
    }

    @OneToMany(mappedBy = "user")
    public Collection<EconomyEntity> getEconomies() {
        return economies;
    }

    public void setEconomies(Collection<EconomyEntity> economyEntities) {
        this.economies = economyEntities;
    }

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    public Collection<QuestionnaireEntity> getQuestionnaires() {
        return questionnaires;
    }

    public void setQuestionnaires(Collection<QuestionnaireEntity> questionnaireEntities) {
        this.questionnaires = questionnaireEntities;
    }

    @OneToMany(mappedBy = "user")
    public Collection<SocialViewEntity> getSocialviews() {
        return socialviews;
    }

    public void setSocialviews(Collection<SocialViewEntity> socialViewEntities) {
        this.socialviews = socialViewEntities;
    }

    @OneToMany(mappedBy = "user")
    public Collection<StateViewEntity> getStateviews() {
        return stateviews;
    }

    public void setStateviews(Collection<StateViewEntity> stateViewEntities) {
        this.stateviews = stateViewEntities;
    }
}
