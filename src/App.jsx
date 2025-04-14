import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import MoviePage from './pages/MoviePage/MoviePage';
import ResultsPage from './pages/ResultsPage/ResultsPage';
import FavoritePage from './pages/FavoritePage/FavoritePage';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <HomePage />,
			errorElement: <ErrorPage />,
		},
		{
			path: '/movie/:id',
			element: <MoviePage />,
		},
		{
			path: '/results/:search',
			element: <ResultsPage />,
		},
		{
			path: '/favorite',
			element: <FavoritePage />,
		},
	]);

	return (
		<div className="app">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
