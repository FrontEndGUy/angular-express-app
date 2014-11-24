'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SignupCtrl', ['$scope', '$http', function (scope, http) {
    var user, signup;
    scope.signup = signup = {};
    signup.user = user = {};

    signup.submit = function () {
      // make sure all fields are filled out...
      // aren't you glad you're not typing out
      // scope.signup.user.firstname everytime now??

      if (!user.firstname || !user.lastname || !user.email || !user.password1 || !user.password2) {
        alert("Please fill out all the form fields!");
        return false;
      }
      if (user.password1 !== user.password2) {
        alert("Your passwords must match")
        return false;
      }
      console.log(user);

      // Make the request to the server
      var request = http.post('/signup', user);

      request.success(function (data) {
        console.log(data.msg);
      });

      request.error(function () {
        console.log(data.msg);
      });

    };

  }]);
