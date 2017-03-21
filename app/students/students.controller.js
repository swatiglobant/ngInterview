(function() {
	'use strict';

	angular
		.module('ngInterview.students')
		.controller('StudentsController', StudentsController);

	StudentsController.$inject = ['$scope','StudentsService'];
	function StudentsController($scope, StudentsService) {

		var vm = this;
		activate();

		function activate() {
			// Initialization code goes here
			vm.Students = [];
			vm.orderByValue = 'firstname';
			getStudents();
		}

		function getStudents() {
      return StudentsService.getStudents()
        .then(function(data) {
					console.log(data);
          vm.Students = data.data.student;
      });
		}

		vm.removeStudent = function (id) {
			StudentsService.deleteStudent(id).then(function (data) {
				console.log("Student removed");
			},
			function (error) {
				console.log("Error while processing request");
			});
		}

		vm.setOrderByValue = function (value) {
			vm.orderByValue = value;
		}
	}
})();
