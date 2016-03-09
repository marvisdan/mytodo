'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
app.controller('MainCtrl', function ($scope, localStorageService) {
  var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function () {
      localStorageService.set('todos', $scope.todos);
    }, true);
    // 'Item1','Item2','Item3'

    $scope.addTodo = function() {
      $scope.todos.push($scope.todo);
      $scope.todo ='';
    };
    $scope.removeTodo= function(index) {
      $scope.todos.splice( index, 1);
    };

  });
