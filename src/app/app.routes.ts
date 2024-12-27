import {Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DonateComponent } from './donate/donate.component';
import { EventsComponent } from './events/events.component';
import { ProgramListComponent } from './program-list/program-list.component';
import { BasicsComponent } from './program-list/basics/basics.component';
import { StenographyComponent } from './program-list/stenography/stenography.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "AboutUs",
        component: AboutUsComponent
    },
    {
        path: "ContactUs",
        component: ContactUsComponent
    },
    {
        path: "Donate",
        component:DonateComponent
    },
    {
        path:"Events",
        component:EventsComponent
    },
    {
        path:"Programs",
        component:ProgramListComponent
    },
    {
        path: "BasicsOfComputer",
        component: BasicsComponent
    },
    {
        path: "Stenography",
        component: StenographyComponent
    }
];
