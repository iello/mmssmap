exports.install = function() {
	F.route('/');
};

function view_index() {
	var self = this;
	self.view('index');
}