export class User {
  uid: number;
  name: string;
  email: string;
  insta: string;

  constructor(uid: number, name: string, email: string, insta: string) {
    this.uid = uid;
    this.name = name;
    this.email = email;
    this.insta = insta;
  }

}
