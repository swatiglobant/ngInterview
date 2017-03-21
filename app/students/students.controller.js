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
			vm.addStudentClick = false;
			vm.student = {};
			getStudents();
		}

		function getStudents() {
      return StudentsService.getStudents()
        .then(function(data) {
					console.log(data);
          vm.Students = data.data.student;
      });
		}
		vm.addStudentOnClick = function () {
			vm.addStudentClick = true;
			vm.student = {};
		};

		vm.addStudentOnClose = function () {
			vm.addStudentClick = false;
		};

		vm.removeStudent = function (id) {
			StudentsService.deleteStudent(id).then(function (response) {
				console.log("Student removed");
			},
			function (error) {
				console.log("Error while processing request");
			});
		};

		vm.setOrderByValue = function (value) {
			vm.orderByValue = value;
		};

		vm.addStudent = function functionName() {
			console.log(vm.student);
			if ($scope.form.$valid) {
				StudentsService.addStudent(vm.student).then(function (response) {
					console.log("Student added successfully!!");
				}, function (error) {
					console.log("Error while processing request");
				});
				vm.student = {};
				vm.addStudentClick = false;
			}
			activate();
		};
	}
})();
