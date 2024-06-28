import Cards from "../Cards/Cards";
import FoodData from "../utils/FoodData";
import Restaurants from "../utils/Restaurants";
import Restaurant from "../Restaurant/Restaurant";
import './Body.css'
import { useState } from "react";

var ResData = Restaurants.map((x)=>{
  return(

    {
      id:x.info.id,
      name : x.info.name,
      avgrating : x.info.avgRating,
      cost : x.info.costForTwo,
      imgAddres :x.info.cloudinaryImageId
    
    }
    
  );
  
})


// console.log(ResData);


function Body(){

    const data = FoodData.map((x)=>{
      // console.log(x);
      return(
        
      {id : x.id,
      foodName : x.action.text,
      imgAddres : x.imageId}
      
      );  
    })
    
    const [ListOfRes,setListOfRes] = useState(ResData);
    return(
      
      <div className='Body'>
  
        <div className='BodyContaner'>
          <div className='Search'>
  
            <input className='search-input' placeholder='search...' type='text' name='name'/>
            
          </div>
  
          <div className='res-container'>
            
            <div className='res-cards'>
              {
  
                data.map((y)=>{
                return(
                  <Cards key={y.id} id={y.id} foodName={y.foodName} imgAddres={y.imgAddres}></Cards>                 
                )
                })
  
              }
            </div>
              
            <button className="filterButton" onClick={()=>{
              const filterList = ListOfRes.filter((res)=>res.avgrating>4);
              setListOfRes(filterList)
              console.log(filterList);
            }
              
            }>filter</button>
            
            <div className="Restaurants">
            {
              ListOfRes.map((x)=>{
                return (<Restaurant key={x.id} name={x.name} cost={x.cost} imgAddress={x.imgAddres} avgRating={x.avgrating}/>)
              
              })
            }
            </div>
  
                    
            
          </div>
        </div>
  
      </div>
  
    );
  }
  
export default Body;