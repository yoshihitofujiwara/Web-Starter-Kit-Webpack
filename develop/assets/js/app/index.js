var app = app || {};

/* --------------------------------------------------------------------------
	test
--------------------------------------------------------------------------*/
jQuery(($) => {
	var base = new app.Base('Base');
	var child = new app.Child('Child', 999);


	console.log('-----------');
	base.setup();

	console.log('-----------');
	child.setup();
});
