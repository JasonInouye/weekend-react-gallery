import axios from 'axios';
import GalleryItem from "../GalleryItem/GalleryItem";

const GalleryList = ({galleryList, getList}) => {



    const handleClick = (id) => {
        console.log( `Clicked Me, ${id}` );

        axios.put(`/gallery/like/${id}`)
            .then( response => {
                console.log( 'updated', response);
                getList();
            }).catch( err => {
                console.log( err );
            })        
        
    };

    const checkLikes = ( likes, id ) => {
        if( likes === 0 ){
            return(
                <>
                    <p>No People Love This</p>
                    <button className="button" onClick={(event) => handleClick(id)}>Love it!</button>
                </>
            )
        } else {
            return(
                <>
                    <p>{likes} love this picture</p>
                    <button className="button" onClick={(event) => handleClick(id)}>Love it!</button>
                </>
            )
        }
    }

    return (
        <>
            {galleryList.map( (gallery) => {
                return (
                    <GalleryItem
                        key={gallery.id}
                        gallery={gallery}
                        checkLikes={checkLikes}
                    />
                )
            })}
        </>
    );
};

export default GalleryList;