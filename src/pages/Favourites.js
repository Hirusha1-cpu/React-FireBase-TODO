import React,{useContext} from 'react'

import { FavouritesContext } from '../store/favourites_context'
import MeetupList from '../components/meetups/MeetupList';

export const Favourites = () => {
  const favouritesCtx = useContext(FavouritesContext);

  let content;

  if(favouritesCtx.totalFavourites===0){
    content = <h1>No favourite meetups found</h1>
  }else{
    content = <MeetupList meetups={favouritesCtx.favourites} />
  }


  
  return (
    <section>
      <h1>My Favourites</h1>
      {content}
      

    </section>
  )
}

export default Favourites
