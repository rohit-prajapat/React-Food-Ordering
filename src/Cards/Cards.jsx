function Cards({id,foodName,imgAddres}){

    return(
  
        <div  className='card'>
  
          <ul>
  
            <li>
              <img className='food-imge' src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +imgAddres}/>
            </li>
  
            <li> <h3 className='food-name'>{foodName}</h3></li>
  
            {/* <li><p className='food-rating'>rating - {props.rating}</p></li> */}
          </ul>
           
  
            
  
        </div>
  
    );
  
  }
  
export default Cards;