import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: ban-types
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDZ7lo8DCKLIVcviaCWkHEf7fO6BYAylWjGw0-fZirUvRLPGgFzwAe-VifOGGxbluWHJdhKR3e0sX6FtkI'
    });

    return this.http.get(url, {headers})
  }

  getNewReleases() {

    // tslint:disable-next-line: new-parens
    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer BQDZ7lo8DCKLIVcviaCWkHEf7fO6BYAylWjGw0-fZirUvRLPGgFzwAe-VifOGGxbluWHJdhKR3e0sX6FtkI'
    // });

    // tslint:disable-next-line: no-string-literal
    return this.getQuery('browse/new-releases?limit=20').pipe(map(data => data['albums'].items
    ));
  }

getArtista(termino: string) {
 // tslint:disable-next-line: new-parens
 const headers = new HttpHeaders({
  Authorization: 'Bearer BQDZ7lo8DCKLIVcviaCWkHEf7fO6BYAylWjGw0-fZirUvRLPGgFzwAe-VifOGGxbluWHJdhKR3e0sX6FtkI'
});
 // tslint:disable-next-line: no-string-literal
 // tslint:disable-next-line: max-line-length

 // tslint:disable-next-line: no-string-literal
 // tslint:disable-next-line: max-line-length
 return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers}).pipe(map(data => data['artists'].items));
}

}
