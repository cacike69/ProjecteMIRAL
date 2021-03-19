import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const api = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  registrarUsuari(registro: any){
    return this.http.post(`${api}server/registreUsuari.php`, JSON.stringify(registro));
  }

}
