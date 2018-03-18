package com.react.reacttest.model;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;

public class UserEntityPK implements Serializable {
    private int idUser;
    private int socialViewIdSocialView;
    private int economyIdEconomy;
    private int stateViewIdStateView;

    @Column(name = "idUser")
    @Id
    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    @Column(name = "SocialView_idSocialView")
    @Id
    public int getSocialViewIdSocialView() {
        return socialViewIdSocialView;
    }

    public void setSocialViewIdSocialView(int socialViewIdSocialView) {
        this.socialViewIdSocialView = socialViewIdSocialView;
    }

    @Column(name = "Economy_idEconomy")
    @Id
    public int getEconomyIdEconomy() {
        return economyIdEconomy;
    }

    public void setEconomyIdEconomy(int economyIdEconomy) {
        this.economyIdEconomy = economyIdEconomy;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserEntityPK that = (UserEntityPK) o;

        if (idUser != that.idUser) return false;
        if (socialViewIdSocialView != that.socialViewIdSocialView) return false;
        if (economyIdEconomy != that.economyIdEconomy) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idUser;
        result = 31 * result + socialViewIdSocialView;
        result = 31 * result + economyIdEconomy;
        return result;
    }

    @Column(name = "StateView_idStateView")
    @Id
    public int getStateViewIdStateView() {
        return stateViewIdStateView;
    }

    public void setStateViewIdStateView(int stateViewIdStateView) {
        this.stateViewIdStateView = stateViewIdStateView;
    }
}
