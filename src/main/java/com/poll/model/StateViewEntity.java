package com.poll.model;

import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "stateview")
@NoArgsConstructor
public class StateViewEntity {
    private long idStateView;
    private String autonomy;
    private String zyzdem;
    private String militaryService;
    private String foreignPolicy;
    private String immigrationRights;
    private String media;
    private Boolean airPollutions;
    private Boolean waterPollutions;
    private Boolean landPollutions;
    private Boolean climateChanges;
    private Boolean ageReq;
    private Boolean eduReq;
    private Boolean wealthReq;
    private Boolean ethnicityReq;
    private Boolean languageIReq;
    private Boolean eduIReq;
    private Boolean ethnicityIReq;
    private Boolean religionReq;
    private UserEntity user;

    public StateViewEntity(
            long idStateView, String autonomy, String zyzdem, String militaryService, String foreignPolicy,
            String immigrationRights, String media, Boolean airPollutions, Boolean waterPollutions,
            Boolean landPollutions, Boolean climateChanges, Boolean ageReq, Boolean eduReq, Boolean wealthReq,
            Boolean ethnicityReq, Boolean languageIReq, Boolean eduIReq, Boolean ethnicityIReq, Boolean religionReq,
            UserEntity user) {
        this.idStateView = idStateView;
        this.autonomy = autonomy;
        this.zyzdem = zyzdem;
        this.militaryService = militaryService;
        this.foreignPolicy = foreignPolicy;
        this.immigrationRights = immigrationRights;
        this.media = media;
        this.airPollutions = airPollutions;
        this.waterPollutions = waterPollutions;
        this.landPollutions = landPollutions;
        this.climateChanges = climateChanges;
        this.ageReq = ageReq;
        this.eduReq = eduReq;
        this.wealthReq = wealthReq;
        this.ethnicityReq = ethnicityReq;
        this.languageIReq = languageIReq;
        this.eduIReq = eduIReq;
        this.ethnicityIReq = ethnicityIReq;
        this.religionReq = religionReq;
        this.user = user;
    }

    public StateViewEntity(
            String autonomy, String zyzdem, String militaryService, String foreignPolicy,
            String immigrationRights, String media, Boolean airPollutions, Boolean waterPollutions,
            Boolean landPollutions, Boolean climateChanges, Boolean ageReq, Boolean eduReq, Boolean wealthReq,
            Boolean ethnicityReq, Boolean languageIReq, Boolean eduIReq, Boolean ethnicityIReq, Boolean religionReq,
            UserEntity user) {
        this.autonomy = autonomy;
        this.zyzdem = zyzdem;
        this.militaryService = militaryService;
        this.foreignPolicy = foreignPolicy;
        this.immigrationRights = immigrationRights;
        this.media = media;
        this.airPollutions = airPollutions;
        this.waterPollutions = waterPollutions;
        this.landPollutions = landPollutions;
        this.climateChanges = climateChanges;
        this.ageReq = ageReq;
        this.eduReq = eduReq;
        this.wealthReq = wealthReq;
        this.ethnicityReq = ethnicityReq;
        this.languageIReq = languageIReq;
        this.eduIReq = eduIReq;
        this.ethnicityIReq = ethnicityIReq;
        this.religionReq = religionReq;
        this.user = user;
    }

    @Id
    @Column(name = "idStateView")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long getIdStateView() {
        return idStateView;
    }

