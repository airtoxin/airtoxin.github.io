'use babel'

import angular from 'angular'
import Giphy from 'giphy-api'
import appController from './controllers/app.js'

const app = angular.module('app', [])

app.controller('AppCtrl', appController)
