# Quran JSON (Madani Muhsaf)

A script made for fetching Quran data from https://quran.api-docs.io/v4/ and restructure it according to the Madani Muhsaf paging:

```
Muhsaf: [
  {...},
  
  ...
  
  {
    "chapter_number": {
      "chapter_number": "112",
      "title_en": "Al-Ikhlas",
      "title_ar": "الإخلاص",
      "verse_count": 4,
      "text": [
        { "verse_number": "1", "text": " قُلْ هُوَ ٱللَّهُ أَحَدٌ" },
        { "verse_number": "2", "text": "ٱللَّهُ ٱلصَّمَدُ" },
        { "verse_number": "3", "text": "لَمْ يَلِدْ وَلَمْ يُولَدْ" },
        { "verse_number": "4", "text": "وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ" }
      ]
    },
    
    "chapter_number": {
      "chapter_number": "113",
      "title_en": "Al-Falaq",
      "title_ar": "الفلق",
      ...
      "text" : [...]
    }
    {...}
  },
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
