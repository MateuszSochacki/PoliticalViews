package com.react.reacttest.model;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "economy", schema = "ii302782", catalog = "")
public class EconomyEntity {
    private int idEconomy;
    private String rich;
    private String corpTax;
    private String minWage;
    private String incTax;
    private String ground;
    private String education;
    private String healthcare;
    private String monopolies;
    private String retirenment;
    private String tradeUnions;
    private String vat;
    private String controls;
    private Byte protectTariffs;
    private Byte protectLicenses;
    private Byte antiDumping;
    private Byte exchangeRate;
    private Byte welfarePoverty;
    private Byte welfareUnemployed;
    private Byte welfareMin;
    private Byte welfarePension;
    private Collection<UserEntity> users;

    @Id
    @Column(name = "idEconomy")
    public int getIdEconomy() {
        return idEconomy;
    }

    public void setIdEconomy(int idEconomy) {
        this.idEconomy = idEconomy;
    }

    @Basic
    @Column(name = "rich")
    public String getRich() {
        return rich;
    }

    public void setRich(String rich) {
        this.rich = rich;
    }

    @Basic
    @Column(name = "corpTax")
    public String getCorpTax() {
        return corpTax;
    }

    public void setCorpTax(String corpTax) {
        this.corpTax = corpTax;
    }

    @Basic
    @Column(name = "minWage")
    public String getMinWage() {
        return minWage;
    }

    public void setMinWage(String minWage) {
        this.minWage = minWage;
    }

    @Basic
    @Column(name = "incTax")
    public String getIncTax() {
        return incTax;
    }

    public void setIncTax(String incTax) {
        this.incTax = incTax;
    }

    @Basic
    @Column(name = "ground")
    public String getGround() {
        return ground;
    }

    public void setGround(String ground) {
        this.ground = ground;
    }

    @Basic
    @Column(name = "education")
    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    @Basic
    @Column(name = "healthcare")
    public String getHealthcare() {
        return healthcare;
    }

    public void setHealthcare(String healthcare) {
        this.healthcare = healthcare;
    }

    @Basic
    @Column(name = "monopolies")
    public String getMonopolies() {
        return monopolies;
    }

    public void setMonopolies(String monopolies) {
        this.monopolies = monopolies;
    }

    @Basic
    @Column(name = "retirenment")
    public String getRetirenment() {
        return retirenment;
    }

    public void setRetirenment(String retirenment) {
        this.retirenment = retirenment;
    }

    @Basic
    @Column(name = "tradeUnions")
    public String getTradeUnions() {
        return tradeUnions;
    }

    public void setTradeUnions(String tradeUnions) {
        this.tradeUnions = tradeUnions;
    }

    @Basic
    @Column(name = "VAT")
    public String getVat() {
        return vat;
    }

    public void setVat(String vat) {
        this.vat = vat;
    }

    @Basic
    @Column(name = "controls")
    public String getControls() {
        return controls;
    }

    public void setControls(String controls) {
        this.controls = controls;
    }

    @Basic
    @Column(name = "protectTariffs")
    public Byte getProtectTariffs() {
        return protectTariffs;
    }

    public void setProtectTariffs(Byte protectTariffs) {
        this.protectTariffs = protectTariffs;
    }

    @Basic
    @Column(name = "protectLicenses")
    public Byte getProtectLicenses() {
        return protectLicenses;
    }

    public void setProtectLicenses(Byte protectLicenses) {
        this.protectLicenses = protectLicenses;
    }

    @Basic
    @Column(name = "antiDumping")
    public Byte getAntiDumping() {
        return antiDumping;
    }

    public void setAntiDumping(Byte antiDumping) {
        this.antiDumping = antiDumping;
    }

    @Basic
    @Column(name = "exchangeRate")
    public Byte getExchangeRate() {
        return exchangeRate;
    }

    public void setExchangeRate(Byte exchangeRate) {
        this.exchangeRate = exchangeRate;
    }

    @Basic
    @Column(name = "welfarePoverty")
    public Byte getWelfarePoverty() {
        return welfarePoverty;
    }

    public void setWelfarePoverty(Byte welfarePoverty) {
        this.welfarePoverty = welfarePoverty;
    }

    @Basic
    @Column(name = "welfareUnemployed")
    public Byte getWelfareUnemployed() {
        return welfareUnemployed;
    }

    public void setWelfareUnemployed(Byte welfareUnemployed) {
        this.welfareUnemployed = welfareUnemployed;
    }

    @Basic
    @Column(name = "welfareMin")
    public Byte getWelfareMin() {
        return welfareMin;
    }

