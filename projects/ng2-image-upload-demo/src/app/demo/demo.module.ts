import { NgModule } from '@angular/core';
import { ImageUploadModule } from 'angular2-image-upload';

import { BasicExampleComponent } from './basic/basic.component';
import { CustomiseComponent } from './customise/customise.component';
import { DemoComponent } from './demo.component';
import { DisabledExampleComponent } from './disabled/disabled.component';
import { EventsComponent } from './events/events.component';
import { FilterExampleComponent } from './filter/filter.component';
import { StyleComponent } from './style/style.component';
import { UploadedExampleComponent } from './uploaded/uploaded.component';

@NgModule({
  declarations: [
    DemoComponent,
    BasicExampleComponent,
    FilterExampleComponent,
    CustomiseComponent,
    EventsComponent,
    StyleComponent,
    UploadedExampleComponent,
    DisabledExampleComponent
  ],
  imports: [
    ImageUploadModule
  ]
})
export class DemoModule {
}
