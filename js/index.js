'use babel'

import angular from 'angular'
import Giphy from 'giphy-api'
import appDirective from './directives/app'

const app = angular.module('app', [])

app.directive('appDirective', appDirective)
