import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAllUsers(skip = 0, limit = 10){
    return this.http.get(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`);
  }
  
  getAllRecipes(skip = 0, limit = 10){
    return this.http.get(`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`);
  }

  searchUser(name:string){
    return this.http.get(`https://dummyjson.com/users/search?q=${name}`);
  }

  searchRecipe(name:string){
    return this.http.get(`https://dummyjson.com/recipes/search?q=${name}`);
  }
}
