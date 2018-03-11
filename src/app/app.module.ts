import { BrowserModule } from '@angular/platform-browser';
import { NgModule , isDevMode } from '@angular/core';
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { fromJS, Map } from 'immutable';

import { AppComponent } from './app.component';
import { IAppState, rootReducer, INITIAL_STATE } from './store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 // constructor(ngRedux: NgRedux<IAppState>){
  constructor(ngRedux: NgRedux<Map<string, any>>, devTools: DevToolsExtension){
    var enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, fromJS(INITIAL_STATE), [], enhancers);
  }
 }
