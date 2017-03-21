(function() {
	'use strict';

	angular
		.module('ngInterview.api.students')
		.service('StudentsService', StudentsService);

	StudentsService.$inject = ['$q','$http'];
	function StudentsService($q, $http) {

		this.getStudents = getStudents;
		this.searchStudent = searchStudent;

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

		function searchStudent(query) {
			var q = $q.defer();
      var request = $http({
        method: 'GET',
        // url: 'http://localhost:5000'+'/students',
        url: 'http://demo1634462.mockable.io'+'/students?movie=' +query
      });
			q.resolve(request);
			return q.promise;
		}

	}
})();
