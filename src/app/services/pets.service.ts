import { petInterface } from 'src/app/models/petInterface';
import { catInterface } from 'src/app/models/petInterface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PetsService {
  constructor(private httpClient: HttpClient) {}
  public edition:boolean = false;
  public petData = {
    tipomascota: '',
    breed: '',
    caracter: '',
    hair_type: '',
    size: '',
    weight: '',
    picture: '',
    _id: '',
  };

  public clearPet() {
    this.petData = {
      tipomascota:'',
      breed: '',
      caracter: '',
      hair_type: '',
      size: '',
      weight: '',
      picture: '',
      _id: '',
    };
  }

  public editItem(item: any) {
    this.petData = item;
    this.edition = true;
  }

  public getPets() {
    return this.httpClient.get('https://back-pets-frandl92.vercel.app/pets');
  }
  public getCats() {
    return this.httpClient.get('https://back-pets-frandl92.vercel.app/cats');
  }
  public postPet(newPet: any) {
    return this.httpClient.post('https://back-pets-frandl92.vercel.app/pets', newPet);
  }
  public postCat(newCat: any) {
    return this.httpClient.post('https://back-pets-frandl92.vercel.app/cats', newCat);
  }
  public patchPet(petID: any, editedPet: any) {
    return this.httpClient.patch(
      'https://back-pets-frandl92.vercel.app/pets/' + petID,
      editedPet
    );
  }
  public patchCat(catID: any, editedCat: any) {
    return this.httpClient.patch(
      'https://back-pets-frandl92.vercel.app/cats/' + catID,
      editedCat
    );
  }

  public deletePet(petID: any) {
    return this.httpClient.delete('https://back-pets-frandl92.vercel.app/pets/' + petID);
  }
  public deleteCat(petID: any) {
    return this.httpClient.delete('https://back-pets-frandl92.vercel.app/cats/' + petID);
  }
}
