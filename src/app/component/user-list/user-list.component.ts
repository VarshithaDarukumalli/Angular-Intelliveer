import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  skip = 0;
  limit = 10;
  currentPage = 1;
  totalPage = 0;
  userList: any[] = [];
  search = '';
  showPage = true;

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.onPageChange();
  }

  onPageChange() {
    console.log(this.skip, this.limit)
    this.userService
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
      this.userService.searchUser(text).subscribe((response: any) => {
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
