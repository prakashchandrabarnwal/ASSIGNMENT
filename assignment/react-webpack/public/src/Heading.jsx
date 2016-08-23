
var React = require('react');



var Heading = React.createClass({
    render: function () {
        var headingStyle = {
            backgroundColor: 'FloralWhite',
            fontSize: '19px'
        };
        return (<th style={headingStyle}> {this.props.heading} </th>);
    }
});

module.exports =Heading;