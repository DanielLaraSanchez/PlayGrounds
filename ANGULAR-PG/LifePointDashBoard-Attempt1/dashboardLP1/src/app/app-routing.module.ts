import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './components/data/data.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DailyscriptsComponent } from './components/pages/dailyscripts/dailyscripts.component';
import { PendingscriptsComponent } from './components/pages/pendingscripts/pendingscripts.component';
import { FailedscriptsComponent } from './components/pages/failedscripts/failedscripts.component';
import { HistoryComponent } from './components/pages/history/history.component';
import { GraphsComponent } from './components/pages/graphs/graphs.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dailyScripts',
    component: DailyscriptsComponent
  },
  {
    path: 'pendingScripts',
    component: PendingscriptsComponent
  },
  {
    path: 'failedScripts',
    component: FailedscriptsComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'graphs',
    component: GraphsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
