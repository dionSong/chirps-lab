import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';


@NgModule({
    imports: [
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
        
    ],
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
        
        
    ]
})

export class SharedModule{

}