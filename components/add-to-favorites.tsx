"use client"

import React, { useState } from 'react'
import { ActionTooltip } from './forum/action-tooltip'
import { Heart, HeartOff, HeartPulse } from 'lucide-react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

const AddToFavorites = ({userId, companionId}:{userId: string, companionId: string}) => {

    const [isFavorited, setIsFavorited] = useState(false);

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
        /* await fetch('/api/') */
    }

  return (
    <div className=''>
        <ActionTooltip
              side="right"
              align="center"
              label="Add to Favorites"
            >
              <button onClick={toggleFavorite} aria-label="Favorite">
                {isFavorited ? 
                <BsHeartFill color="red" className="h-4 w-4"/>
                 : 
                <BsHeart color="red" className="h-4 w-4"/>
                  }
              </button>
               </ActionTooltip>
    </div>
  )
}

export default AddToFavorites