package com.poll.model;

import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "socialview")
@NoArgsConstructor
public class SocialViewEntity {
    private long idSocialView;
    private String religion;
    private String deathPenalty;
    private String orientation;
    private String abortion;
    private String euthanasia;
    private String race;
    private Boolean womenEdu;
    private Boolean womenEmploy;
    private Boolean womenVoting;
    private Boolean womenWage;
    private Boolean womenMaternity;
    private Boolean stimAlcohol;
    private Boolean stimCannabis;
    private Boolean stimHard;
    private Boolean sitmNicotine;
    private UserEntity user;

    public SocialViewEntity(long idSocialView, String religion, String deathPenalty, String orientation, String abortion,
                            String euthanasia, String race, Boolean womenEdu, Boolean womenEmploy, Boolean womenVoting,
                            Boolean womenWage, Boolean womenMaternity, Boolean stimAlcohol, Boolean stimCannabis,
                            Boolean stimHard, Boolean sitmNicotine, UserEntity user) {
        this.idSocialView = idSocialView;
        this.religion = religion;
        this.deathPenalty = deathPenalty;
        this.orientation = orientation;
        this.abortion = abortion;
        this.euthanasia = euthanasia;
        this.race = race;
        this.womenEdu = womenEdu;
        this.womenEmploy = womenEmploy;
        this.womenVoting = womenVoting;
        this.womenWage = womenWage;
        this.womenMaternity = womenMaternity;
        this.stimAlcohol = stimAlcohol;
        this.stimCannabis = stimCannabis;
        this.stimHard = stimHard;
        this.sitmNicotine = sitmNicotine;
        this.user = user;
    }

    public SocialViewEntity(String religion, String deathPenalty, String orientation, String abortion,
                            String euthanasia, String race, Boolean womenEdu, Boolean womenEmploy, Boolean womenVoting,
                            Boolean womenWage, Boolean womenMaternity, Boolean stimAlcohol, Boolean stimCannabis,
                            Boolean stimHard, Boolean sitmNicotine, UserEntity user) {
        this.religion = religion;
        this.deathPenalty = deathPenalty;
        this.orientation = orientation;
        this.abortion = abortion;
        this.euthanasia = euthanasia;
        this.race = race;
        this.womenEdu = womenEdu;
        this.womenEmploy = womenEmploy;
        this.womenVoting = womenVoting;
        this.womenWage = womenWage;
        this.womenMaternity = womenMaternity;
        this.stimAlcohol = stimAlcohol;
        this.stimCannabis = stimCannabis;
        this.stimHard = stimHard;
        this.sitmNicotine = sitmNicotine;
        this.user = user;
    }

    @Id
    @Column(name = "idSocialView")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long getIdSocialView() {
        return idSocialView;
    }

    public void setIdSocialView(long idSocialView) {
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
    public Boolean getWomenEdu() {
        return womenEdu;
    }

    public void setWomenEdu(Boolean womenEdu) {
        this.womenEdu = womenEdu;
    }

    @Basic
    @Column(name = "womenEmploy")
    public Boolean getWomenEmploy() {
        return womenEmploy;
    }

    public void setWomenEmploy(Boolean womenEmploy) {
        this.womenEmploy = womenEmploy;
    }

    @Basic
    @Column(name = "womenVoting")
    public Boolean getWomenVoting() {
        return womenVoting;
    }

    public void setWomenVoting(Boolean womenVoting) {
        this.womenVoting = womenVoting;
    }

    @Basic
    @Column(name = "womenWage")
    public Boolean getWomenWage() {
        return womenWage;
    }

    public void setWomenWage(Boolean womenWage) {
        this.womenWage = womenWage;
    }

    @Basic
    @Column(name = "womenMaternity")
    public Boolean getWomenMaternity() {
        return womenMaternity;
    }

    public void setWomenMaternity(Boolean womenMaternity) {
        this.womenMaternity = womenMaternity;
    }

    @Basic
    @Column(name = "stimAlcohol")
    public Boolean getStimAlcohol() {
        return stimAlcohol;
    }

    public void setStimAlcohol(Boolean stimAlcohol) {
        this.stimAlcohol = stimAlcohol;
    }

    @Basic
    @Column(name = "stimCannabis")
    public Boolean getStimCannabis() {
        return stimCannabis;
    }

    public void setStimCannabis(Boolean stimCannabis) {
        this.stimCannabis = stimCannabis;
    }

    @Basic
    @Column(name = "stimHard")
    public Boolean getStimHard() {
        return stimHard;
    }

    public void setStimHard(Boolean stimHard) {
        this.stimHard = stimHard;
    }

    @Basic
    @Column(name = "sitmNicotine")
    public Boolean getSitmNicotine() {
        return sitmNicotine;
    }

    public void setSitmNicotine(Boolean sitmNicotine) {
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
        int result = (int) idSocialView;
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

    @ManyToOne
    @JoinColumn(name = "user_idUser", referencedColumnName = "idUser", nullable = false)
    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity userEntity) {
        this.user = userEntity;
    }
}
