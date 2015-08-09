import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class TutorialViewModel{
    module = null;
    constructor(httpClient) {
        this.http = httpClient;
    }
    activate(params) {
    }
}
