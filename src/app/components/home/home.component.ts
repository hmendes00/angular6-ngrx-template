import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserModel } from '../../models/standup-us/user-model';
import {
  RootStoreState,
  UserStoreActions
} from '../../root-store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private items$: Observable<UserModel[]>;
  private isLoading$: Observable<boolean>;

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {

    this.store$.dispatch(
      new UserStoreActions.RequestLatestAction()
    );
  }

}
