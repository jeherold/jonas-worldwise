import { Link } from 'react-router-dom';
import PageNav from '../components/Pagenav';
import AppNav from '../components/AppNav';

function HomePage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h2>WorldWise</h2>

      <Link to="/app">Go to the App</Link>
    </div>
  );
}

export default HomePage;
