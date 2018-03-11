import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from './store';
import { INCREMENT } from './actions';
import { Map } from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // constructor(private ngRedux: NgRedux<IAppState>){
  //   }
  constructor(private ngRedux: NgRedux<Map<string,any>>){}
  title = 'app';
  // with immutable, we can't access counter property like this
 // @select('counter') count;
 @select(s => s.get('counter')) count;
  // @select(['messaging', 'newMessages']) newMessages;
  // @select((s:IAppState)=>s.messaging.newMessages) newMessagesCount;

  increment(){
    this.ngRedux.dispatch({type: INCREMENT});
  }
}
