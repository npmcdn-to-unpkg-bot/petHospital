import {bootstrap}  from 'angular2/platform/browser';
import {Component, bind} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {DashboardComponent} from './dashboard.component';
import {PetHistoryComponent} from './petHistory.component';

@Component({
    selector: 'app',
    template : `<nav class="navbar navbar-default">
        <div class="collapse navbar-collapse">
    	<ul class="nav nav-pills">
    		<li><a [routerLink]="['Dashboard']">Dashboard</a></li>
    	    <li><a [routerLink]="['History']">History</a></li>
	    </ul>
	    </div>
	</nav>
	<router-outlet></router-outlet>`,
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'*', name: 'Dashboard', component: DashboardComponent},
  {path:'/dashboard', name: 'Dashboard', component: DashboardComponent},
  {path:'/history', name: 'History', component: PetHistoryComponent}
])

export class App {
}

bootstrap(App, [ROUTER_PROVIDERS, bind(LocationStrategy).toClass(HashLocationStrategy)]);