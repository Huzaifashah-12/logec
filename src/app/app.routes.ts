import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { GotAProjectComponent } from './got-a-project/got-a-project.component';
import { ProcessComponent } from './process/process.component';
import { CareerComponent } from './career/career.component';
import { ClientsComponent } from './clients/clients.component';
import { TestonimalsComponent } from './testonimals/testonimals.component';
import { ManifestoComponent } from './manifesto/manifesto.component';

export const routes: Routes = [

      {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
 { path: 'contact', component: ContactComponent },
 { path: 'work', component: WorkComponent },
   { path: 'got-a-project', component: GotAProjectComponent },
    { path: 'process', component: ProcessComponent },
    { path: 'careers', component: CareerComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'testonimals', component: TestonimalsComponent },
    { path: 'manifesto', component: ManifestoComponent },
];
