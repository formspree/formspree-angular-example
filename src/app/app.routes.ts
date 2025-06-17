import { Routes } from '@angular/router';
import { ReactiveContactFormComponent } from './reactive-contact-form/reactive-contact-form.component';
import { TemplatedContactFormComponent } from './templated-contact-form/templated-contact-form.component';

export const routes: Routes = [
    {
        path: 'reactive',
        component: ReactiveContactFormComponent,
        title: 'Reactive Contact Form'
    },{
        path: 'templated',
        component: TemplatedContactFormComponent,
        title: 'Templated Contact Form'
    }
];
