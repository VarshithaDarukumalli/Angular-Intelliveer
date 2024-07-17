import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit{
  skip = 0;
  limit = 10; 
  currentPage = 1;
  totalPage = 0;
  recipeList:any[] = [];
  search = '';
  showPage = true;
  

  constructor(private dataService:DataService){}

  ngOnInit():void{
    this.onPageChange();
  }

  onPageChange(){

    console.log(this.skip, this.limit)

    this.dataService.getAllRecipes(this.skip,this.limit).subscribe((response:any)=>{
      console.log(this,response)
      this.recipeList = response.recipes;
      console.log(this.recipeList)

      this.totalPage = Math.ceil(response.total / this.limit);
    })
  }

  onInputChange(){
    const text = this.search.trim();
    if(text){
      this.showPage = false;
      this.dataService.searchRecipe(text).subscribe((response:any)=>{
        this.recipeList = response.recipes;
      })
    }else{
      this.showPage = true;
      this.skip = 0;
      this.currentPage = 1;
      this.onPageChange();
    }
  }

  onNext(){
    this.skip = this.skip + this.limit;
    this.currentPage++;
    this.onPageChange();
  }

  onPrev(){
    this.skip = this.skip - this.limit;
    this.currentPage--;
    this.onPageChange();
  }
}

