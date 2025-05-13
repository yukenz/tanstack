
# How this project created?

```shell
yarn init
yarn add @tanstack/react-router @tanstack/react-router-devtools @tanstack/react-start react react-dom tailwind-merge vinxi --exact
yarn add @tailwindcss/postcss @types/node @types/react @types/react-dom autoprefixer classnames postcss tailwindcss typescript vite-tsconfig-paths --dev --exact
```

# Edit package.json
Add type module
```json
{
  ...,
  "type": "module",
  ...
}
```

# Jest Config
```shell
yarn ts-jest config:init
```