import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimelineComponent} from './pages/timeline/timeline.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
