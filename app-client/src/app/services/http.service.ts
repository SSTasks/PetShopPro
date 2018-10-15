import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import {Pet, Dog, Cat, Hamster} from './pets';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) {}

    // http get any pet
    public getPets(): Observable<Pet[]> {
        return this.http.get<Pet[]>('/pets')
            .pipe(
                tap(pets => console.log(pets)),
                catchError(this.handleError('getPets', []))
            );
    }

    // http add new pet
    public addPet(pet, type): Observable<Pet[]> {
        let newPet = createPet(pet, type); // create new pet

        return this.http.post<Pet[]>(`/pets`, newPet)
            .pipe(
                tap(pets => console.log(pets)),
                catchError(this.handleError('getPets', []))
            );
    }

    // http add new pet
    public delPet(id): Observable<Pet[]> {
        return this.http.delete<Pet[]>(`/pets/${id}`)
            .pipe(
                tap(pets => console.log(pets)),
                catchError(this.handleError('getPets', []))
            );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(`${operation} failed: ${error.message}`); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}


// create new pet
function createPet(pet, type) {
    if (type === 'dog') {
        let name = pet.name,
            price = pet.price,
            color = pet.color;

        return new Dog(name, price, color);
    }

    if (type === 'cat') {
        let name = pet.name,
            price = pet.price,
            color = pet.color,
            fluffy = pet.fluffy === 3;

        return new Cat(name, price, color, fluffy);
    }

    if (type === 'hamster') {
        let price = pet.price,
            color = pet.color,
            fluffy = pet.fluffy === 3;

        return new Hamster(price, color, fluffy);
    }
}