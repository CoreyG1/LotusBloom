import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Card } from './card.model'
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { CardApiList } from './cardApiList.model';

@Injectable()
export class CardService{
    constructor(private http: HttpClient){}
    getCard(string): Observable<any>{
        return this.http.get<CardApiList>('https://api.magicthegathering.io/v1/cards?name='+string, {responseType: 'json'})  
    }   
    
    
}