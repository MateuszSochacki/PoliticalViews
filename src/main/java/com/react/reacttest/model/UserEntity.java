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
    private int stateViewIdStateView;
    private StateViewEntity stateViewByStateViewIdStateView;

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
    @Column(name = "StateView_idStateView")
    public int getStateViewIdStateView() {
        return stateViewIdStateView;
    }

    public void setStateViewIdStateView(int stateViewIdStateView) {
        this.stateViewIdStateView = stateViewIdStateView;
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
    @JoinColumns({@JoinColumn(name = "Coordinates_idCoordinates", referencedColumnName = "idCoordinates", nullable = false, insertable = false, updatable = false)})
    public CoordinatesEntity getCoordinatesByCoordinatesIdCoordinates() {
        return coordinatesByCoordinatesIdCoordinates;
    }

    public void setCoordinatesByCoordinatesIdCoordinates(CoordinatesEntity coordinatesByCoordinatesIdCoordinates) {
        this.coordinatesByCoordinatesIdCoordinates = coordinatesByCoordinatesIdCoordinates;
    }

    @ManyToOne
    @JoinColumns({@JoinColumn(name = "SocialView_idSocialView", referencedColumnName = "idSocialView", nullable = false, insertable = false, updatable = false)})
    public SocialViewEntity getSocialViewBySocialViewIdSocialView() {
        return socialViewBySocialViewIdSocialView;
    }

    public void setSocialViewBySocialViewIdSocialView(SocialViewEntity socialViewBySocialViewIdSocialView) {
        this.socialViewBySocialViewIdSocialView = socialViewBySocialViewIdSocialView;
    }

    @ManyToOne
    @JoinColumns({@JoinColumn(name = "Economy_idEconomy", referencedColumnName = "idEconomy", nullable = false, insertable = false, updatable = false)})
    public EconomyEntity getEconomyByEconomyIdEconomy() {
        return economyByEconomyIdEconomy;
    }

    public void setEconomyByEconomyIdEconomy(EconomyEntity economyByEconomyIdEconomy) {
        this.economyByEconomyIdEconomy = economyByEconomyIdEconomy;
    }


    @ManyToOne
    @JoinColumn(name = "StateView_idStateView", referencedColumnName = "idStateView", nullable = false, insertable = false, updatable = false)
    public StateViewEntity getStateViewByStateViewIdStateView() {
        return stateViewByStateViewIdStateView;
    }

    public void setStateViewByStateViewIdStateView(StateViewEntity stateViewByStateViewIdStateView) {
        this.stateViewByStateViewIdStateView = stateViewByStateViewIdStateView;
    }
}
