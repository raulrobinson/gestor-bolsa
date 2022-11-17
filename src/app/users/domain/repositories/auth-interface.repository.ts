export interface IAuthRepository<S>{
  setupProvider(params?:any):void;
  login(params?:any):S;
  logOut():void;
}
