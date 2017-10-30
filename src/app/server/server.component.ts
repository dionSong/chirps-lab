import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.sass']
})

export class ServerComponent {
    serverId = 10;
    serverStatus = '';   

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatuts() {
        return this.serverStatus;
    }

    getColor(){
    
        return this.serverStatus === 'online' ? 'green':'red';
    }
}