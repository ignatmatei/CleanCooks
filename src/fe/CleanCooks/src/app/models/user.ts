export class User {
  uid: number;
  username: string;
  email: string;
  insta: string;

  constructor(uid: number, username: string, email: string, insta: string) {
    this.uid = uid;
    this.username = username;
    this.email = email;
    this.insta = insta;
  }

}
