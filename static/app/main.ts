import {bootstrap}  from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: '<div class="container-fluid"><button type="button" class="btn btn-primary">test</button></div>'
})

export class App {
}

bootstrap(App);