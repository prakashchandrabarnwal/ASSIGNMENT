var React = require('react');
var Modal=require("./Modal.jsx");




var AppBtn=React.createClass({

    getInitialState(){
        return {view: {showModal: false},
        }
    },
    handleHideModal(){
        this.setState({view: {showModal: false}})
    },
    handleShowModal(){
        this.setState({view: {showModal: true},
        })
    },
    render :function(){
        var headingStyle = {
            fontSize: '19px',
            display:"block",
            margin:'auto',
            marginBottom: "6px"
        };
        return (<div>
            <button className="btn btn-success"  data-toggle="modal" data-target="#myModal" onClick={this.handleShowModal}>InsertData</button>
            {this.state.view.showModal ? <Modal handleHideModal={this.handleHideModal} type="InsertData"/> : null}

            <button style={headingStyle} className="btn btn-success" onClick={this.props.fn}>Search</button>
        </div>);
    }
});

module.exports =AppBtn;