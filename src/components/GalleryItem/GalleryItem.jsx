import { useState } from 'react';

const GalleryItem = ({ gallery, checkLikes }) => {
    // set variable for count toggle




    // const LoveText = (count) => {
    //     console.log( `inside of the LoveText the count is ${count}`);
    //     if(count === 0){
    //         return <p>No People Love This :/</p>
    //     } else if ( count > 0 ){
    //         return <p>{count} Love This!</p>
    //     } else {
    //         return <p></p>
    //     }
    // }

    // toggleLoveText = () => {
    //     // set loveText to the opposite of whatever loveText is set to
    //     setLoveText = (!loveText);
    // }

    return (
        <div key={gallery.id} >
            <img src={gallery.path} width="200" height="200"/>
            {checkLikes(gallery.likes, gallery.id)}
            
        </div>
    )
}
export default GalleryItem;