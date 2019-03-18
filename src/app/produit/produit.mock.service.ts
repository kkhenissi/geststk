import { Injectable } from '@angular/core';
import { Produit } from '../shared/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitMockService {
   PRODUITS: Produit[] = [];

   constructor() {
    let p1: Produit = new Produit('Livre', 50, 20);
    let p2: Produit = new Produit('Cahier', 150, 120);
    let p3: Produit = new Produit('Stylo', 250, 210);
    let p4: Produit = new Produit('Valise', 322, 120);

    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
    this.PRODUITS.push(p3);
    this.PRODUITS.push(p4);

   }
}

