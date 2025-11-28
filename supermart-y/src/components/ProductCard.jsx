
function ProductCard({title, price, image}){
    <div className="col-md-4 mb-4">
        <div className="card">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                
                <h5 className="card-title" >{title}</h5>
                <p className="card-text">Rs.{price}</p>
                <button className="btn btn-primary w-100">Add to Cart</button>


            </div>


        </div>

    </div>
}
export default ProductCard;