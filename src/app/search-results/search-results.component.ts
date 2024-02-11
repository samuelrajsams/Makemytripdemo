import { Component, Input } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatList} from '@angular/material/list';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  // @Input() flights: any[] | undefined;
 flights: any =  [
  {
    "airline": "Delta Airlines",
    "origin": "New York",
    "destination": "Los Angeles",
    "departure": "08:00 AM",
    "arrival": "11:00 AM",
    "duration": "3h",
    "price": "$250"
  },
  {
    "airline": "United Airlines",
    "origin": "Chicago",
    "destination": "Boston",
    "departure": "09:30 AM",
    "arrival": "12:30 PM",
    "duration": "3h",
    "price": "$280"
  },
  {
    "airline": "American Airlines",
    "origin": "Boston",
    "destination": "Miami",
    "departure": "11:00 AM",
    "arrival": "02:00 PM",
    "duration": "3h",
    "price": "$300"
  },
  {
    "airline": "Southwest",
    "origin": "Denver",
    "destination": "Las Vegas",
    "departure": "01:00 PM",
    "arrival": "03:00 PM",
    "duration": "2h",
    "price": "$200"
   },
   {
    "airline": "Delta Airlines",
    "origin": "New York",
    "destination": "Los Angeles",
    "departure": "08:00 AM",
    "arrival": "11:00 AM",
    "duration": "3h",
    "price": "$250"
  },
  {
    "airline": "United Airlines",
    "origin": "Chicago",
    "destination": "Boston",
    "departure": "09:30 AM",
    "arrival": "12:30 PM",
    "duration": "3h",
    "price": "$280"
  },
  {
    "airline": "American Airlines",
    "origin": "Boston",
    "destination": "Miami",
    "departure": "11:00 AM",
    "arrival": "02:00 PM",
    "duration": "3h",
    "price": "$300"
  },
  {
    "airline": "Southwest",
    "origin": "Denver",
    "destination": "Las Vegas",
    "departure": "01:00 PM",
    "arrival": "03:00 PM",
    "duration": "2h",
    "price": "$200"
   },
   {
    "airline": "Delta Airlines",
    "origin": "New York",
    "destination": "Los Angeles",
    "departure": "08:00 AM",
    "arrival": "11:00 AM",
    "duration": "3h",
    "price": "$250"
  },
  {
    "airline": "United Airlines",
    "origin": "Chicago",
    "destination": "Boston",
    "departure": "09:30 AM",
    "arrival": "12:30 PM",
    "duration": "3h",
    "price": "$280"
  },
  {
    "airline": "American Airlines",
    "origin": "Boston",
    "destination": "Miami",
    "departure": "11:00 AM",
    "arrival": "02:00 PM",
    "duration": "3h",
    "price": "$300"
  },
  {
    "airline": "Southwest",
    "origin": "Denver",
    "destination": "Las Vegas",
    "departure": "01:00 PM",
    "arrival": "03:00 PM",
    "duration": "2h",
    "price": "$200"
  }
]

}
