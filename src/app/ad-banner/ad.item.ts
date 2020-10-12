import { Type } from '@angular/core';

export class ADItem {
    constructor(public component: Type<any>, public data: any) {}
}