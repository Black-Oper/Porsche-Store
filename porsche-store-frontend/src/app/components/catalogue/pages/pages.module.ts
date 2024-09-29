import { NgModule } from "@angular/core";

import { TaycanComponent } from "./taycan/taycan.component";
import { SeteUmOitoComponent } from './sete-um-oito/sete-um-oito.component';
import { NoveUmUmComponent } from './nove-um-um/nove-um-um.component';
import { PanameraComponent } from './panamera/panamera.component';
import { MacanComponent } from './macan/macan.component';
import { CayenneComponent } from './cayenne/cayenne.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        TaycanComponent,
        SeteUmOitoComponent,
        NoveUmUmComponent,
        PanameraComponent,
        MacanComponent,
        CayenneComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        TaycanComponent,
        SeteUmOitoComponent,
        NoveUmUmComponent,
        PanameraComponent,
        MacanComponent,
    ]
})
export class PagesModule {}