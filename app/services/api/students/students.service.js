(function() {
	'use strict';

	angular
		.module('ngInterview.api.students')
		.service('StudentsService', StudentsService);

	StudentsService.$inject = [];
	function StudentsService() {

		/**
		 * Exposed functions
		 */

		this.getName = getName; // This function serves no purpose. It's just here as an example.

		/**
		 * Implementations
		 */

		function getName() {
			return 'studentsService';
		}
	}
})();
