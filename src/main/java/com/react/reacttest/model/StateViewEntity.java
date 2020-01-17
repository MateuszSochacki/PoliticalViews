package com.react.reacttest.model;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "stateview", schema = "ii302782", catalog = "")
public class StateViewEntity {
    private int idStateView;
    private String autonomy;
    private String zyzdem;
    private String militaryService;
    private String foreignPolicy;
    private String immigrationRights;
    private String media;
    private Byte airPollutions;
    private Byte waterPollutions;
    private Byte landPollutions;
    private Byte climateChanges;
    private Byte ageReq;
    private Byte eduReq;
    private Byte wealthReq;
    private Byte ethnicityReq;
    private Byte languageIReq;
    private Byte eduIReq;
    private Byte ethnicityIReq;
    private Byte religionReq;
    private Collection<UserEntity> users;

    @Id
    @Column(name = "idStateView")
    public int getIdStateView() {
        return idStateView;
    }

    public void setIdStateView(int idStateView) {
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
    public Byte getAirPollutions() {
        return airPollutions;
    }

    public void setAirPollutions(Byte airPollutions) {
        this.airPollutions = airPollutions;
    }

    @Basic
    @Column(name = "waterPollutions")
    public Byte getWaterPollutions() {
        return waterPollutions;
    }

    public void setWaterPollutions(Byte waterPollutions) {
        this.waterPollutions = waterPollutions;
    }

    @Basic
    @Column(name = "landPollutions")
    public Byte getLandPollutions() {
        return landPollutions;
    }

    public void setLandPollutions(Byte landPollutions) {
        this.landPollutions = landPollutions;
    }

    @Basic
    @Column(name = "climateChanges")
    public Byte getClimateChanges() {
        return climateChanges;
    }

    public void setClimateChanges(Byte climateChanges) {
        this.climateChanges = climateChanges;
    }

    @Basic
    @Column(name = "ageReq")
    public Byte getAgeReq() {
        return ageReq;
    }

    public void setAgeReq(Byte ageReq) {
        this.ageReq = ageReq;
    }

    @Basic
    @Column(name = "eduReq")
    public Byte getEduReq() {
        return eduReq;
    }

    public void setEduReq(Byte eduReq) {
        this.eduReq = eduReq;
    }

    @Basic
    @Column(name = "wealthReq")
    public Byte getWealthReq() {
        return wealthReq;
    }

    public void setWealthReq(Byte wealthReq) {
        this.wealthReq = wealthReq;
    }

    @Basic
    @Column(name = "ethnicityReq")
    public Byte getEthnicityReq() {
        return ethnicityReq;
    }

    public void setEthnicityReq(Byte ethnicityReq) {
        this.ethnicityReq = ethnicityReq;
    }

    @Basic
    @Column(name = "languageIReq")
    public Byte getLanguageIReq() {
        return languageIReq;
    }

    public void setLanguageIReq(Byte languageIReq) {
        this.languageIReq = languageIReq;
    }

    @Basic
    @Column(name = "eduIReq")
    public Byte getEduIReq() {
        return eduIReq;
    }

    public void setEduIReq(Byte eduIReq) {
        this.eduIReq = eduIReq;
    }

    @Basic
    @Column(name = "ethnicityIReq")
    public Byte getEthnicityIReq() {
        return ethnicityIReq;
    }

    public void setEthnicityIReq(Byte ethnicityIReq) {
        this.ethnicityIReq = ethnicityIReq;
    }

    @Basic
    @Column(name = "religionReq")
    public Byte getReligionReq() {
        return religionReq;
    }

    public void setReligionReq(Byte religionReq) {
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
        int result = idStateView;
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

    @OneToMany(mappedBy = "stateView")
    public Collection<UserEntity> getUsers() {
        return users;
    }

    public void setUsers(Collection<UserEntity> userEntities) {
        this.users = userEntities;
    }
}
