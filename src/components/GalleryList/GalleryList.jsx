import GalleryItem from "../GalleryItem/GalleryItem";

const GalleryFunction = ({galleryList}) => {
    return (
        <div className="photo">
            <p></p>
            {galleryList.map( (gallery) => {
                return (
                    <GalleryItem
                        key={gallery.id}
                        gallery={gallery}
                    />
                )
            })}
        </div>
    );
};

export default GalleryFunction;