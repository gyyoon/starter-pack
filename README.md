## NPM tasks(WIP)
**Local development**
```
npm run dev
```
**Prod build**
```
npm run build
```
**Lint check**
```
npm run lint
```
**Storybook**
```
npm run storybook
```
**Bundle Analyze**
```
npm run Analyze
```

## Code convention
- Namming convention
  - UpperCase
    - CONSTANTS
    - REDUX_ACTIONS
  - PascalCase
    - class
    - React Components and React Components's Directories
    - Typescripts: type, interface
  - camelCase
    - variables
    - function
    - etcs

## Directory organization

```
v2/
  ├ .storybook
  ├ dist                        // git ignore
  └ src/
    └ components/
      └ {SomeComponent}
      ...
    └ service/
    └ pages/
      └ my/
        └ library/
          └  index/
      ...
    └ public/                   // local dev sever用templates
    └ useCase/
```
**components**
共用 components
**service**
API定義
Not React Components
**pages**
routeと 1：１構成でページ追加
現状基本entryはApp.jsから
**useCase**
共用business logic
Not React Components

## Archtecture
### redux
Redux Ducks patternを使用します。


## Recommended VS code extension
- ESLint
- Prettier
- TSLint
- vscode-styled-components
- Reactjs code snippets
- (browser)React Developer Tools
- (browser)Redux DevTools
