package com.react.reacttest.model;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;

public class EconomyEntityPK implements Serializable {
    private int idEconomy;
    private int userIdUser;

    @Column(name = "idEconomy")
    @Id
    public int getIdEconomy() {
        return idEconomy;
    }

    public void setIdEconomy(int idEconomy) {
        this.idEconomy = idEconomy;
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

        EconomyEntityPK that = (EconomyEntityPK) o;

        if (idEconomy != that.idEconomy) return false;
        if (userIdUser != that.userIdUser) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idEconomy;
        result = 31 * result + userIdUser;
        return result;
    }
}
