package com.react.reacttest.model;

import javax.persistence.*;

@Entity
@Table(name = "User", schema = "ii302782", catalog = "")
@IdClass(UserEntityPK.class)
public class UserEntity {
    private int idUser;
    private int coordinatesIdCoordinates;
    private int socialViewIdSocialView;
    private int economyIdEconomy;
    private CoordinatesEntity coordinatesByCoordinatesIdCoordinates;
    private SocialViewEntity socialViewBySocialViewIdSocialView;
    private EconomyEntity economyByEconomyIdEconomy;

    @Id
    @Column(name = "idUser")
    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    @Basic
    @Column(name = "Coordinates_idCoordinates")
    public int getCoordinatesIdCoordinates() {
        return coordinatesIdCoordinates;
    }

    public void setCoordinatesIdCoordinates(int coordinatesIdCoordinates) {
        this.coordinatesIdCoordinates = coordinatesIdCoordinates;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserEntity that = (UserEntity) o;

        if (idUser != that.idUser) return false;
        if (coordinatesIdCoordinates != that.coordinatesIdCoordinates) return false;
        if (socialViewIdSocialView != that.socialViewIdSocialView) return false;
        if (economyIdEconomy != that.economyIdEconomy) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idUser;
        result = 31 * result + coordinatesIdCoordinates;
        result = 31 * result + socialViewIdSocialView;
        result = 31 * result + economyIdEconomy;
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "Coordinates_idCoordinates", referencedColumnName = "idCoordinates", nullable = false, insertable= false, updatable = false)
    public CoordinatesEntity getCoordinatesByCoordinatesIdCoordinates() {
        return coordinatesByCoordinatesIdCoordinates;
    }

    public void setCoordinatesByCoordinatesIdCoordinates(CoordinatesEntity coordinatesByCoordinatesIdCoordinates) {
        this.coordinatesByCoordinatesIdCoordinates = coordinatesByCoordinatesIdCoordinates;
    }

    @ManyToOne
    @JoinColumn(name = "SocialView_idSocialView", referencedColumnName = "idSocialView", nullable = false, insertable= false, updatable = false)
    public SocialViewEntity getSocialViewBySocialViewIdSocialView() {
        return socialViewBySocialViewIdSocialView;
    }

    public void setSocialViewBySocialViewIdSocialView(SocialViewEntity socialViewBySocialViewIdSocialView) {
        this.socialViewBySocialViewIdSocialView = socialViewBySocialViewIdSocialView;
    }

    @ManyToOne
    @JoinColumn(name = "Economy_idEconomy", referencedColumnName = "idEconomy", nullable = false, insertable= false, updatable = false)
    public EconomyEntity getEconomyByEconomyIdEconomy() {
        return economyByEconomyIdEconomy;
    }

    public void setEconomyByEconomyIdEconomy(EconomyEntity economyByEconomyIdEconomy) {
        this.economyByEconomyIdEconomy = economyByEconomyIdEconomy;
    }
}
