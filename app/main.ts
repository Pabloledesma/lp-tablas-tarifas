import { bootstrap }     from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { App }  from './components/app/app';


bootstrap(App, [
	disableDeprecatedForms(),
	provideForms()
])
.catch((err: any) => console.log(err));