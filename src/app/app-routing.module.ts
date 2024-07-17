import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './component/recipe/recipe.component';
import { UsersComponent } from './component/users/users.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:UsersComponent
  },
  {
    path:'users',
    component:UsersComponent
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
