import { Character } from './../../character.interface';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.css']
})

export class CharacterComponent{
    @Input() character: Character;
    @Input() folded = true;
}