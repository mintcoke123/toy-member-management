export default class View {
  constructor() {
    // 검색 입력 및 버튼
    this.searchInput = document.getElementById("search");
    this.searchBtn = document.getElementById("search-btn");

    // 결과 출력 영역
    this.resultBox = document.getElementById("result");

    // 점수 항목 출력 영역
    this.fields = {
      absenteeism: document.getElementById("absent"),
      punctuality: document.getElementById("arriving"),
      referralsPerWeek: document.getElementById("refer"),
      thankYouContribution: document.getElementById("thank"),
      avgVisitorPerWeek: document.getElementById("visiter"),
      weeklyGoal: document.getElementById("121"),
      trainingParticipation: document.getElementById("training"),
      total: document.getElementById("total"),
    };

    // 숨겨진 점수 표시용 strong 태그
    this.color = document.getElementById("color");
    this.neededScore = document.getElementById("needed-score");
    this.remain = document.getElementById("remain");
  }

  showScore(
    absenteeism,
    punctuality,
    referralsPerWeek,
    thankYouContribution,
    avgVisitorPerWeek,
    weeklyGoal,
    trainingParticipation,
    total
  ) {
    const values = [
      absenteeism,
      punctuality,
      referralsPerWeek,
      thankYouContribution,
      avgVisitorPerWeek,
      weeklyGoal,
      trainingParticipation,
      total,
    ];

    const keys = Object.keys(this.fields);
    keys.forEach((key, index) => {
      this.fields[key].textContent = values[index];
    });

    this.resultBox.style.display = "block";
  }

  colorGreen() {
    this.color.style.color = "green";
    this.color.textContent = "Green!";
  }

  colorYellow() {
    this.color.style.color = "yellow";
    this.color.textContent = "AMBER!(Go Green!!)";
  }

  colorRed() {
    this.color.style.color = "red";
    this.color.textContent = "RED!";
  }

  colorBlack() {
    this.color.style.color = "Black";
    this.color.textContent = "GREY!";
  }

  show65(advice) {
    this.neededScore.style.display = "block";
    this.neededScore.innerHTML = advice;
  }

  hideAdvice() {
    this.neededScore.style.display = "none";
  }

  showRemain(remain) {
    this.remain.style.display = "block";
    this.remain.innerHTML = `<strong>남은 점수: ${remain}<strong></br>`;
  }

  hideRemain() {
    this.remain.style.display = "none";
  }
}
