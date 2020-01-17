package com.react.reacttest.model;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "socialview", schema = "ii302782", catalog = "")
public class SocialViewEntity {
    private int idSocialView;
    private String religion;
    private String deathPenalty;
    private String orientation;
    private String abortion;
    private String euthanasia;
    private String race;
    private Byte womenEdu;
    private Byte womenEmploy;
    private Byte womenVoting;
    private Byte womenWage;
    private Byte womenMaternity;
    private Byte stimAlcohol;
    private Byte stimCannabis;
    private Byte stimHard;
    private Byte sitmNicotine;
    private Collection<UserEntity> users;

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
    @Column(name = "deathPenalty")
    public String getDeathPenalty() {
        return deathPenalty;
    }

    public void setDeathPenalty(String deathPenalty) {
        this.deathPenalty = deathPenalty;
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

    @Basic
    @Column(name = "womenEdu")
    public Byte getWomenEdu() {
        return womenEdu;
    }

    public void setWomenEdu(Byte womenEdu) {
        this.womenEdu = womenEdu;
    }

    @Basic
    @Column(name = "womenEmploy")
    public Byte getWomenEmploy() {
        return womenEmploy;
    }

    public void setWomenEmploy(Byte womenEmploy) {
        this.womenEmploy = womenEmploy;
    }

    @Basic
    @Column(name = "womenVoting")
    public Byte getWomenVoting() {
        return womenVoting;
    }

    public void setWomenVoting(Byte womenVoting) {
        this.womenVoting = womenVoting;
    }

    @Basic
    @Column(name = "womenWage")
    public Byte getWomenWage() {
        return womenWage;
    }

    public void setWomenWage(Byte womenWage) {
        this.womenWage = womenWage;
    }

    @Basic
    @Column(name = "womenMaternity")
    public Byte getWomenMaternity() {
        return womenMaternity;
    }

    public void setWomenMaternity(Byte womenMaternity) {
        this.womenMaternity = womenMaternity;
    }

    @Basic
    @Column(name = "stimAlcohol")
    public Byte getStimAlcohol() {
        return stimAlcohol;
    }

    public void setStimAlcohol(Byte stimAlcohol) {
        this.stimAlcohol = stimAlcohol;
    }

    @Basic
    @Column(name = "stimCannabis")
    public Byte getStimCannabis() {
        return stimCannabis;
    }

    public void setStimCannabis(Byte stimCannabis) {
        this.stimCannabis = stimCannabis;
    }

    @Basic
    @Column(name = "stimHard")
    public Byte getStimHard() {
        return stimHard;
    }

    public void setStimHard(Byte stimHard) {
        this.stimHard = stimHard;
    }

    @Basic
    @Column(name = "sitmNicotine")
    public Byte getSitmNicotine() {
        return sitmNicotine;
    }

    public void setSitmNicotine(Byte sitmNicotine) {
        this.sitmNicotine = sitmNicotine;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SocialViewEntity that = (SocialViewEntity) o;

        if (idSocialView != that.idSocialView) return false;
        if (religion != null ? !religion.equals(that.religion) : that.religion != null) return false;
        if (deathPenalty != null ? !deathPenalty.equals(that.deathPenalty) : that.deathPenalty != null) return false;
        if (orientation != null ? !orientation.equals(that.orientation) : that.orientation != null) return false;
        if (abortion != null ? !abortion.equals(that.abortion) : that.abortion != null) return false;
        if (euthanasia != null ? !euthanasia.equals(that.euthanasia) : that.euthanasia != null) return false;
        if (race != null ? !race.equals(that.race) : that.race != null) return false;
        if (womenEdu != null ? !womenEdu.equals(that.womenEdu) : that.womenEdu != null) return false;
        if (womenEmploy != null ? !womenEmploy.equals(that.womenEmploy) : that.womenEmploy != null) return false;
        if (womenVoting != null ? !womenVoting.equals(that.womenVoting) : that.womenVoting != null) return false;
        if (womenWage != null ? !womenWage.equals(that.womenWage) : that.womenWage != null) return false;
        if (womenMaternity != null ? !womenMaternity.equals(that.womenMaternity) : that.womenMaternity != null)
            return false;
        if (stimAlcohol != null ? !stimAlcohol.equals(that.stimAlcohol) : that.stimAlcohol != null) return false;
        if (stimCannabis != null ? !stimCannabis.equals(that.stimCannabis) : that.stimCannabis != null) return false;
        if (stimHard != null ? !stimHard.equals(that.stimHard) : that.stimHard != null) return false;
        if (sitmNicotine != null ? !sitmNicotine.equals(that.sitmNicotine) : that.sitmNicotine != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idSocialView;
        result = 31 * result + (religion != null ? religion.hashCode() : 0);
        result = 31 * result + (deathPenalty != null ? deathPenalty.hashCode() : 0);
        result = 31 * result + (orientation != null ? orientation.hashCode() : 0);
        result = 31 * result + (abortion != null ? abortion.hashCode() : 0);
        result = 31 * result + (euthanasia != null ? euthanasia.hashCode() : 0);
        result = 31 * result + (race != null ? race.hashCode() : 0);
        result = 31 * result + (womenEdu != null ? womenEdu.hashCode() : 0);
        result = 31 * result + (womenEmploy != null ? womenEmploy.hashCode() : 0);
        result = 31 * result + (womenVoting != null ? womenVoting.hashCode() : 0);
        result = 31 * result + (womenWage != null ? womenWage.hashCode() : 0);
        result = 31 * result + (womenMaternity != null ? womenMaternity.hashCode() : 0);
        result = 31 * result + (stimAlcohol != null ? stimAlcohol.hashCode() : 0);
        result = 31 * result + (stimCannabis != null ? stimCannabis.hashCode() : 0);
        result = 31 * result + (stimHard != null ? stimHard.hashCode() : 0);
        result = 31 * result + (sitmNicotine != null ? sitmNicotine.hashCode() : 0);
        return result;
    }

    @OneToMany(mappedBy = "socialView")
    public Collection<UserEntity> getUsers() {
        return users;
    }

    public void setUsers(Collection<UserEntity> userEntities) {
        this.users = userEntities;
    }
}
