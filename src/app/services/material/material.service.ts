import { Injectable } from '@angular/core';

@Injectable()
export class MaterialService {
    materials: Array<string> = [
        'GLASS',
        'CARDBOARD',
        'PAPER',
        'PLASTIC',
        'TETRA_BRIK',
        'CORK',
        'OIL',
        'ORGANIC',
        'CLOTHING',
        'BATTERIES',
        'WOOD',
        'METAL',
        'CERAMICS',
        'GENERAL_WASTE'
    ];

    getMaterials(): Array<string> {
        return this.materials;
    }
}