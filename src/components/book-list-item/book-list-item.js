import { Link } from "react-router-dom";
import './book-list-item.css'

const BookListItem = ({ item, onAddedToCart }) => {

	return (
		<div className="card mb-3">
			<div className="row g-0">
				<div className="col-md-4">
					<img
						src={item.coverImage}
						alt="cover"
						className="img-fluid card-img"
					/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{item.title}</h5>
						<button type='button' className="card-text author btn">
							<Link to={`/author/${item.id}`}>
								<p>Author: {item.author.name}</p>
							</Link>
						</button>
						<p className="card-text">Price: {item.price}</p>
						<p className="card-text">Description: {item.description}</p>
						<button type='button'
							className="btn btn-primary add-book"
							onClick={onAddedToCart}
						>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookListItem;
