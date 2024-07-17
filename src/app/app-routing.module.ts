import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './component/recipe/recipe.component';
import { UserListComponent } from './component/user-list/user-list.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:UserListComponent
  },
  {
    path:'users',
    component:UserListComponent
  },
  {
    path:'recipes',
    component:RecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
