import './Restaurant.css'
import RES_URL from '../utils/RestaurantUrl';
function Restaurant({id,name,cost,avgRating,imgAddress}){
    // const {id,name,cost,imgAddress,avgRating} = {...props}
    return(
        <div className="Restaurant">
            <ul className="ResData">
                <li><img className="resImage" src={RES_URL +imgAddress} alt="image" /></li>
                <li>{name}</li>
                <li>{cost}</li>
                <li>Rating-{avgRating}</li>
            </ul>
        </div> 
    );
}

export default Restaurant;


