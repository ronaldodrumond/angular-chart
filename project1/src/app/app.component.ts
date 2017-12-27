import { Component } from '@angular/core';
import { JsonConvert, OperationMode, ValueCheckingMode } from 'json2typescript';
import { Country } from './country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chart';

  countries: string[];
  percentages: number[];

  constructor ()
  {
    const jsonObject: object =
    [
      {
        "cdn": 7.91232087886e+11,
        "p2p": 1.849009162936e+12,
        "total": 2.640241250822e+12,
        "percentage": 71,
        "country": "PL"
      },
      {
        "cdn": 2.27316416561e+11,
        "p2p": 8.77714468396e+11,
        "total": 1.105030884957e+12,
        "percentage": 80,
        "country": "GB"
      },
      {
        "cdn": 1.25605578735e+11,
        "p2p": 5.20776856844e+11,
        "total": 6.46382435579e+11,
        "percentage": 81,
        "country": "DE"
      },
      {
        "cdn": 8.0122635479e+10,
        "p2p": 1.88864781168e+11,
        "total": 2.68987416647e+11,
        "percentage": 71,
        "country": "NL"
      }
    ];

    // Choose your settings
    // Check the detailed reference in the chapter "JsonConvert class properties and methods"
    let jsonConvert: JsonConvert = new JsonConvert();
    jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
    jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL; // never allow null

    // Map to the country class
    let country: Country;
    try {
        country = jsonConvert.deserialize(jsonObject, Country);
        for (let index = 0; index < Object.keys(country).length; index++) {
          console.log(country[index]);
          this.countries[index] = country[index].country;
          this.percentages[index] = country[index].percentage;
        }
        console.log(this.countries);
        console.log(this.percentages);
    } catch (e) {
        console.log((<Error>e));
    }

  }

}
