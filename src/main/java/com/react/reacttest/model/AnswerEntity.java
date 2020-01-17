package com.react.reacttest.model;

import javax.persistence.*;

@Entity
@Table(name = "answer", schema = "ii302782", catalog = "")
public class AnswerEntity {
    private int idAnswer;
    private String contents;
    private Byte xValue;
    private Byte yValue;
    private QuestionEntity question;

    @Id
    @Column(name = "idAnswer")
    public int getIdAnswer() {
        return idAnswer;
    }

    public void setIdAnswer(int idAnswer) {
        this.idAnswer = idAnswer;
    }

    @Basic
    @Column(name = "contents")
    public String getContents() {
        return contents;
    }

    public void setContents(String contents) {
        this.contents = contents;
    }

    @Basic
    @Column(name = "xValue")
    public Byte getxValue() {
        return xValue;
    }

    public void setxValue(Byte xValue) {
        this.xValue = xValue;
    }

    @Basic
    @Column(name = "yValue")
    public Byte getyValue() {
        return yValue;
    }

    public void setyValue(Byte yValue) {
        this.yValue = yValue;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AnswerEntity that = (AnswerEntity) o;

        if (idAnswer != that.idAnswer) return false;
        if (contents != null ? !contents.equals(that.contents) : that.contents != null) return false;
        if (xValue != null ? !xValue.equals(that.xValue) : that.xValue != null) return false;
        if (yValue != null ? !yValue.equals(that.yValue) : that.yValue != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idAnswer;
        result = 31 * result + (contents != null ? contents.hashCode() : 0);
        result = 31 * result + (xValue != null ? xValue.hashCode() : 0);
        result = 31 * result + (yValue != null ? yValue.hashCode() : 0);
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "question_idQuestion", referencedColumnName = "idQuestion", nullable = false)
    public QuestionEntity getQuestion() {
        return question;
    }

    public void setQuestion(QuestionEntity questionEntity) {
        this.question = questionEntity;
    }
}
