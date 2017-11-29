package com.react.reacttest.model;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;

public class SocialViewEntityPK implements Serializable {
    private int idSocialView;
    private int userIdUser;

    @Column(name = "idSocialView")
    @Id
    public int getIdSocialView() {
        return idSocialView;
    }

    public void setIdSocialView(int idSocialView) {
        this.idSocialView = idSocialView;
    }

    @Column(name = "User_idUser")
    @Id
    public int getUserIdUser() {
        return userIdUser;
    }

    public void setUserIdUser(int userIdUser) {
        this.userIdUser = userIdUser;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SocialViewEntityPK that = (SocialViewEntityPK) o;

        if (idSocialView != that.idSocialView) return false;
        if (userIdUser != that.userIdUser) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idSocialView;
        result = 31 * result + userIdUser;
        return result;
    }
}
