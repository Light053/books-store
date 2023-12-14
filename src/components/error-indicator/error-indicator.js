import './error-indicator.css'

const ErrorIndicator = ({ error }) => {
	return (
		<div>
			<p className="error-message">Oops! Looks like something went wrong!</p>
			<img className="error-image" src="https://img.freepik.com/premium-vector/broken-paper-on-a-white-background-broken-paper-icon-vector-illustration_597903-91.jpg" alt="ERROR" />
		</div>
	)
}

export default ErrorIndicator;