    public void setIdStateView(long idStateView) {
        this.idStateView = idStateView;
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

    @Basic
    @Column(name = "airPollutions")
    public Boolean getAirPollutions() {
        return airPollutions;
    }

    public void setAirPollutions(Boolean airPollutions) {
        this.airPollutions = airPollutions;
    }

    @Basic
    @Column(name = "waterPollutions")
    public Boolean getWaterPollutions() {
        return waterPollutions;
    }

    public void setWaterPollutions(Boolean waterPollutions) {
        this.waterPollutions = waterPollutions;
    }

    @Basic
    @Column(name = "landPollutions")
    public Boolean getLandPollutions() {
        return landPollutions;
    }

    public void setLandPollutions(Boolean landPollutions) {
        this.landPollutions = landPollutions;
    }

    @Basic
    @Column(name = "climateChanges")
    public Boolean getClimateChanges() {
        return climateChanges;
    }

    public void setClimateChanges(Boolean climateChanges) {
        this.climateChanges = climateChanges;
    }

    @Basic
    @Column(name = "ageReq")
    public Boolean getAgeReq() {
        return ageReq;
    }

    public void setAgeReq(Boolean ageReq) {
        this.ageReq = ageReq;
    }

    @Basic
    @Column(name = "eduReq")
    public Boolean getEduReq() {
        return eduReq;
    }

    public void setEduReq(Boolean eduReq) {
        this.eduReq = eduReq;
    }

    @Basic
    @Column(name = "wealthReq")
    public Boolean getWealthReq() {
        return wealthReq;
    }

    public void setWealthReq(Boolean wealthReq) {
        this.wealthReq = wealthReq;
    }

    @Basic
    @Column(name = "ethnicityReq")
    public Boolean getEthnicityReq() {
        return ethnicityReq;
    }

    public void setEthnicityReq(Boolean ethnicityReq) {
        this.ethnicityReq = ethnicityReq;
    }

    @Basic
    @Column(name = "languageIReq")
    public Boolean getLanguageIReq() {
        return languageIReq;
    }

    public void setLanguageIReq(Boolean languageIReq) {
        this.languageIReq = languageIReq;
    }

    @Basic
    @Column(name = "eduIReq")
    public Boolean getEduIReq() {
        return eduIReq;
    }

    public void setEduIReq(Boolean eduIReq) {
        this.eduIReq = eduIReq;
    }

    @Basic
    @Column(name = "ethnicityIReq")
    public Boolean getEthnicityIReq() {
        return ethnicityIReq;
    }

    public void setEthnicityIReq(Boolean ethnicityIReq) {
        this.ethnicityIReq = ethnicityIReq;
    }

    @Basic
    @Column(name = "religionReq")
    public Boolean getReligionReq() {
        return religionReq;
    }

    public void setReligionReq(Boolean religionReq) {
        this.religionReq = religionReq;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        StateViewEntity that = (StateViewEntity) o;

        if (idStateView != that.idStateView) return false;
        if (autonomy != null ? !autonomy.equals(that.autonomy) : that.autonomy != null) return false;
        if (zyzdem != null ? !zyzdem.equals(that.zyzdem) : that.zyzdem != null) return false;
        if (militaryService != null ? !militaryService.equals(that.militaryService) : that.militaryService != null)
            return false;
        if (foreignPolicy != null ? !foreignPolicy.equals(that.foreignPolicy) : that.foreignPolicy != null)
            return false;
        if (immigrationRights != null ? !immigrationRights.equals(that.immigrationRights) : that.immigrationRights != null)
            return false;
        if (media != null ? !media.equals(that.media) : that.media != null) return false;
        if (airPollutions != null ? !airPollutions.equals(that.airPollutions) : that.airPollutions != null)
            return false;
        if (waterPollutions != null ? !waterPollutions.equals(that.waterPollutions) : that.waterPollutions != null)
            return false;
        if (landPollutions != null ? !landPollutions.equals(that.landPollutions) : that.landPollutions != null)
            return false;
        if (climateChanges != null ? !climateChanges.equals(that.climateChanges) : that.climateChanges != null)
            return false;
        if (ageReq != null ? !ageReq.equals(that.ageReq) : that.ageReq != null) return false;
        if (eduReq != null ? !eduReq.equals(that.eduReq) : that.eduReq != null) return false;
        if (wealthReq != null ? !wealthReq.equals(that.wealthReq) : that.wealthReq != null) return false;
        if (ethnicityReq != null ? !ethnicityReq.equals(that.ethnicityReq) : that.ethnicityReq != null) return false;
        if (languageIReq != null ? !languageIReq.equals(that.languageIReq) : that.languageIReq != null) return false;
        if (eduIReq != null ? !eduIReq.equals(that.eduIReq) : that.eduIReq != null) return false;
        if (ethnicityIReq != null ? !ethnicityIReq.equals(that.ethnicityIReq) : that.ethnicityIReq != null)
            return false;
        if (religionReq != null ? !religionReq.equals(that.religionReq) : that.religionReq != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = (int) idStateView;
        result = 31 * result + (autonomy != null ? autonomy.hashCode() : 0);
        result = 31 * result + (zyzdem != null ? zyzdem.hashCode() : 0);
        result = 31 * result + (militaryService != null ? militaryService.hashCode() : 0);
        result = 31 * result + (foreignPolicy != null ? foreignPolicy.hashCode() : 0);
        result = 31 * result + (immigrationRights != null ? immigrationRights.hashCode() : 0);
        result = 31 * result + (media != null ? media.hashCode() : 0);
        result = 31 * result + (airPollutions != null ? airPollutions.hashCode() : 0);
        result = 31 * result + (waterPollutions != null ? waterPollutions.hashCode() : 0);
        result = 31 * result + (landPollutions != null ? landPollutions.hashCode() : 0);
        result = 31 * result + (climateChanges != null ? climateChanges.hashCode() : 0);
        result = 31 * result + (ageReq != null ? ageReq.hashCode() : 0);
        result = 31 * result + (eduReq != null ? eduReq.hashCode() : 0);
        result = 31 * result + (wealthReq != null ? wealthReq.hashCode() : 0);
        result = 31 * result + (ethnicityReq != null ? ethnicityReq.hashCode() : 0);
        result = 31 * result + (languageIReq != null ? languageIReq.hashCode() : 0);
        result = 31 * result + (eduIReq != null ? eduIReq.hashCode() : 0);
        result = 31 * result + (ethnicityIReq != null ? ethnicityIReq.hashCode() : 0);
        result = 31 * result + (religionReq != null ? religionReq.hashCode() : 0);
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "user_idUser", referencedColumnName = "idUser", nullable = true)
    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity userEntity) {
        this.user = userEntity;
    }
}
