import { Category } from '../model/category.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
    private _categoryUrl = 'app/smokes/categories.json';

    constructor(private _http: Http) {}

    getCategories(): Observable<Category[]> {
        return this._http.get(this._categoryUrl)
            .map((response: Response) => <Category[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}