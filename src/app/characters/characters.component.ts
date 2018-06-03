import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwapiResponse } from './../swapiResponse.interface';


@Component({
    selector: 'characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.css']
})

export class CharactersComponent{
    data: SwapiResponse = null;
    selectedCharacter: number = null;
    page: number = 1;

    selectCharacter(index: number): void {
        this.selectedCharacter = index;
    }

    constructor(
        router: Router,
        activatedRoute: ActivatedRoute
    )  {
        activatedRoute.params
            .subscribe((params: {page: string}) => {
                if(params.page === undefined) {
                    router.navigate(['/1/person']);
                }
                
                const page = +params.page;

                this.page = page;
                this.data = null;

                fetch(`https://swapi.co/api/people/?page=${this.page}&format=json`)
                    .then(response => response.json())
                    .then(response => this.data = response);
                });
            }
        }