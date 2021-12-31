import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './user/create/create.component';
import { ReadComponent } from './user/read/read.component';
import { ShowComponent } from './user/show/show.component';
import { UpdateComponent } from './user/update/update.component';

const routes: Routes = [
  {path:'users/read', component:ReadComponent},
  {path: '',   redirectTo: 'users/read', pathMatch: 'full' },
  {path:'users/create', component:CreateComponent},
  {path:'users/show/:userId', component:ShowComponent},
  {path:'users/update/:userId', component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
