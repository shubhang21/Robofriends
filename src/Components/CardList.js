import React from 'react';
import Card from './Card';




const CardList= ({ robots }) =>
{
   
	return(
		<div className="">
		{
			robots .map((user,i)=>
			{
				
		
				return(
	    				<Card name={robots[i].name} 
	    				key={i}
	    				id={robots[i].id} 
	    				email={robots[i].email}/>
	    				);
			}
			)
		}
	 	</div>
			);
	
}


export default CardList;