import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTermComponent } from './add-term/add-term.component';
import { TermListComponent } from './term-list/term-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Term'
    },
    children: [
      {
        path: 'add-term/:id',
        component: AddTermComponent,
        data: {
          title: 'Update Term'
        }
      },
      {
        path: 'add-term',
        component: AddTermComponent,
        data: {
          title: 'Add Term'
        }
      },
      {
        path: 'term-list',
        component: TermListComponent,
        data: {
          title: 'Term List'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermRoutingModule { }
