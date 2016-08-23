var React = require('react');

var Main = require('./Main.jsx');

var headings = ['NAME', 'LOCATION', 'GENDER','PHONE','AGE','UPDATE','DELETE'];



React.render(
	<Main headings={headings}/>,
	document.getElementById('main')
)