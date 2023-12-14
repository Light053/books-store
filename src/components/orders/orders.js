import { connect } from 'react-redux';
import './orders.css'
import { BOOK_ADDED_TO_CART, BOOK_REMOVE_FROM_CART, ALL_BOOK_REMOVE_FROM_CART } from '../../actions/actions';

const Orders = ({ items, total, onIncrease, onDecrease, onDelete }) => {
	return (
		<div className='orders'>
			<h2>Your order</h2>
			<table className="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Book</th>
						<th>Count</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{
						items.map((item, idx) => {
							const { id, title, count, total } = item;
							return (
								<tr key={id}>
									<td className='number'>{idx + 1}</td>
									<td className='title'>{title}</td>
									<td className='count'>{count}</td>
									<td className='price'>{total}</td>
									<td>
										<button
											onClick={() => onIncrease(id)}
											type="button"
											className="btn btn-success">
											<i className="bi bi-cart-plus"></i>
										</button>
										<button
											onClick={() => onDecrease(id)}
											type="button"
											className="btn btn-danger ml-2">
											<i className="bi bi-cart-dash-fill"></i>
										</button>
										<button
											onClick={() => onDelete(id)}
											type="button"
											className="btn btn-outline-danger ml-2">
											<i className="bi bi-trash"></i>
										</button>
									</td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
			<div className='total'>
				Total: ${total}
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		items: state.cartItems,
		total: state.orderTotal
	}
}

const mapDispatchToProps = {
	onIncrease: BOOK_ADDED_TO_CART,
	onDecrease: BOOK_REMOVE_FROM_CART,
	onDelete: ALL_BOOK_REMOVE_FROM_CART

}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)