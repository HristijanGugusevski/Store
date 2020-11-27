import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { UserModel } from '../Models/user.model';
import { Repository } from '../Services/Repository';

@Component({
  selector: 'tableData',
  templateUrl: './tableData.component.html'
})
export class TableDataComponent {
  users: UserModel[];
  i: number = 0;

  userdata: any = [
    {
      name: "fsdfasd", addr: "dsfsdaf"
    }];

  constructor(private repo: Repository) {
    this.repo.GetAllUsers();
    console.log("test");
  }

  get GetUsers(): UserModel[] {
    return this.repo.users;
  }

}
