import { useState } from 'react';

const GalleryItem = ({ gallery, checkLikes }) => {
    const [ descShow, setDescShow ] = useState(true)

    const imageClick = () => {
        //console.log( `Inside of Image Click ${id}`);
        setDescShow( !descShow )
    }

    return (
        <div key={gallery.id} className ="grid-item">
            { descShow ? <img src={gallery.path} onClick={(event) => imageClick(gallery.id)}/> : <p className="descContainer" onClick={(event) => imageClick(gallery.id)}>{gallery.description}</p> }
            {checkLikes(gallery.likes, gallery.id)}      
        </div>
    )
}
export default GalleryItem;