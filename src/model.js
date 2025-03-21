import members from "./medical_members.js";

export default class Model {
  constructor() {
    this.members = members;
  }

  findByName(name) {
    return this.members.find((member) => member.name === name);
  }

  findData(name) {
    return {};
  }
}
