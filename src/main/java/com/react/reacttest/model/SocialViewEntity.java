package com.react.reacttest.model;

import javax.persistence.*;

@Entity
@Table(name = "SocialView", schema = "ii302782", catalog = "")
public class SocialViewEntity {
    private int idSocialView;
    private String religion;
    private String women;
    private String deathPenalty;
    private String stimulants;
    private String orientation;
    private String abortion;
    private String euthanasia;
    private String race;

    @Id
    @Column(name = "idSocialView")
    public int getIdSocialView() {
        return idSocialView;
    }

    public void setIdSocialView(int idSocialView) {
        this.idSocialView = idSocialView;
    }

    @Basic
    @Column(name = "religion")
    public String getReligion() {
        return religion;
    }

    public void setReligion(String religion) {
        this.religion = religion;
    }

    @Basic
    @Column(name = "women")
    public String getWomen() {
        return women;
    }

    public void setWomen(String women) {
        this.women = women;
    }

    @Basic
    @Column(name = "deathPenalty")
    public String getDeathPenalty() {
        return deathPenalty;
    }

    public void setDeathPenalty(String deathPenalty) {
        this.deathPenalty = deathPenalty;
    }

    @Basic
    @Column(name = "stimulants")
    public String getStimulants() {
        return stimulants;
    }

    public void setStimulants(String stimulants) {
        this.stimulants = stimulants;
    }

    @Basic
    @Column(name = "orientation")
    public String getOrientation() {
        return orientation;
    }

    public void setOrientation(String orientation) {
        this.orientation = orientation;
    }

    @Basic
    @Column(name = "abortion")
    public String getAbortion() {
        return abortion;
    }

    public void setAbortion(String abortion) {
        this.abortion = abortion;
    }

    @Basic
    @Column(name = "euthanasia")
    public String getEuthanasia() {
        return euthanasia;
    }

    public void setEuthanasia(String euthanasia) {
        this.euthanasia = euthanasia;
    }

    @Basic
    @Column(name = "race")
    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SocialViewEntity that = (SocialViewEntity) o;

        if (idSocialView != that.idSocialView) return false;
        if (religion != null ? !religion.equals(that.religion) : that.religion != null) return false;
        if (women != null ? !women.equals(that.women) : that.women != null) return false;
        if (deathPenalty != null ? !deathPenalty.equals(that.deathPenalty) : that.deathPenalty != null) return false;
        if (stimulants != null ? !stimulants.equals(that.stimulants) : that.stimulants != null) return false;
        if (orientation != null ? !orientation.equals(that.orientation) : that.orientation != null) return false;
        if (abortion != null ? !abortion.equals(that.abortion) : that.abortion != null) return false;
        if (euthanasia != null ? !euthanasia.equals(that.euthanasia) : that.euthanasia != null) return false;
        if (race != null ? !race.equals(that.race) : that.race != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idSocialView;
        result = 31 * result + (religion != null ? religion.hashCode() : 0);
        result = 31 * result + (women != null ? women.hashCode() : 0);
        result = 31 * result + (deathPenalty != null ? deathPenalty.hashCode() : 0);
        result = 31 * result + (stimulants != null ? stimulants.hashCode() : 0);
        result = 31 * result + (orientation != null ? orientation.hashCode() : 0);
        result = 31 * result + (abortion != null ? abortion.hashCode() : 0);
        result = 31 * result + (euthanasia != null ? euthanasia.hashCode() : 0);
        result = 31 * result + (race != null ? race.hashCode() : 0);
        return result;
    }
}
