package com.react.reacttest.model;

import javax.persistence.*;

@Entity
@Table(name = "Coordinates", schema = "ii302782", catalog = "")
public class CoordinatesEntity {
    private int idCoordinates;
    private Double xAxis;
    private Double yAxis;

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
}