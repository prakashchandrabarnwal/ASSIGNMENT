var React = require('react');


var Heading=require("./Heading.jsx");


var Headings = React.createClass({
    render: function () {
        var headings = this.props.headings.map(function (name, index) {
            return (<Heading key={"heading-" + index} heading={name}/>);
        });

        return (<tr className='table-th'>{headings} </tr>);
    }
});


module.exports =Headings;
