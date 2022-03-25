const GalleryFunction = ({galleryList}) => {
    return (
        <div>
            <p>Gallery goes here</p>
            {galleryList.map( (gallery) => {
                return (
                <div>
                    <img key={gallery.id} src={gallery.path} width="200" height="200"/>
                    <button>love it</button>
                </div>
                )
            })}
        </div>
    );
};

export default GalleryFunction;