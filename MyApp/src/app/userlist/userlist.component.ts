import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { DataCountService } from '../DataCount.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './userlist.component.html',

})
export class UsersListComponent implements OnInit {
  Users: any = [];
  Count?:number
  constructor(public crudService: CrudService,private dataService:DataCountService,private router:Router) {}
  ngOnInit() {
    this.fetchUsers();
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}

  fetchUsers() {
    return this.crudService.getUsers().subscribe((res: {}) => {
      this.Users = res;
      this.dataService.setCountData(this.Users.length) 
    this.dataService.countData$.subscribe(x=>  this.Count=x)
    });
  }
  delete(id: any) {
    if (window.confirm('Really?')) {
      this.crudService.deleteUser(id).subscribe((res) => {
        this.fetchUsers();
      });
    }
  }
}