import { STORAGE_KEY } from './../config/storage-keys.config';
import { Injectable } from '@angular/core';
import { UserDTO } from '../models/acount.dto';

@Injectable()
export class LocalStorageService {
    
    constructor() {}

    getLocalUser(): UserDTO {
        let account  = localStorage.getItem(STORAGE_KEY.localUser)
        if(account == null) {
            return null
        }

        return JSON.parse(account)
    }

    setLocalUser(obj: UserDTO) {
        if(obj == null) {
            localStorage.removeItem(STORAGE_KEY.localUser)
        } else {
            localStorage.setItem(STORAGE_KEY.localUser, JSON.stringify(obj))
        }
    }

}