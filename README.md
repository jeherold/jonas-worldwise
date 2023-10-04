# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# How to start project with Vite

#### This will walk you through which application and allow you to choose React, Vue etc and whch template

```
npm create vite@latest
```

#### vite by default runs on port 5173

```
npm i
npm run dev
```

## configure eslint

```
npm i eslint vite-plugin-eslint eslint-config-react-app --sav-dev
```

Create a file called the following to extend vite eslint to work with react eslint
.eslintrc.json

```json
{
  "extends": "react-app"
}
```

In vite.config.js - vslint plugin to the array of plugins

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
});
```

# Add React Router

```
npm i react-router-dom
```

### How to set up BrowserRouter with routes

```js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Homepage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

#### BrowserRouter works a little like Routeroutlet in Angular

- if content above the router outlet - the above content will always display on the page above the components displayed in the BrowserRouter section

```js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div>
      <h2>Above browser Router - displays on all routes</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
```

#### And proper way to set up a link with the Router Link comp

```js
<Link to="/pricing">Pricing</Link>
```

#### to take advantage of the built in NavLink features of React Router - it will add active class to active page

```js
import { NavLink } from 'react-router-dom';

function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
```

#### In general - the App will handle the Routing only and let other components handle what should be displayed on each route.

# CSS Module

```css
/* to create a global class with no ui unique suffix use :global
 now you can just add className="test" and it will apply the class 
 - even though this is in the Pagenav module css - test class will work anywhere in the app now */
:global(.test) {
  background-color: chartreuse;
}
```

### Perfect Use case is Router NavLink that attaches active class to the current route.

- css module would add unique suffix to .active if we tried to style the active class with:
  .nav .active
- using the :global will leave the .active class without the suffix

```css
.nav :global(.active) {
  color: goldenrod;
}
```

#### Normally, of course, truly global styles would go in the global .css file

## Nested Routes

- any routes nested inside <Route> will be nested
- use index to let the React Router know what to display when no child routes match
- Example - app/cities will show cities - app/counties will show countries - app.form will show the form
  app/ with no matching children will display the index element

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import HomePage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';
import CityList from './components/CityList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<CityList />} />
          <Route path="cities" element={<CityList />} />
          <Route path="countries" element={<p>Countries</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## Router Outlet

- use Router Outlet component for positioning nested routes on the parent component

```js
import AppNav from './AppNav';
import Logo from '../components/Logo';
import styles from './Sidebar.module.css';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Sidebar;
```
