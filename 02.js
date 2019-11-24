class Person {
  _firstName;
  _lastName;
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(x) {
    return (this._firstName = x);
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(x) {
    return (this._lastName = x);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(x) {

    let names = x.split(" ");

    if(names.length === 2) {
        this.firstName = name[0];
        this.lastName = name[1];
    }
    return `${this.firstName} ${this.lastName}`;
  }
}
