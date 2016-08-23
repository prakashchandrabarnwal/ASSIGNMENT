module.exports = function () {
var Child = React.createClass({
  render: function () {
    return (<h1>hello</h1>);
  }
});

ReactDOM.render(<Child/>,document.getElementById("container"));

}