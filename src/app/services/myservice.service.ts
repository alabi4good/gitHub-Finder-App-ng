import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyserviceService {

private username = 'alabi4good';
private client_id = 'ca956b864f6e8de50909';
private client_secret: 'b6c64339319c19745a91871f0b9e9742c7a955fb';

  constructor(private http: Http) {
    // console.log('my service works...');
  }

  getUser() {
    return  this.http.get('https://api.github.com/users/' + this.username).map(res => res.json());
  }

  getRepos() {
    return  this.http.get('https://api.github.com/users/' + this.username + '/repos').map(res => res.json());
  }

  getUsername(username: string) {
    this.username = username;
  }

}
