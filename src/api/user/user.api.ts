import { AxiosResponse } from 'axios';
import { privateApi } from '../index';
import { IUser } from '../../interfaces';
import { ChangePasswordData, IUserApi, UpdateUserData } from './user.types';

class UserApi implements IUserApi {
  endpoint = 'users' as const;

  getUser(): Promise<AxiosResponse<IUser>> {
    return privateApi.get(this.endpoint);
  }

  updateUser(updateUserData: UpdateUserData): Promise<AxiosResponse<IUser>> {
    return privateApi.put(this.endpoint, updateUserData);
  }

  changePassword(changePasswordData: ChangePasswordData): Promise<AxiosResponse> {
    return privateApi.put(this.endpoint + '/changePassword', changePasswordData);
  }
}

export const userApi = new UserApi();
