import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';

import {
  RootStoreState,
} from '../../root-store';
import { take } from 'rxjs/internal/operators/take';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-scrolling-display',
  templateUrl: './scrolling-display.component.html',
  styleUrls: ['./scrolling-display.component.scss']
})
export class ScrollingDisplayComponent implements OnInit {
  private items$: Observable<number[]>;

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {
    this.items$ = of([1, 2, 3, 4, 5, 6, 7, 8]).pipe(
      // map(x => x.slice(0, 5))
    );
  }

}
