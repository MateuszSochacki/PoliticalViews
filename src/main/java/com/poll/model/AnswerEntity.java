package com.poll.model;

import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "answer")
@NoArgsConstructor
public class AnswerEntity {
    private long idAnswer;
    private String contents;
    private Integer xValue;
    private Integer yValue;
    private QuestionEntity question;

    public AnswerEntity(long idAnswer, String contents, Integer xValue, Integer yValue, QuestionEntity question) {
        this.idAnswer = idAnswer;
        this.contents = contents;
        this.xValue = xValue;
        this.yValue = yValue;
        this.question = question;
    }

    public AnswerEntity(String contents, Integer xValue, Integer yValue) {
        this.contents = contents;
        this.xValue = xValue;
        this.yValue = yValue;
    }

    @Id
    @Column(name = "idAnswer")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long getIdAnswer() {
        return idAnswer;
    }

    public void setIdAnswer(long idAnswer) {
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
    public Integer getxValue() {
        return xValue;
    }

    public void setxValue(Integer xValue) {
        this.xValue = xValue;
    }

    @Basic
    @Column(name = "yValue")
    public Integer getyValue() {
        return yValue;
    }

    public void setyValue(Integer yValue) {
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
        int result = (int) idAnswer;
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
