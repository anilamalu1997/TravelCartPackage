import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Package } from '../models/package';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(
    private http:HttpClient
  ) { }

  fetchAllPackages():Observable<Package[]>{
    return this.http
    .get<Package[]>('/assets/json/packages.json')
    .pipe(
      map(packages => {
        return packages.map((pkg, index) =>{
         pkg.id = "package" + index;
         
         return pkg;
        
        })
      })
    );
   }

   fetchPackageDetail(id: string) : Observable<Package | null >{
     return this.fetchAllPackages()
     .pipe(
       map(result => result.filter(item => item.id === id)),
       map(result => result.length > 0 ? result[0]:null)
     )
     
     }

     
}
