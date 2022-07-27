class Greetings extends React.Component{
    render() {
        
        return (
        <div> Welcome {this.props.name},  {this.props.msg} !! </div>
        );
      }
    }
    
    let divMainObj = document.getElementById("divMainCls");
    ReactDOM.render(<Greetings name="Saurabh" msg="Good Morning" />, divMainObj)