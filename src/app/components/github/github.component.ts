import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../services/myservice.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
user: any;
repos: any;
username: string;
  constructor(private myservice: MyserviceService) {
    // console.log('component connected');
   }

  search() {
     // console.log(this.username);
    this.myservice.getUsername(this.username);
    this.myservice.getUser().subscribe(User => {
      this.user = User;
    });

    this.myservice.getRepos().subscribe(Repo => {
      this.repos = Repo;
    });
  }

  ngOnInit() {
  }

}
