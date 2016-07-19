'use strict';

describe('ngInterview.api.students', function() {

	beforeEach(module('ngInterview.api.students'));

	describe('studentsService', function() {

		it('should be instantiated', inject(function(studentsService) {
			expect(studentsService).toBeDefined();
		}));

	});

});
