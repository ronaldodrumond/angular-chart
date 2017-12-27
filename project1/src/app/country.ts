import { JsonProperty } from 'json2typescript';
import {JsonObject} from 'json2typescript';

@JsonObject
export class Country {

  @JsonProperty('country', String)
  country: string = undefined;

  @JsonProperty('percentage', Number)
  percentage: number = undefined;
}
