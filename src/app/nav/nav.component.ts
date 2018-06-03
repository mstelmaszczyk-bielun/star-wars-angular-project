import { Component, Input } from '@angular/core';

@Component({
    selector: 'nav-page',
    templateUrl: './nav.component.html',
    styleUrls:['./nav.component.css']
})

export class NavComponent{
    @Input() count: number;
    @Input() activePage: number;

    get pages(): Array<number> {
        const pages = [];
        const pagesCount = Math.ceil(this.count/10);

        for (let i = 1; i<pagesCount; i++){
            pages.push(i);
        }

        return pages;
    }
}