    public void setWelfareMin(Byte welfareMin) {
        this.welfareMin = welfareMin;
    }

    @Basic
    @Column(name = "welfarePension")
    public Byte getWelfarePension() {
        return welfarePension;
    }

    public void setWelfarePension(Byte welfarePension) {
        this.welfarePension = welfarePension;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        EconomyEntity that = (EconomyEntity) o;

        if (idEconomy != that.idEconomy) return false;
        if (rich != null ? !rich.equals(that.rich) : that.rich != null) return false;
        if (corpTax != null ? !corpTax.equals(that.corpTax) : that.corpTax != null) return false;
        if (minWage != null ? !minWage.equals(that.minWage) : that.minWage != null) return false;
        if (incTax != null ? !incTax.equals(that.incTax) : that.incTax != null) return false;
        if (ground != null ? !ground.equals(that.ground) : that.ground != null) return false;
        if (education != null ? !education.equals(that.education) : that.education != null) return false;
        if (healthcare != null ? !healthcare.equals(that.healthcare) : that.healthcare != null) return false;
        if (monopolies != null ? !monopolies.equals(that.monopolies) : that.monopolies != null) return false;
        if (retirenment != null ? !retirenment.equals(that.retirenment) : that.retirenment != null) return false;
        if (tradeUnions != null ? !tradeUnions.equals(that.tradeUnions) : that.tradeUnions != null) return false;
        if (vat != null ? !vat.equals(that.vat) : that.vat != null) return false;
        if (controls != null ? !controls.equals(that.controls) : that.controls != null) return false;
        if (protectTariffs != null ? !protectTariffs.equals(that.protectTariffs) : that.protectTariffs != null)
            return false;
        if (protectLicenses != null ? !protectLicenses.equals(that.protectLicenses) : that.protectLicenses != null)
            return false;
        if (antiDumping != null ? !antiDumping.equals(that.antiDumping) : that.antiDumping != null) return false;
        if (exchangeRate != null ? !exchangeRate.equals(that.exchangeRate) : that.exchangeRate != null) return false;
        if (welfarePoverty != null ? !welfarePoverty.equals(that.welfarePoverty) : that.welfarePoverty != null)
            return false;
        if (welfareUnemployed != null ? !welfareUnemployed.equals(that.welfareUnemployed) : that.welfareUnemployed != null)
            return false;
        if (welfareMin != null ? !welfareMin.equals(that.welfareMin) : that.welfareMin != null) return false;
        if (welfarePension != null ? !welfarePension.equals(that.welfarePension) : that.welfarePension != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idEconomy;
        result = 31 * result + (rich != null ? rich.hashCode() : 0);
        result = 31 * result + (corpTax != null ? corpTax.hashCode() : 0);
        result = 31 * result + (minWage != null ? minWage.hashCode() : 0);
        result = 31 * result + (incTax != null ? incTax.hashCode() : 0);
        result = 31 * result + (ground != null ? ground.hashCode() : 0);
        result = 31 * result + (education != null ? education.hashCode() : 0);
        result = 31 * result + (healthcare != null ? healthcare.hashCode() : 0);
        result = 31 * result + (monopolies != null ? monopolies.hashCode() : 0);
        result = 31 * result + (retirenment != null ? retirenment.hashCode() : 0);
        result = 31 * result + (tradeUnions != null ? tradeUnions.hashCode() : 0);
        result = 31 * result + (vat != null ? vat.hashCode() : 0);
        result = 31 * result + (controls != null ? controls.hashCode() : 0);
        result = 31 * result + (protectTariffs != null ? protectTariffs.hashCode() : 0);
        result = 31 * result + (protectLicenses != null ? protectLicenses.hashCode() : 0);
        result = 31 * result + (antiDumping != null ? antiDumping.hashCode() : 0);
        result = 31 * result + (exchangeRate != null ? exchangeRate.hashCode() : 0);
        result = 31 * result + (welfarePoverty != null ? welfarePoverty.hashCode() : 0);
        result = 31 * result + (welfareUnemployed != null ? welfareUnemployed.hashCode() : 0);
        result = 31 * result + (welfareMin != null ? welfareMin.hashCode() : 0);
        result = 31 * result + (welfarePension != null ? welfarePension.hashCode() : 0);
        return result;
    }

    @OneToMany(mappedBy = "economy")
    public Collection<UserEntity> getUsers() {
        return users;
    }

    public void setUsers(Collection<UserEntity> userEntities) {
        this.users = userEntities;
    }
}
