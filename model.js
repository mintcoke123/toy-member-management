import members from "./medical_members.js";

export default class Model {
  constructor() {
    this.members = members;
    this.certainMember;
  }

  findByName(name) {
    return this.members.find((member) => member.name === name);
  }

  extractAbsenteeism(member) {
    return member?.scores?.absenteeism ?? null;
  }

  extractPunctuality(member) {
    return member?.scores?.punctuality ?? null;
  }

  extractReferralsPerWeek(member) {
    return member?.scores?.referralsPerWeek ?? null;
  }

  extractThankYouContribution(member) {
    return member?.scores?.thankYouContribution ?? null;
  }

  extractAvgVisitorPerWeek(member) {
    return member?.scores?.avgVisitorPerWeek ?? null;
  }

  extractWeeklyGoal(member) {
    return member?.scores?.weeklyGoal ?? null;
  }

  extractTrainingParticipation(member) {
    return member?.scores?.trainingParticipation ?? null;
  }

  extractTotal(member) {
    return member?.scores?.total ?? null;
  }

  findColor(total) {
    if (total >= 70) return "green";
    if (total >= 50) return "yellow";
    if (total >= 30) return "red";
    return "black";
  }

  ifBorder(total) {
    return total == 65 || total == 45 || total == 25;
  }

  userInput(input) {
    this.certainMember = input;
  }

  giveAdvice65(member) {
    this.advice = "<strong>조금만 더 힘냅시다!</strong><br>";

    // 1️⃣ 리퍼럴 점수 (20점 만점)
    const referralScore = this.extractReferralsPerWeek(member);
    if (referralScore == 15) {
      this.advice += "<strong>-리퍼럴 1.2건 이상으로!</strong><br>";
    } else if (referralScore == 10) {
      this.advice += "<strong>-리퍼럴 1건 이상으로!</strong><br>";
    } else if (referralScore == 5) {
      this.advice += "<strong>-리퍼럴 0.75건 이상으로!</strong><br>";
    } else if (referralScore == 0) {
      this.advice += "<strong>-리퍼럴 0.5건 이상으로!</strong><br>";
    }

    // 2️⃣ 감사장 점수 (15점 만점)
    const thankYouScore = this.extractThankYouContribution(member);
    if (thankYouScore == 10) {
      this.advice += "<strong>-감사장 1억 이상으로!</strong><br>";
    } else if (thankYouScore == 5) {
      this.advice += "<strong>-감사장 5천만 이상으로!</strong><br>";
    } else if (thankYouScore == 0) {
      this.advice += "<strong>-감사장 2.5천만 이상으로!</strong><br>";
    }

    // 3️⃣ 주당 평균 비지터 점수 (20점 만점)
    const avgVisitorScore = this.extractAvgVisitorPerWeek(member);
    if (avgVisitorScore == 15) {
      this.advice += "<strong>-비지터 0.6명 이상으로!</strong><br>";
    } else if (avgVisitorScore == 10) {
      this.advice += "<strong>-비지터 0.4명 이상으로!</strong><br>";
    } else if (avgVisitorScore == 5) {
      this.advice += "<strong>-비지터 0.2명 이상으로!</strong><br>";
    } else if (avgVisitorScore == 0) {
      this.advice += "<strong>-비지터 0.1명 이상으로!</strong><br>";
    }

    // 4️⃣ 원투원 점수 (10점 만점)
    const oneToOneScore = this.extractWeeklyGoal(member);
    if (oneToOneScore == 5) {
      this.advice += "<strong>-원투원 미팅 2회 이상으로!</strong><br>";
    } else if (oneToOneScore == 0) {
      this.advice += "<strong>-원투원 미팅 1회 이상으로!</strong><br>";
    }

    // 5️⃣ 트레이닝 점수 (10점 만점)
    const trainingScore = this.extractTrainingParticipation(member);
    if (trainingScore == 5) {
      this.advice += "<strong>-트레이닝 20점 이상으로!</strong><br>";
    } else if (trainingScore == 0) {
      this.advice += "<strong>-트레이닝 10점 이상으로!</strong><br>";
    }

    this.advice += "<strong>중 택 1</strong>";
    return this.advice;
  }
}
