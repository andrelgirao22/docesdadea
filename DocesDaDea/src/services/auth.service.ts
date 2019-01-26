import { LocalStorageService } from './local-storage.service';
import { API_CONFIG } from './../config/api.config';
import { CredenciaisDTO } from './../models/credenciais.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO } from '../models/acount.dto';

@Injectable()
export class AuthService {

    constructor(public http: HttpClient, public storageService: LocalStorageService) {}

    authenticate(creds: CredenciaisDTO) {
        return this.http.post(`${API_CONFIG.baseUrl}/auth/login`, 
            creds, 
            {
                observe: "response",
                responseType: "text"
            })
    }

    successfullLogin(obj: UserDTO) {
        this.storageService.setLocalUser(obj)
    } 

    logout() {
        this.storageService.setLocalUser(null)
    }

}