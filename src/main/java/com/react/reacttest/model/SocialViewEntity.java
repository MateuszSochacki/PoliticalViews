package com.react.reacttest.model;

import javax.persistence.*;

@Entity
@Table(name = "SocialView", schema = "ii302782", catalog = "")
public class SocialViewEntity {
    private int idSocialView;
    private String autonomy;
    private String system;
    private String votingReq;
    private String religion;
    private String militaryService;
    private String foreignPolicy;
    private String immigrationReq;
    private String immigrationRights;
    private String women;
    private String media;
    private String deathPenalty;
    private String stimulants;
    private String orientation;
    private String abortion;
    private String euthanasia;

    @Id
    @Column(name = "idSocialView")
    public int getIdSocialView() {
        return idSocialView;
    }

    public void setIdSocialView(int idSocialView) {
        this.idSocialView = idSocialView;
    }

    @Basic
    @Column(name = "autonomy")
    public String getAutonomy() {
        return autonomy;
    }

    public void setAutonomy(String autonomy) {
        this.autonomy = autonomy;
    }

    @Basic
    @Column(name = "system")
    public String getSystem() {
        return system;
    }

    public void setSystem(String system) {
        this.system = system;
    }

    @Basic
    @Column(name = "votingReq")
    public String getVotingReq() {
        return votingReq;
    }

    public void setVotingReq(String votingReq) {
        this.votingReq = votingReq;
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
    @Column(name = "militaryService")
    public String getMilitaryService() {
        return militaryService;
    }

    public void setMilitaryService(String militaryService) {
        this.militaryService = militaryService;
    }

    @Basic
    @Column(name = "foreignPolicy")
    public String getForeignPolicy() {
        return foreignPolicy;
    }

    public void setForeignPolicy(String foreignPolicy) {
        this.foreignPolicy = foreignPolicy;
    }

    @Basic
    @Column(name = "immigrationReq")
    public String getImmigrationReq() {
        return immigrationReq;
    }

    public void setImmigrationReq(String immigrationReq) {
        this.immigrationReq = immigrationReq;
    }

    @Basic
    @Column(name = "immigrationRights")
    public String getImmigrationRights() {
        return immigrationRights;
    }

    public void setImmigrationRights(String immigrationRights) {
        this.immigrationRights = immigrationRights;
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
    @Column(name = "media")
    public String getMedia() {
        return media;
    }

    public void setMedia(String media) {
        this.media = media;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SocialViewEntity that = (SocialViewEntity) o;

        if (idSocialView != that.idSocialView) return false;
        if (autonomy != null ? !autonomy.equals(that.autonomy) : that.autonomy != null) return false;
        if (system != null ? !system.equals(that.system) : that.system != null) return false;
        if (votingReq != null ? !votingReq.equals(that.votingReq) : that.votingReq != null) return false;
        if (religion != null ? !religion.equals(that.religion) : that.religion != null) return false;
        if (militaryService != null ? !militaryService.equals(that.militaryService) : that.militaryService != null)
            return false;
        if (foreignPolicy != null ? !foreignPolicy.equals(that.foreignPolicy) : that.foreignPolicy != null)
            return false;
        if (immigrationReq != null ? !immigrationReq.equals(that.immigrationReq) : that.immigrationReq != null)
            return false;
        if (immigrationRights != null ? !immigrationRights.equals(that.immigrationRights) : that.immigrationRights != null)
            return false;
        if (women != null ? !women.equals(that.women) : that.women != null) return false;
        if (media != null ? !media.equals(that.media) : that.media != null) return false;
        if (deathPenalty != null ? !deathPenalty.equals(that.deathPenalty) : that.deathPenalty != null) return false;
        if (stimulants != null ? !stimulants.equals(that.stimulants) : that.stimulants != null) return false;
        if (orientation != null ? !orientation.equals(that.orientation) : that.orientation != null) return false;
        if (abortion != null ? !abortion.equals(that.abortion) : that.abortion != null) return false;
        if (euthanasia != null ? !euthanasia.equals(that.euthanasia) : that.euthanasia != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idSocialView;
        result = 31 * result + (autonomy != null ? autonomy.hashCode() : 0);
        result = 31 * result + (system != null ? system.hashCode() : 0);
        result = 31 * result + (votingReq != null ? votingReq.hashCode() : 0);
        result = 31 * result + (religion != null ? religion.hashCode() : 0);
        result = 31 * result + (militaryService != null ? militaryService.hashCode() : 0);
        result = 31 * result + (foreignPolicy != null ? foreignPolicy.hashCode() : 0);
        result = 31 * result + (immigrationReq != null ? immigrationReq.hashCode() : 0);
        result = 31 * result + (immigrationRights != null ? immigrationRights.hashCode() : 0);
        result = 31 * result + (women != null ? women.hashCode() : 0);
        result = 31 * result + (media != null ? media.hashCode() : 0);
        result = 31 * result + (deathPenalty != null ? deathPenalty.hashCode() : 0);
        result = 31 * result + (stimulants != null ? stimulants.hashCode() : 0);
        result = 31 * result + (orientation != null ? orientation.hashCode() : 0);
        result = 31 * result + (abortion != null ? abortion.hashCode() : 0);
        result = 31 * result + (euthanasia != null ? euthanasia.hashCode() : 0);
        return result;
    }
}
