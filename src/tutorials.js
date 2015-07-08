import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class ChildRouter{

    constructor(httpClient) {
        this.http = httpClient;
    }

    activate(params) {

        // grab the current tutorial
        let tutorial = params.tutorials || 'dependency-injection';

        // and grab the data associated with this library
        // return this.http.get(`something/${tutorial}`);
    }
}
