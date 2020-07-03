import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MonthlyPresentationComponent } from './monthly-presentation/monthly-presentation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'monthly', component: MonthlyPresentationComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
