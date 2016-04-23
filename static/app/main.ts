import {bootstrap}  from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {DashboardComponent} from './dashboard.component';
import {PetHistoryComponent} from './petHistory.component';

@Component({
    selector: 'app',
    template : `<nav>
    	<a [routerLink]="['Dashboard']">Dashboard</a>
    	<a [routerLink]="['History']">History</a>
	</nav>
	<router-outlet></router-outlet>`,
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'/dashboard', name: 'Dashboard', component: DashboardComponent},
  {path:'/history', name: 'History', component: PetHistoryComponent}
])

export class App {
}

bootstrap(App, [ROUTER_PROVIDERS]);