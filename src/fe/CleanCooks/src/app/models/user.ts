export class User {
  uid: number;
  username: string;
  email: string;
  insta: string;
  description: string;
  matches: number[];

  constructor(uid: number, username: string, email: string, insta: string, matches: number[], description: string) {
    this.uid = uid;
    this.username = username;
    this.email = email;
    this.insta = insta;
    this.matches = matches;
    this.description = description;
  }

}
