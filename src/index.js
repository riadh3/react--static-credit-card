import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"



const Main = ()=>
   
<div className="credit">
    <div className="main-card">
    <h1>CREDIT CARD</h1>
    <img src="https://i.imgur.com/8mNCpfE.png" className="sim" />

    <div className="data">
       <span className="pan">7253 3256 7895 1245</span><br />
       <div className="code-validity">
           <span className="code">4522</span><br />

           <div className=" validity-code" >
           <span className="left-label">VALID<br />THRU</span>
           </div>
           <div className="exp-date">
                  <div className="upper-label">MONTH/YEAR</div>
                  <div className="date">11/50</div>
              </div>
         
       </div>
       <span className="name">CARDHOLDER</span>
    </div>
    <div className="visa-logo">
       <img className="visa" src="https://i.ebayimg.com/images/g/oLoAAOxyzHxRKY87/s-l300.jpg" />
    </div> 

    </div>


</div>
ReactDOM.render(<Main />, document.getElementById('root'));