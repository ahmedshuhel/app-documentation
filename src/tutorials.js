import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class TutorialViewModel{

    constructor(httpClient) {
        this.http = httpClient;
    }

    activate(params) {
        this.title = 'Dependency Injection';
        this.version = '0.7.1';
        this.description = 'A lightweight, extensible dependency injection container for JavaScript.';
        this.keywords = ['di', 'dependency injection', 'ioc'];
        this.dependencies = ['aurelia-metadata','aurelia-logging'];
        this.usedby = ['aurelia-binding','aurelia-framework','aurelia-router','aurelia-templating','aurelia-templating-resources'];
        this.exports = {
            classes: ['All','ClassActivator','Container','FactoryActivator','Optional','Parent','Resolver','SingletonRegistration','TransientRegistration'],
            functions: ['autoinject','factory','inject','instanceActivator','registration','singleton','transient'],
        }
        this.articles = [
            'Using Dependency Injection in Your Classes',
            'Configuring the Dependency Injection Container',
            'Specifying Object Lifetime and Autoregistration',
            'Leveraging Custom Resolvers',
            'Creating Child Containers',
            'Customizing Object Creation'
        ];
    }
}
