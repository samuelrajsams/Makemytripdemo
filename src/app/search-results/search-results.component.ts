import { Component, Input } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatList} from '@angular/material/list';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  @Input() flights: any[] | undefined;
}
