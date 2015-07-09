import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class TutorialViewModel{

    constructor(httpClient) {
        this.http = httpClient;
    }

    activate(params) {
        this.heading = 'ehy';
    }
}
