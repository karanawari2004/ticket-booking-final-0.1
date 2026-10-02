const API =
	import.meta.env.VITE_API_URL ||
	(import.meta.env.DEV
		? "http://localhost:4001"
		: " https://ticket-booking-backend-final-0-1.onrender.com");

export default API;
