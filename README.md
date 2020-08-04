# Starter-pack

## Environment and NPM tasks(WIP)
以下の環境で開発及びNPMを利用してください。

node: `12.13.1`

***
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
**Unit Test**
```
npm run test
```
**Mock Server**
```
npm run mock
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
    └ config/
    └ pages/
      └ my/
        └ library/
          └  index/
      ...
    └ public/                   // local dev sever用templates
    └ service/
    └ store/
    └ useCase/
```
**components**  
共用 components  
**config**  
bundle関連設定（ex: sever, aixos）  
**pages**  
routeと 1：１構成でページ追加  
現状基本entryはApp.jsから  
**service**  
API定義  
Not React Components  
**store**  
redux storeとreducers  
middleware設定  
**useCase**  
共用business logic  
Dataのview modelの整形  
Not React Components  

## Archtecture
### Clean Architecture
adpater、entity、presentationなしでシンプル化しました。
```
domain -> | service -> uasCase -> (Components)
          |               └> redux -->--┛
```
- domain: 外部サーバentityは個々にある、APIサーバーのこと
- service: domainとのAPI設計
- useCase: serviceから取得したデータをView側で使うためのハンドリング
- Components: page, container, atom, molecules等のコンポーネント

### redux
Redux Ducks patternを使用します。
[Ducks pattern](https://webbibouroku.com/Blog/Article/redux-ducks)

### Unit test
Jext + Enzyme
Enzymeのshallow mountでテストします。
- Propsテスト
  - propによるrendering分岐テスト
- eventテスと
  - onClickなどinterrationテスト
  - reactのlifeCycleテスト
  - そのたviewロジックテスト
- sideEffectテスト
  - 通信APIテスト
  - reduxテスト

### Visualzation Test
Storybookを利用します

### E2Eテスト
未定

## Recommended VS code extension
- ESLint
- Prettier
- TSLint
- vscode-styled-components
- Reactjs code snippets
- (browser)React Developer Tools
- (browser)Redux DevTools
