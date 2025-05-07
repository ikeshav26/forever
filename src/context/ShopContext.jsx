import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext=createContext();

const ShopContextProvider=(props)=>{
    const currency='$';
    const delivery_fee=10;
    const [search,setsearch]=useState('');
    const [Showsearch, setShowsearch] = useState(false)
    const [cartitems, setcartitems] = useState({})
    
    const addtoCart=async(itemId,size)=>{
        
    }
    const value={
        products,currency,delivery_fee,search,Showsearch,setsearch,setShowsearch
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;