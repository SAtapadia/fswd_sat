function PersonalMsg(props)
 {
   return (
     <div> <h2>{props.msg} </h2>
   </div>
   );
 }

let divMainObj = document.getElementById("divMainFn") ;

 ReactDOM.render(<PersonalMsg  msg="Let's start with React Learning.!!" />, divMainObj);
