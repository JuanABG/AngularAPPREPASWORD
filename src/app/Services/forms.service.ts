import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  component = new BehaviorSubject("");
  object:any;
  constructor() { }
}
