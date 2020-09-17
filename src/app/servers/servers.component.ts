import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private allowNewServer = true;
  private ServerCreationStatus = 'No servers added';
  private serverId = 10;
  serverName: string;
  serverStatus: string;
  servers: Array<object>;

  constructor() {
    this.serverStatus = Math.random() > .5 ? 'Online' : 'Offline';
  }

  onCreateServer(): void {
    this.allowNewServer = false;
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000);
    this.ServerCreationStatus = 'Server Added Successfully!';
    const thisServer = this.getServerStatus();
    this.servers ? this.servers.push(thisServer) : this.servers = [thisServer];
  }
  ngOnInit(): void {
  }


  onUpdateServerName(e): void {
    this.serverName = e.target.value;
  }

  getServerStatus(): object {
    return {
      allowNewServer: this.allowNewServer,
      ServerCreationStatus: this.ServerCreationStatus,
      serverName: this.serverName,
      serverStatus: this.serverStatus,
      serverId: this.serverId
    };
  }

}
