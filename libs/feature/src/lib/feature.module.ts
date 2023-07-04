import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureRoutes } from './lib.routes';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(featureRoutes), RouterModule],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
})
export class FeatureModule {}
