
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { SignalR, SignalRConnection } from 'ng2-signalr';

@Injectable()
export class ConnectionResolver implements Resolve<SignalRConnection> {

    constructor(private _signalR: SignalR) { }

    resolve() {
        console.log('ConnectionResolver. Resolving...');
        return this._signalR.connect();
    }
} 
