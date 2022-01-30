import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefectsComponent } from './pages/defects/defects.component';
import { DataResolver } from './services/data.resolver';

const routes: Routes = [
  { path: '', resolve: [DataResolver] , children: [
    { path: '', component: DefectsComponent },
    { path: ':id', component: DefectsComponent }
  ] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
