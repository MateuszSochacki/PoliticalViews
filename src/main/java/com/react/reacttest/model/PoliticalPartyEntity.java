package com.react.reacttest.model;

import javax.persistence.*;

@Entity
@Table(name = "PoliticalParty", schema = "ii302782", catalog = "")
public class PoliticalPartyEntity {
    private int idPoliticalParty;
    private String name;
    private String description;
    private int coordinatesIdCoordinates;
    private CoordinatesEntity coordinatesByCoordinatesIdCoordinates;

    @Id
    @Column(name = "idPoliticalParty")
    public int getIdPoliticalParty() {
        return idPoliticalParty;
    }

    public void setIdPoliticalParty(int idPoliticalParty) {
        this.idPoliticalParty = idPoliticalParty;
    }

    @Basic
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Basic
    @Column(name = "Coordinates_idCoordinates")
    public int getCoordinatesIdCoordinates() {
        return coordinatesIdCoordinates;
    }

    public void setCoordinatesIdCoordinates(int coordinatesIdCoordinates) {
        this.coordinatesIdCoordinates = coordinatesIdCoordinates;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PoliticalPartyEntity that = (PoliticalPartyEntity) o;

        if (idPoliticalParty != that.idPoliticalParty) return false;
        if (coordinatesIdCoordinates != that.coordinatesIdCoordinates) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (description != null ? !description.equals(that.description) : that.description != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idPoliticalParty;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        result = 31 * result + coordinatesIdCoordinates;
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
}
