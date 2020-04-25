import { Component, Inject, forwardRef, Input } from '@angular/core';
import { BaseWidget, NgAisInstantSearch } from 'angular-instantsearch';
import { connectSortBy } from 'instantsearch.js/es/connectors';

@Component({
  selector: 'app-sort-by',
  template: `
<mat-form-field>
  <mat-label>Sort by</mat-label>
  <mat-select (selectionChange)="state.refine($event.value)">
    <mat-option *ngFor="let option of state.options" [value]="option.value">
      {{option.label}}
    </mat-option>
  </mat-select>
</mat-form-field>
`
})
export class SortBy extends BaseWidget {
  public state: {
     options: any[];
     currentRefinement: string;
     hasNoResults: boolean;
     refine: Function;
     widgetParams: object;
  };
  constructor(
    @Inject(forwardRef(() => NgAisInstantSearch))
    public instantSearchParent
  ) {
    super('SortBy');
    this.createWidget(connectSortBy, {
      // instance options
      items: [
        {value: 'ikea', label: 'Featured'},
        {value: 'ikea_price_asc', label: 'Price asc.'},
        {value: 'ikea_price_desc', label: 'Price desc.'}
      ],
    });
  }
}
