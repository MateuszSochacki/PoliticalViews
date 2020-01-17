package com.poll.model;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "coordinates")
public class CoordinatesEntity {
    private long idCoordinates;
    private Double xAxis;
    private Double yAxis;
    private UserEntity user;
    private Collection<PoliticalPartyEntity> politicalParties;

    @Id
    @Column(name = "idCoordinates")
    public long getIdCoordinates() {
        return idCoordinates;
    }

    public void setIdCoordinates(long idCoordinates) {
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
        int result = (int) idCoordinates;
        result = 31 * result + (xAxis != null ? xAxis.hashCode() : 0);
        result = 31 * result + (yAxis != null ? yAxis.hashCode() : 0);
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "user_idUser", referencedColumnName = "idUser", nullable = false)
    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity userEntity) {
        this.user = userEntity;
    }

    @OneToMany(mappedBy = "coordinates")
    public Collection<PoliticalPartyEntity> getPoliticalParties() {
        return politicalParties;
    }

    public void setPoliticalParties(Collection<PoliticalPartyEntity> politicalpartiesByIdCoordinates) {
        this.politicalParties = politicalpartiesByIdCoordinates;
    }
}
