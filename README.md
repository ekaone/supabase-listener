<!-- mind you open an issue... 😀 -->

[![supabase-listener](https://res.cloudinary.com/ddjsyskef/image/upload/v1617333288/Github/g3se2hacftpstwf5mr1r.jpg)](#)

# `Supabse Listener`

[![Ask me anything](https://img.shields.io/badge/ask%20me-anything-orange)][ama]

## Contents

- [Installation](#cloud-installation)
- [Usage](#interrobang-usage)
- [Documentation](#books-documentation)
- [How to contribute](#yum-how-to-contribute)
- [License](#yum-how-to-contribute)

## :cloud: Installation

```js
git clone https://github.com/ekaone/supabase-listener.git
cd supabase-listener
npm install
npm start
```

## :interrobang: Usage

Subscribe to realtime changes in your databse, an example:

```js
const mySubscription = supabase
  .from("*")
  .on("*", (payload) => {
    console.log("Change received!", payload);
  })
  .subscribe();
```

## :books: Documentation

The database event which you would like to receive updates for, check out this awesome [docs](https://supabase.io/docs/reference/javascript/subscribe)

## :yum: How to contribute

Have an idea? Found a bug? See [how to contribute][contributing].

## :scroll: License

[MIT][license] © [Eka Prasetia][website]

[website]: https://www.ekaprasetia.com/
[contributing]: https://github.com/ekaone/contribute
[license]: https://en.wikipedia.org/wiki/MIT_License
[ama]: https://github.com/ekaone/ama
