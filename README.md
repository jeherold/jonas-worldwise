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
