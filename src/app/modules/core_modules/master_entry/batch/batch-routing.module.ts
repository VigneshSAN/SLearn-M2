import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBatchComponent } from './add-batch/add-batch.component';
import { BatchListComponent } from './batch-list/batch-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Batch'
    },
    children: [
      {
        path: 'add-batch/:id',
        component: AddBatchComponent,
        data: {
          title: 'Update Batch'
        }
      },
      {
        path: 'add-batch',
        component: AddBatchComponent,
        data: {
          title: 'Add Batch'
        }
      },
      {
        path: 'batch-list',
        component: BatchListComponent,
        data: {
          title: 'Batch List'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchRoutingModule { }
