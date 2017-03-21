'use strict';

describe('ngInterview.students module', function() {

	var $controller;

	beforeEach(function() {
		module('ngInterview.students');
		inject(function(_$controller_) {
			$controller = _$controller_;
		});
	});

	describe('StudentsController', function() {

		it('should instantiate', function() {
			var studentsCtrl = $controller('StudentsController');
			expect(studentsCtrl).toBeDefined();
		});

		it('should set a default value for the `Students` model', function() {
			var studentsCtrl = $controller('StudentsController');
      expect(studentsCtrl.Students.length).toBe(0);
    });

		it('should set a default value for the `orderByValue` model', function() {
			var studentsCtrl = $controller('StudentsController');
      expect(studentsCtrl.orderByValue).toBe('firstname');
    });


	});

});
