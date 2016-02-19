angular.module('devMtIn')
.service('profileService', function() {

this.serviceTest = function() {
  console.log('profileService is connected!');
};

this.saveProfile = function(profile) {
	localStorage.setItem('profile', JSON.stringify(profile));
	console.log(localStorage.profile);
};

this.deleteProfile = function(profile) {
	localStorage.removeItem('profile');
	console.log(localStorage.profile);
}

this.checkForProfile = function() {
	if (localStorage.getItem('profile')) {
		return JSON.parse(localStorage.getItem('profile'));

	};
	return {
		friends: [{name: 'Chris'}, {name: 'David'}, {name: 'Nick'}, {name: 'Braiden'}, {name: 'Josh'}, {name: 'Todd'}]

	}
}


});