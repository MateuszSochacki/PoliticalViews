package com.react.reacttest.model;

import javax.persistence.*;

@Entity
@Table(name = "user", schema = "ii302782", catalog = "")
public class UserEntity {
    private int idUser;
    private int socialViewId;
    private int economyId;
    private int stateViewId;
    private QuestionnaireEntity questionnaire;
    private CoordinatesEntity coordinates;
    private SocialViewEntity socialView;
    private EconomyEntity economy;
    private StateViewEntity stateView;

    @Id
    @Column(name = "idUser")
    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    @Id
    @Column(name = "SocialView_idSocialView")
    public int getSocialViewId() {
        return socialViewId;
    }

    public void setSocialViewId(int socialViewIdSocialView) {
        this.socialViewId = socialViewIdSocialView;
    }

    @Id
    @Column(name = "Economy_idEconomy")
    public int getEconomyId() {
        return economyId;
    }

    public void setEconomyId(int economyIdEconomy) {
        this.economyId = economyIdEconomy;
    }

    @Id
    @Column(name = "StateView_idStateView")
    public int getStateViewId() {
        return stateViewId;
    }

    public void setStateViewId(int stateViewIdStateView) {
        this.stateViewId = stateViewIdStateView;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserEntity that = (UserEntity) o;

        if (idUser != that.idUser) return false;
        if (socialViewId != that.socialViewId) return false;
        if (economyId != that.economyId) return false;
        if (stateViewId != that.stateViewId) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idUser;
        result = 31 * result + socialViewId;
        result = 31 * result + economyId;
        result = 31 * result + stateViewId;
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "idUser", referencedColumnName = "user_idUser", nullable = false)
    public QuestionnaireEntity getQuestionnaire() {
        return questionnaire;
    }

    public void setQuestionnaire(QuestionnaireEntity questionnaireEntity) {
        this.questionnaire = questionnaireEntity;
    }

    @ManyToOne
    @JoinColumn(name = "Coordinates_idCoordinates", referencedColumnName = "idCoordinates", nullable = false)
    public CoordinatesEntity getCoordinates() {
        return coordinates;
    }

    public void setCoordinates(CoordinatesEntity coordinatesEntity) {
        this.coordinates = coordinatesEntity;
    }

    @ManyToOne
    @JoinColumn(name = "SocialView_idSocialView", referencedColumnName = "idSocialView", nullable = false)
    public SocialViewEntity getSocialView() {
        return socialView;
    }

    public void setSocialView(SocialViewEntity socialviewEntity) {
        this.socialView = socialviewEntity;
    }

    @ManyToOne
    @JoinColumn(name = "Economy_idEconomy", referencedColumnName = "idEconomy", nullable = false)
    public EconomyEntity getEconomy() {
        return economy;
    }

    public void setEconomy(EconomyEntity economyEntity) {
        this.economy = economyEntity;
    }

    @ManyToOne
    @JoinColumn(name = "StateView_idStateView", referencedColumnName = "idStateView", nullable = false)
    public StateViewEntity getStateView() {
        return stateView;
    }

    public void setStateView(StateViewEntity stateView) {
        this.stateView = stateView;
    }
}
