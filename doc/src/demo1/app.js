export class Welcome {
  firstName = 'John';
  lastName = 'Doe';

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  save() {
    alert(`${this.fullName} saved.`);
  }
}
