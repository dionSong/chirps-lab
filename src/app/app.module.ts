import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SessionService } from './session.service';



import { ServerComponent } from './server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { SingleComponent } from './components/single/single.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';

import { MessageFormComponent } from "./components/message-form/message-form.component";


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SingleComponent,
    FormComponent,
    ListComponent,
    MessageFormComponent
    

   
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    FormsModule,
    
    
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }




// Basics Structure 4
// Components
// Data binding
// Directives
// Services
// Dependency Injection
// Routing
// Obserbables
// Forms
// Pipes
// Http
// Authentication
// Optimizations & Ng Modules
// Deployment
// Animations & Testing


// Data Binding

// output data = string interpolation: from typescript to html(user) {{ data }, property binding = [property = "data"]
// Event Binding (Input?)= react to user actions (event)="expression" 
// Two way data binding = Both combined [(ngModel)]="data"




