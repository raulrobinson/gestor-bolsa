import { AuthMsalImplementation } from './auth-msal-implementation.repository';
import { IAuthRepository } from '../domain/repositories/auth-interface.repository';


export const _authMsalImplementation:IAuthRepository<void> = new AuthMsalImplementation();
