import Cards from "../Cards/Cards";
import FoodData from "../utils/FoodData";
import Restaurant from "../Restaurant/Restaurant";
import './Body.css'
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";


 

function Body(){

  function clearResData(Restaurants)
  {


    var ResData = Restaurants.map((x)=>{
      // x = x[0];
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

    setListOfRes(ResData);
    setfiltedList(ResData);

    
  }

    useEffect(()=>{
     
      fetchData();
    },[]);

    
    const fetchData = async ()=>{

      const url =  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        const dataF = await fetch(url);
        const json = await dataF.json();
        
        clearResData(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

        // setfiltedList();
    }
    const data = FoodData.map((x)=>{
      return(
        
      {
        id : x.id,
      foodName : x.action.text,
      imgAddres : x.imageId}
      
      );  
    })
    
   
    const [searchVal,setsearchVal] = useState("");
    const [ListOfRes,setListOfRes] = useState([]);
    const [filtedList,setfiltedList] = useState([]);

    if(ListOfRes.length === 0)
    {
      return <Shimmer/>
    }

    

    return(
      
      <div className='Body'>
  
        <div className='BodyContaner'>
          <div className='Search'>
  
            <input className='search-input' placeholder='search...' type='text' name='name' value={searchVal} onChange={(e)=>{
                setsearchVal(e.target.value);
            }}/>

            <button onClick={()=>{
             const fl = ListOfRes.filter((x)=>{
                
                return x.name.toLowerCase().includes(searchVal.toLowerCase());
              })
              setfiltedList(fl);
              

            }}>Search</button>
         
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
              setfiltedList(filterList)
            }
              
            }>filter</button>
            {/* {

               
            } */}
          
            <div className="Restaurants">
            {
              filtedList.map((x)=>{
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