const GalleryItem = ({gallery}) => {
    return (
        <div key={gallery.id} >
            <img src={gallery.path} width="200" height="200"/>
            <p>No People Love This :/</p>
        <button>love it</button>
        </div>
    )
}
export default GalleryItem;