import { connect } from 'react-redux';
import { ALL_BOOK_REMOVE_FROM_CART, BOOK_REMOVE_FROM_CART } from '../../../actions/actions';
import { Link } from 'react-router-dom';

const CartItem = ({ item, removeAllBook, removeOneBook }) => {
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
						<p className="cart-count">Count: {item.count}</p>
						<button className='btn btn-primary remove-btn' onClick={() => removeAllBook(item.id)}>
							Remove all books from cart</button>
						<button className='btn btn-primary remove-btn' onClick={() => removeOneBook(item.id)}>
							Remove 1 book from cart</button>
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		orderTotal: state.orderTotal,
	}
}

const mapDispatchToProps = {
	removeAllBook: (id) => ALL_BOOK_REMOVE_FROM_CART(id),
	removeOneBook: (id) => BOOK_REMOVE_FROM_CART(id)
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)