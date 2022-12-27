# Quran JSON (Madani Muhsaf)

A script made for fetching Quran data from https://quran.api-docs.io/v4/ and restructure it according to the Madani Muhsaf paging:

```
Muhsaf: [
  "page_number": {
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
  "page_number": {
    ...
  },
  ...
]
```
## 1. Install
```
npm i
```

## 2. Run 
```
npm start
```
