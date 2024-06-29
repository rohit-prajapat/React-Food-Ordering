import { useState } from "react";

function Heading(){
    

    let [btnName,setbtnName]=useState("LogIn");
    return(
     <nav className="heading">
         <div>
           <img className="swiggy-logo" src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Emblem.png"/>
         </div>
         <ul>
           <li>Home</li>
           <li>About Us</li>
           <li>Cart</li>
           <button  onClick={()=>{
              // console.log(btnName +" ->");
              setbtnName(()=>{
                if(btnName == "LogIn")
                {
                  
                  return "logOut";
                  console.log(btnName);
                }
                else {
                  return  "LogIn";
                  console.log(btnName);
                }
              })

           }} >{btnName}</button>
         </ul>
     </nav>
   );
}

export default Heading;