import React from "react";
import {Link} from 'react-router-dom';

export default function Nav (){
    return(
        <div className="text-white-600 body-font flex bg-[#708090]">
            <div className="container max-auto flex flex-wrap p-5 flex-col md:flex-row items-ccenter">
               <div className="flex title-font font-medium item-center text-gray-900 md-4 md:mb-0">
                <h1 className="ml-3 text-xl items-center text-white-600">quick_shoppy</h1>
                </div> 
                <div className="space-x-4 ml-[750px] p-[5px] items-center m-[5px]">
                <Link to="/" className="hover:bg-gray-500 rounded" >Home</Link>
                        <Link to="product" className="hover:bg-gray-500 rounded" >Product</Link>
                        <Link to="About" className="hover:bg-gray-500 rounded" >About</Link>
                        <Link to="Context" className="hover:bg-gray-500 rounded">Context</Link>
                        <button class="inline-flex items-center bg-gray-600 border-0 py-1 px-3 focus:outline-none hover:bg-orange-300 rounded text-base mt-4 md:mt-0">Add to cart</button>

                  </div>

            </div>

        </div>


    )

}

