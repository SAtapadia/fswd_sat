let GreetingsFunc =(props) => {

let msg = 'Hey';
let course = "React";

    return(
        <div>
            <h2>Greetings by Function</h2>
            <h3>{msg} {props.name} !</h3>
            <h4>Training day {props.train}. Currently you are working on {course}</h4>
        </div>
    );

}

let adays = 22;
ReactDOM.render(<GreetingsFunc name="Saurabh T" train ={adays}/>, document.getElementById("divFnMain"));