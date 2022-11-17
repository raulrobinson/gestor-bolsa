export class UserModel{
  private firstName:string;
  private secondName:string;
  private email:string;
  private id:string;

  constructor(firstName:string, secondName:string, email:string, id:string){
    this.email=email;
    this.secondName=secondName;
    this.id=id;
    this.firstName=firstName;
  }
}
