import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IUserLogin, IUserInfo } from '../../shared/interfaces';
import { SERVER_URL } from '../../shared/utils/sharedData';

@Injectable()

export class AuthService {

    authUrl: string = SERVER_URL["AuthServer"] + '/api/auth';
    isAuthenticated: boolean = false;
    userInfo: IUserInfo = {
        name: '',
        email: ''
    };
    redirectUrl: string;
    @Output() authChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private http: Http) { }

    private userAuthChanged(status: boolean) {
        this.authChanged.emit(status); //Raise changed event
    }

    private setUserInfo(name: string, email: string) {
        this.userInfo.name = name;
        this.userInfo.email = email;
    }

    login(userLogin: IUserLogin): Observable<boolean> {
        return this.http.post(this.authUrl + '/login', userLogin)
            .map((response: Response) => {
                const result = response.json();
                let loggedIn = result.status;
                this.isAuthenticated = loggedIn;
                this.userAuthChanged(loggedIn);
                if (loggedIn) {
                    this.setUserInfo(result.data.name, result.data.email);
                }
                return loggedIn;
            })
            .catch(this.handleError);
    }

    logout(): Observable<boolean> {
        return this.http.post(this.authUrl + '/logout', null)
            .map((response: Response) => {
                const loggedOut = response.json();
                this.isAuthenticated = !loggedOut;
                this.userAuthChanged(!loggedOut); //Return loggedIn status
                return status;
            })
            .catch(this.handleError);
    }

    handleError(error: any) {
        console.error('server error:', error);
        if (error instanceof Response) {
            let errMessage = '';
            try {
                errMessage = error.json().error;
            } catch (err) {
                errMessage = error.statusText;
            }
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'server auth error');
    }

}
