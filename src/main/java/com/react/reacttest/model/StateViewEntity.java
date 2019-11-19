package com.react.reacttest.model;

import javax.persistence.*;

@Entity
@Table(name = "StateView", schema = "ii302782", catalog = "")
public class StateViewEntity {
    private int idStateView;
    private String environment;
    private String autonomy;
    private String zyzdem;
    private String votingReq;
    private String militaryService;
    private String foreignPolicy;
    private String immigrationReq;
    private String immigrationRights;
    private String media;

    @Id
    @Column(name = "idStateView")
    public int getIdStateView() {
        return idStateView;
    }

    public void setIdStateView(int idStateView) {
        this.idStateView = idStateView;
    }

    @Basic
    @Column(name = "environment")
    public String getEnvironment() {
        return environment;
    }

    public void setEnvironment(String environment) {
        this.environment = environment;
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
    @Column(name = "zyzdem")
    public String getZyzdem() {
        return zyzdem;
    }

    public void setZyzdem(String zyzdem) {
        this.zyzdem = zyzdem;
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
    @Column(name = "media")
    public String getMedia() {
        return media;
    }

    public void setMedia(String media) {
        this.media = media;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        StateViewEntity that = (StateViewEntity) o;

        if (idStateView != that.idStateView) return false;
        if (environment != null ? !environment.equals(that.environment) : that.environment != null) return false;
        if (autonomy != null ? !autonomy.equals(that.autonomy) : that.autonomy != null) return false;
        if (zyzdem != null ? !zyzdem.equals(that.zyzdem) : that.zyzdem != null) return false;
        if (votingReq != null ? !votingReq.equals(that.votingReq) : that.votingReq != null) return false;
        if (militaryService != null ? !militaryService.equals(that.militaryService) : that.militaryService != null)
            return false;
        if (foreignPolicy != null ? !foreignPolicy.equals(that.foreignPolicy) : that.foreignPolicy != null)
            return false;
        if (immigrationReq != null ? !immigrationReq.equals(that.immigrationReq) : that.immigrationReq != null)
            return false;
        if (immigrationRights != null ? !immigrationRights.equals(that.immigrationRights) : that.immigrationRights != null)
            return false;
        if (media != null ? !media.equals(that.media) : that.media != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idStateView;
        result = 31 * result + (environment != null ? environment.hashCode() : 0);
        result = 31 * result + (autonomy != null ? autonomy.hashCode() : 0);
        result = 31 * result + (zyzdem != null ? zyzdem.hashCode() : 0);
        result = 31 * result + (votingReq != null ? votingReq.hashCode() : 0);
        result = 31 * result + (militaryService != null ? militaryService.hashCode() : 0);
        result = 31 * result + (foreignPolicy != null ? foreignPolicy.hashCode() : 0);
        result = 31 * result + (immigrationReq != null ? immigrationReq.hashCode() : 0);
        result = 31 * result + (immigrationRights != null ? immigrationRights.hashCode() : 0);
        result = 31 * result + (media != null ? media.hashCode() : 0);
        return result;
    }
}
