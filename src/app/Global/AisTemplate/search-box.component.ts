import { Component, Inject, forwardRef, Input } from '@angular/core';
import { BaseWidget, NgAisInstantSearch } from 'angular-instantsearch';
import { connectSearchBox } from 'instantsearch.js/es/connectors';

@Component({
  selector: 'app-search-box',
  template: `
<mat-form-field>
  <input matInput #input (keyup)="this.state.refine(input.value)" [placeholder]="placeholder" [value]="this.state.query">
</mat-form-field>
`
})
export class SearchBox extends BaseWidget {
  @Input() placeholder;
  public state: {
     query: string;
     refine: Function | any;
     clear: Function;
     isSearchStalled: boolean;
     widgetParams: object;
  };
  constructor(
    @Inject(forwardRef(() => NgAisInstantSearch))
    public instantSearchParent
  ) {
    super('SearchBox');
    this.createWidget(connectSearchBox, {
      // instance options
    });
  }
}
