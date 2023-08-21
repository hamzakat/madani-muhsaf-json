# Quran JSON (Madani Muhsaf)

A script made for fetching Quran data from https://quran.api-docs.io/v4/ and restructure it according to the Madani Muhsaf paging:

```
Muhsaf: [
  {...},
  
  ...
  
  {
    "chapterNumber": {
      "chapterNumber": "112",
      "titleEn": "Al-Ikhlas",
      "titleAr": "الإخلاص",
      "verseCount": 4,
      "text": [
        { "verse_number": "1", "text": " قُلْ هُوَ ٱللَّهُ أَحَدٌ" },
        { "verse_number": "2", "text": "ٱللَّهُ ٱلصَّمَدُ" },
        { "verse_number": "3", "text": "لَمْ يَلِدْ وَلَمْ يُولَدْ" },
        { "verse_number": "4", "text": "وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ" }
      ],
      "juzNumber": 30
    },
    
    "chapterNumber": {
      "chapterNumber": "113",
      "titleEn": "Al-Falaq",
      "titleAr": "الفلق",
      ...
      "text" : [...]
    }
    {...}
  },
]
```

Using this form, it is possible access the Quran text based on the page mainly, and get other page information (Juz' and Chapters). The goal is having a data reading experience similar to Muhsaf organization.


## Get the JSON
- Save this: https://raw.githubusercontent.com/hamzakat/madani-muhsaf-json/main/madani-muhsaf.json

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
- [x] Add Juz' number
