import { useState } from 'react';

const GalleryItem = ({ gallery, checkLikes }) => {
    const [ descShow, setDescShow ] = useState(false)

    const imageClick = () => {
        //console.log( `Inside of Image Click ${id}`);
        setDescShow( !descShow )
    }

    return (
        <div key={gallery.id} className ="individual-photo">
            { descShow ? <img src={gallery.path} onClick={(event) => imageClick(gallery.id)} width="375" height="300"/> : <p className="descContainer" onClick={(event) => imageClick(gallery.id)}>{gallery.description}</p> }
            {checkLikes(gallery.likes, gallery.id)}      
        </div>
    )
}
export default GalleryItem;