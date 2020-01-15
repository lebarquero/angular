import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormSchematicComponent } from './form-schematic/form-schematic.component';
import { NavSchematicComponent } from './nav-schematic/nav-schematic.component';
import { TableSchematicComponent } from './table-schematic/table-schematic.component';
import { DashboardSchematicComponent } from './dashboard-schematic/dashboard-schematic.component';
import { TreeSchematicComponent } from './tree-schematic/tree-schematic.component';
import { DragDropSchematicComponent } from './drag-drop-schematic/drag-drop-schematic.component';

const routes: Routes = [
  { path: 'form', component: FormSchematicComponent },
  { path: 'nav', component: NavSchematicComponent},
  { path: 'table', component: TableSchematicComponent },
  { path: 'dashboard', component: DashboardSchematicComponent },
  { path: 'tree', component: TreeSchematicComponent },
  { path: 'drag-drop', component: DragDropSchematicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
