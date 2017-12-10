
//fonts
import './font_imports';

//vendor css
import './main.scss';

//vendor js
import angular from 'angular';

//app modules
import MainModule from './-rsp-game-module/main.module';

angular
    .module('rsp', [MainModule]);

