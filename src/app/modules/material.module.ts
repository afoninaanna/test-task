import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        MatInputModule,
        MatFormFieldModule
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        MatInputModule,
        MatFormFieldModule
    ]
})
export class MaterialModule { }