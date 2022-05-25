import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnerComponent } from './partner/partner.component';
import { MainComponent } from './main/main.component';
import { SettleRuleComponent } from './settle-rule/settle-rule.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'index.html',
    pathMatch: 'full',
  },
  {
    path: 'partner.html',
    component: PartnerComponent,
  },
  {
    path: 'index.html',
    component: MainComponent,
  },
  {
    path: 'settle-rule.html',
    component: SettleRuleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
