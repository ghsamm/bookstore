# What is this ?

Just a small project to demonstrate my coding style.

# One-click demo

[https://codesandbox.io/s/gallant-proskuriakova-r2y9w](https://codesandbox.io/s/gallant-proskuriakova-r2y9w)

# What is there to see ?

- Typescript everywhere, because it enables:
  - a better dev experience
  - less run-time bugs
  - better code quality
- This cool utility function: [src/style/fromTheme.ts](./src/style/fromTheme.ts)
  - that not only is it _type-safe_
  - but also uses a handy FP concept called _currying_
  - well, one thing helped with the other 😆
- This custom hook [src/hooks/useRequest.ts](./src/hooks/useRequest.ts) that is:
  - also cool
  - but more importantly _type-safe_, thanks to [_TS generics_](https://www.typescriptlang.org/docs/handbook/generics.html)
  - and enables manual refetching of data!
- styled-components because :
  - it enables seamless integration between the programming(JS/TS) world and the styling (CSS) world
  - supports theming: check out the theme here [src/style/theme.ts](./src/style/theme.ts)
- This obscure naming pattern that I found very useful: [read the article](https://medium.com/inturn-eng/naming-styled-components-d7097950a245)
- An example of a snapshot test: [src/components/BookCard/BookCard.test.tsx](./src/components/BookCard/BookCard.test.tsx)
- An example of a unit test for the `useRequest` custom hook: [src/hooks/useRequest.test.ts](./src/hooks/useRequest.test.ts)
- Routing with react-router
- Data fetching that is, you guessed it, type-safe 😑: [src/services/getBooks.ts](./src/services/getBooks.ts)
- The file structure, pretty easy to move around
- The commit messages, one thing at a time 😉
