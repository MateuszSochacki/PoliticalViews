package com.react.reacttest.model;

import javax.persistence.*;

@Entity
@Table(name = "Economy", schema = "ii302782", catalog = "")
public class EconomyEntity {
    private int idEconomy;
    private String rich;
    private String minWage;
    private String protectionism;
    private String corpTax;
    private String incTax;
    private String ground;
    private String welfare;
    private String education;
    private String healthcare;
    private String monopolies;
    private String retirenment;
    private String tradeUnions;
    private String vat;
    private String controls;

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
    @Column(name = "minWage")
    public String getMinWage() {
        return minWage;
    }

    public void setMinWage(String minWage) {
        this.minWage = minWage;
    }

    @Basic
    @Column(name = "protectionism")
    public String getProtectionism() {
        return protectionism;
    }

    public void setProtectionism(String protectionism) {
        this.protectionism = protectionism;
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
    @Column(name = "welfare")
    public String getWelfare() {
        return welfare;
    }

    public void setWelfare(String welfare) {
        this.welfare = welfare;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        EconomyEntity that = (EconomyEntity) o;

        if (idEconomy != that.idEconomy) return false;
        if (rich != null ? !rich.equals(that.rich) : that.rich != null) return false;
        if (minWage != null ? !minWage.equals(that.minWage) : that.minWage != null) return false;
        if (protectionism != null ? !protectionism.equals(that.protectionism) : that.protectionism != null)
            return false;
        if (corpTax != null ? !corpTax.equals(that.corpTax) : that.corpTax != null) return false;
        if (incTax != null ? !incTax.equals(that.incTax) : that.incTax != null) return false;
        if (ground != null ? !ground.equals(that.ground) : that.ground != null) return false;
        if (welfare != null ? !welfare.equals(that.welfare) : that.welfare != null) return false;
        if (education != null ? !education.equals(that.education) : that.education != null) return false;
        if (healthcare != null ? !healthcare.equals(that.healthcare) : that.healthcare != null) return false;
        if (monopolies != null ? !monopolies.equals(that.monopolies) : that.monopolies != null) return false;
        if (retirenment != null ? !retirenment.equals(that.retirenment) : that.retirenment != null) return false;
        if (tradeUnions != null ? !tradeUnions.equals(that.tradeUnions) : that.tradeUnions != null) return false;
        if (vat != null ? !vat.equals(that.vat) : that.vat != null) return false;
        if (controls != null ? !controls.equals(that.controls) : that.controls != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idEconomy;
        result = 31 * result + (rich != null ? rich.hashCode() : 0);
        result = 31 * result + (minWage != null ? minWage.hashCode() : 0);
        result = 31 * result + (protectionism != null ? protectionism.hashCode() : 0);
        result = 31 * result + (corpTax != null ? corpTax.hashCode() : 0);
        result = 31 * result + (incTax != null ? incTax.hashCode() : 0);
        result = 31 * result + (ground != null ? ground.hashCode() : 0);
        result = 31 * result + (welfare != null ? welfare.hashCode() : 0);
        result = 31 * result + (education != null ? education.hashCode() : 0);
        result = 31 * result + (healthcare != null ? healthcare.hashCode() : 0);
        result = 31 * result + (monopolies != null ? monopolies.hashCode() : 0);
        result = 31 * result + (retirenment != null ? retirenment.hashCode() : 0);
        result = 31 * result + (tradeUnions != null ? tradeUnions.hashCode() : 0);
        result = 31 * result + (vat != null ? vat.hashCode() : 0);
        result = 31 * result + (controls != null ? controls.hashCode() : 0);
        return result;
    }
}
