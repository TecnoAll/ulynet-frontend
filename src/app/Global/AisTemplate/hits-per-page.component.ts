import { Component, Inject, forwardRef } from '@angular/core';
import { BaseWidget, NgAisInstantSearch } from 'angular-instantsearch';
import { connectHitsPerPage } from 'instantsearch.js/es/connectors';

@Component({
  selector: 'app-hits-per-page',
  template: `
<mat-form-field>
  <mat-label>Items per page</mat-label>
  <mat-select (selectionChange)="state.refine($event.value)">
    <mat-option *ngFor="let item of state.items" [value]="item.value">
      {{item.label}}
    </mat-option>
  </mat-select>
</mat-form-field>
`
})
export class HitsPerPage extends BaseWidget {
  public state: {
     items: object[];
     hasNoResults: boolean;
     refine: Function;
     widgetParams: object;
  };
  constructor(
    @Inject(forwardRef(() => NgAisInstantSearch))
    public instantSearchParent
  ) {
    super('HitsPerPage');
    this.createWidget(connectHitsPerPage, {
      // instance options
      items: [
        {value: 6, label: '6 per page', default: true},
        {value: 12, label: '12 per page'},
        {value: 24, label: '24 per page'},
      ],
    });
  }
  print(event) {
    console.log(event);
  }
}
