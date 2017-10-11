/**
 * Created by Monkey on 10/6/2017.
 */
const states = function($stateProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            controller: 'MainController',
            controllerAs: 'vm',
            template: require('../templates/main')
        })
        .state("otherwise", {
            url: "*path",
            template: "../templates/error-not-found"
        });

};

states.$inject = ['$stateProvider'];

module.exports = states;