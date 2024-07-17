import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  skip = 0;
  limit = 10;
  currentPage = 1;
  totalPage = 0;
  userList: any[] = [];
  search = '';
  showPage = true;

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.onPageChange();
  }

  onPageChange() {
    console.log(this.skip, this.limit)
    this.dataService
      .getAllUsers(this.skip, this.limit)
      .subscribe((response: any) => {
        this.userList = response.users;
        this.totalPage = Math.ceil(response.total / this.limit);
      });
  }

  onInputChange() {
    const text = this.search.trim();
    if (text) {
      this.showPage = false;
      this.dataService.searchUser(text).subscribe((response: any) => {
        this.userList = response.users;
      });
    } else {
      this.showPage = true;
      this.skip = 0;
      this.currentPage = 1;
      this.onPageChange();
    }
  }

  onNext() {
    this.skip = this.skip + this.limit;
    this.currentPage++;
    this.onPageChange();
  }

  onPrev() {
    this.skip = this.skip - this.limit;
    this.currentPage--;
    this.onPageChange();
  }
}
