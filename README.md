# Quran JSON (Madani Muhsaf)

A script made for fetching Quran data from https://quran.api-docs.io/v4/ and restructure it according to the Madani Muhsaf paging:

```
Muhsaf: [
  {},
  {
    "chapter_number": [
      {
        verse_number,
        text
      },
      ...
    ],
    "chapter_number": [
      ...
    ]
  },
  {
    ...
  },
  ...
]
```

Using this form, it is possible access the Quran text based on the page mainly, and get other page information (Juz' and Chapters). The goal is having a data reading experience similar to Muhsaf organization.

## 1. Install

```
npm i
```

## 2. Run

```
npm start
```

## Credits
- https://github.com/semarketir/quranjson
- https://github.com/quran/quran.com-api

## Todo

- [x] Add chapter names
- [ ] Add Juz' number
