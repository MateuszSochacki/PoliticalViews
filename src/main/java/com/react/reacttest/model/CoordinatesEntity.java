package com.react.reacttest.model;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "Coordinates", schema = "ii302782", catalog = "")
public class CoordinatesEntity {
    private int idCoordinates;
    private Double xAxis;
    private Double yAxis;
    private Collection<IdeologiesEntity> ideologiesByIdCoordinates;
    private Collection<PoliticalPartyEntity> politicalPartiesByIdCoordinates;
    private Collection<UserEntity> usersByIdCoordinates;

    @Id
    @Column(name = "idCoordinates")
    public int getIdCoordinates() {
        return idCoordinates;
    }

    public void setIdCoordinates(int idCoordinates) {
        this.idCoordinates = idCoordinates;
    }

    @Basic
    @Column(name = "xAxis")
    public Double getxAxis() {
        return xAxis;
    }

    public void setxAxis(Double xAxis) {
        this.xAxis = xAxis;
    }

    @Basic
    @Column(name = "yAxis")
    public Double getyAxis() {
        return yAxis;
    }

    public void setyAxis(Double yAxis) {
        this.yAxis = yAxis;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        CoordinatesEntity that = (CoordinatesEntity) o;

        if (idCoordinates != that.idCoordinates) return false;
        if (xAxis != null ? !xAxis.equals(that.xAxis) : that.xAxis != null) return false;
        if (yAxis != null ? !yAxis.equals(that.yAxis) : that.yAxis != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idCoordinates;
        result = 31 * result + (xAxis != null ? xAxis.hashCode() : 0);
        result = 31 * result + (yAxis != null ? yAxis.hashCode() : 0);
        return result;
    }

    @OneToMany(mappedBy = "coordinatesByCoordinatesIdCoordinates")
    public Collection<IdeologiesEntity> getIdeologiesByIdCoordinates() {
        return ideologiesByIdCoordinates;
    }

    public void setIdeologiesByIdCoordinates(Collection<IdeologiesEntity> ideologiesByIdCoordinates) {
        this.ideologiesByIdCoordinates = ideologiesByIdCoordinates;
    }

    @OneToMany(mappedBy = "coordinatesByCoordinatesIdCoordinates")
    public Collection<PoliticalPartyEntity> getPoliticalPartiesByIdCoordinates() {
        return politicalPartiesByIdCoordinates;
    }

    public void setPoliticalPartiesByIdCoordinates(Collection<PoliticalPartyEntity> politicalPartiesByIdCoordinates) {
        this.politicalPartiesByIdCoordinates = politicalPartiesByIdCoordinates;
    }

    @OneToMany(mappedBy = "coordinatesByCoordinatesIdCoordinates")
    public Collection<UserEntity> getUsersByIdCoordinates() {
        return usersByIdCoordinates;
    }

    public void setUsersByIdCoordinates(Collection<UserEntity> usersByIdCoordinates) {
        this.usersByIdCoordinates = usersByIdCoordinates;
    }
}
