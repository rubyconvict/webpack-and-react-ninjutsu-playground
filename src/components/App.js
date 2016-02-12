var App = React.createClass({
  getInitialState: function(){
    return {
      signedIn: null,
      currentUser: null
    };
  },
  componentWillMount: function(){
    $.ajax({
      url: "/is_signed_in",
      method: "GET",
      dataType: "json"
    }).success(function(response){
      this.setSignedIn(response);
    }.bind(this));
  },
  componentDidMount: function(){
    Main();
  },
  setSignedIn: function(response){
    this.setState({ signedIn: response.signed_in, currentUser: $.parseJSON(response.current_user) });
    console.log(Home);
  },
  render: function(){
    // <RouteHandler signedIn={this.state.signedIn} />
    return (
      {React.cloneElement(this.props.children, {someExtraProp: 'something'})}
    );
  }
});
