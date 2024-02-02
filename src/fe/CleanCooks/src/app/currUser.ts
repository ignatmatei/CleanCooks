export class currUser {
  username : string = "";
  private static instance : currUser;
  private constructor() {
  }
  public static getInstance() : currUser {
    if (!currUser.instance) {
      currUser.instance = new currUser();
    }
    return currUser.instance;
  }
  public addUsername(username : string) : void {
    this.username = username;
  }
}
