import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ComplaintFormComponent } from './complaint-form/complaint-form.component';
import { EditFormComponent } from './complaint-form/edit-form/edit-form.component';


const appRoutes: Routes = [
  {
    path: 'complaint',
    component: ComplaintFormComponent
  
  },
  {
    path: 'search',
    component : SearchComponent
  },
  { path: '',
  component: ComplaintFormComponent
  },
  {
    path: 'edit/:id',
    component:EditFormComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [ RouterModule ]
})



export class AppRoutingModule { }
