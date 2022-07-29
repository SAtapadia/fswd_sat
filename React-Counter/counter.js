let CounterButton = () => {
    const {useState} = React;

   let [cc,setCC]  = useState(27);

    
let onClickHandler = () =>{
    cc++;
    setCC(cc);    
}

 return( 
    <div class="text-center">
    <button class="btn btn-light" onClick={onClickHandler} > Hit Me.!</button> <br/>
    <br/>
        
        <h1><span class="badge bg-info">{ cc }</span></h1>
    </div>
 );
}

ReactDOM.render(<CounterButton/>, document.getElementById("divMain"));