import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class TutorialViewModel{

    module = null;

    constructor(httpClient) {
        this.http = httpClient;
    }

    activate(params) {
        if (params.module == 'binding') {
            this.module = {
                title: 'Binding',
                version: '0.3.4',
                description: 'Binding',
                // keywords: ['di', 'dependency injection', 'ioc'],
                // dependencies: ['aurelia-metadata','aurelia-logging'];
                // usedby: ['aurelia-binding','aurelia-framework','aurelia-router','aurelia-templating','aurelia-templating-resources'];
                // exports: {
                //     classes: ['All','ClassActivator','Container','FactoryActivator','Optional','Parent','Resolver','SingletonRegistration','TransientRegistration'],
                //     functions: ['autoinject','factory','inject','instanceActivator','registration','singleton','transient'],
                // }
                articles: [
                    'Binding stuff.'
                ]
            };
        } else {
            this.module = {
                title: 'Dependency Injection',
                version: '0.7.1',
                description: 'A lightweight, extensible dependency injection container for JavaScript.',
                keywords: ['di', 'dependency injection', 'ioc'],
                dependencies: ['aurelia-metadata','aurelia-logging'],
                usedby: ['aurelia-binding','aurelia-framework','aurelia-router','aurelia-templating','aurelia-templating-resources'],
                exports: {
                    classes: ['All','ClassActivator','Container','FactoryActivator','Optional','Parent','Resolver','SingletonRegistration','TransientRegistration'],
                    functions: ['autoinject','factory','inject','instanceActivator','registration','singleton','transient'],
                },
                articles: [
                    'Using Dependency Injection in Your Classes',
                    'Configuring the Dependency Injection Container',
                    'Specifying Object Lifetime and Autoregistration',
                    'Leveraging Custom Resolvers',
                    'Creating Child Containers',
                    'Customizing Object Creation'
                ]
            };
        }
    }
}
