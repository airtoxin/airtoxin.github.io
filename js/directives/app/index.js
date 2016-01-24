'use babel'

import { readFileSync } from 'fs'
import { join } from 'path'

class AppComponent {
    constructor() {
        this.message = 'Hello!'
    }
}

const appDirective = () => {
    return {
        restrict: 'E',
        scope: true,
        controller: AppComponent,
        controllerAs: 'cmp',
        template: readFileSync(join(__dirname, './template.html'), 'utf8')
    }
}

export default appDirective
