(function() {
	'use strict';

	angular
		.module('ngInterview.api.students')
		.service('StudentsService', StudentsService);

	StudentsService.$inject = ['$q','$http'];
	function StudentsService($q, $http) {

		this.getStudents = getStudents;
		this.deleteStudent = deleteStudent;
		this.addStudent = addStudent;

		function getStudents() {
      var q = $q.defer();
      var request = $http({
        method: 'GET',
        // url: 'http://localhost:5000'+'/students',
        url: 'http://demo1634462.mockable.io'+'/students'
      });
			q.resolve(request);
			return q.promise;
		}

		function deleteStudent(studentId) {
			var q = $q.defer();
			var request = $http({
				method: 'DELETE',
				// url: 'http://localhost:5000'+'/students',
				url: 'http://demo1634462.mockable.io'+'/students/'+ studentId
			});
			q.resolve(request);
			return q.promise;
		}

		function addStudent(data) {
			var q = $q.defer();
			var request = $http({
				method: 'POST',
				// url: 'http://localhost:5000'+'/students',
				url: 'http://demo1634462.mockable.io'+'/students/',
				data: { student: data }
			});
			q.resolve(request);
			return q.promise;
		}

	}
})();
