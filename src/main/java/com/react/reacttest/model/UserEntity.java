package com.react.reacttest.model;

import javax.persistence.*;

@Entity
@Table(name = "user", schema = "ii302782", catalog = "")
@IdClass(UserEntityPK.class)
public class UserEntity {
    private int idUser;
    private int socialViewIdSocialView;
    private int economyIdEconomy;
    private int stateViewIdStateView;

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
    public int getSocialViewIdSocialView() {
        return socialViewIdSocialView;
    }

    public void setSocialViewIdSocialView(int socialViewIdSocialView) {
        this.socialViewIdSocialView = socialViewIdSocialView;
    }

    @Id
    @Column(name = "Economy_idEconomy")
    public int getEconomyIdEconomy() {
        return economyIdEconomy;
    }

    public void setEconomyIdEconomy(int economyIdEconomy) {
        this.economyIdEconomy = economyIdEconomy;
    }

    @Id
    @Column(name = "StateView_idStateView")
    public int getStateViewIdStateView() {
        return stateViewIdStateView;
    }

    public void setStateViewIdStateView(int stateViewIdStateView) {
        this.stateViewIdStateView = stateViewIdStateView;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserEntity that = (UserEntity) o;

        if (idUser != that.idUser) return false;
        if (socialViewIdSocialView != that.socialViewIdSocialView) return false;
        if (economyIdEconomy != that.economyIdEconomy) return false;
        if (stateViewIdStateView != that.stateViewIdStateView) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idUser;
        result = 31 * result + socialViewIdSocialView;
        result = 31 * result + economyIdEconomy;
        result = 31 * result + stateViewIdStateView;
        return result;
    }
}
