class Greetings extends React.Component{

    constructor(props){
        super(props);
        this.state={
            msg: "Hello"
        }
    }

    render() {
        
        return(<framgment>
            <h2>Greetings Class</h2>
            <b>  {this.state.msg} <i> {this.props.name} !</i></b>
        </framgment>
        );
    }

}

ReactDOM.render(<Greetings name="Kartik K"/>, document.getElementById("divMain"));