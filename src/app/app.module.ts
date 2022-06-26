import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { PartnerComponent } from './partner/partner.component';
import { MainComponent } from './main/main.component';
import { SettleRuleComponent } from './settle-rule/settle-rule.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DataFlowComponent } from './data-flow/data-flow.component';
import { ChannelTypeComponent } from './common/channel-type/channel-type.component';

const config = {
  apiKey: 'AIzaSyAd7gm_M2TXbTpOtfQ_4rqBZLiBm2LyC6c',
  authDomain: 'sam-app-c17ad.firebaseapp.com',
  projectId: 'sam-app-c17ad',
  storageBucket: 'sam-app-c17ad.appspot.com',
  messagingSenderId: '1010518656103',
  appId: '1:1010518656103:web:0ebefb6b374c6d816000c2',
};
@NgModule({
  declarations: [
    AppComponent,
    PartnerComponent,
    MainComponent,
    SettleRuleComponent,
    DataFlowComponent,
    ChannelTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatOptionModule,
    MatCheckboxModule,
    MatInputModule,
    ScrollingModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
