export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  submit() {
    const member = this.model.findByName(this.view.searchInput.value);
    const certainTotal = this.model.extractTotal(member);
    const certainColor = this.model.findColor(certainTotal);
    if (certainColor == "green") this.view.colorGreen();
    if (certainColor == "yellow") this.view.colorYellow();
    if (certainColor == "red") this.view.colorRed();
    if (certainColor == "black") this.view.colorBlack();
    this.view.showScore(
      this.model.extractAbsenteeism(member),
      this.model.extractPunctuality(member),
      this.model.extractReferralsPerWeek(member),
      this.model.extractThankYouContribution(member),
      this.model.extractAvgVisitorPerWeek(member),
      this.model.extractWeeklyGoal(member),
      this.model.extractTrainingParticipation(member),
      this.model.extractTotal(member)
    );
    if (this.model.ifBorder(this.model.extractTotal(member))) {
      console.log("isborder pbm");
      console.log(this.model.extractTotal(member));
      this.giveAdvices(member);
    } else {
      this.view.hideAdvice();
    }
    this.giveRemain(certainTotal, certainColor);
  }

  giveAdvices(member) {
    const advice = this.model.giveAdvice65(member);
    this.view.show65(advice);
  }

  giveRemain(total, certainColor) {
    let colr = certainColor;
    if (colr == "green") {
      this.view.hideRemain();
    } else if (colr == "yellow") {
      this.view.showRemain(70 - total);
    } else if (colr == "red") {
      this.view.showRemain(50 - total);
    } else if (colr == "black") {
      this.view.showRemain(30 - total);
    }
  }

  initEventListeners() {
    this.view.searchBtn.addEventListener("click", () => {
      this.submit();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key == "Enter") {
        this.submit();
      }
    });
  }
}
