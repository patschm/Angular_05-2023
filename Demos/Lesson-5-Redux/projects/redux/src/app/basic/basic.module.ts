import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic.component';
import { BasicAComponent} from './basic-a/basic-a.component';
import { BasicBComponent} from './basic-b/basic-b.component';
import { MessageService} from './message.service';
import { environment } from '../../environments/environment';

//npm install @ngrx/store --save
import { StoreModule } from '@ngrx/store';
// npm install @ngrx/store-devtools --save
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// npm install @ngrx/effects --save
import { EffectsModule } from '@ngrx/effects';
// Recommended: npm install @ngrx/schematics --save-dev
import { reduce } from './basic-store/reducers/reducer';

@NgModule({
  declarations: [BasicComponent, BasicAComponent, BasicBComponent],
  exports:[BasicComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forRoot({ "messages":reduce }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers:[MessageService]
})
export class BasicModule { }
