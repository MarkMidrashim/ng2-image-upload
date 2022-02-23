import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ImageUploadModule } from 'angular2-image-upload';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DemoModule } from './demo/demo.module';
import { ReadmeComponent } from './readme/readme.component';
import { ReadmeModule } from './readme/readme.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DemoModule,
    ReadmeModule,
    ImageUploadModule.forRoot(),
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'demo',
      pathMatch: 'prefix'
    }, {
      path: 'demo',
      component: DemoComponent
    }, {
      path: 'readme',
      component: ReadmeComponent
    }], { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
