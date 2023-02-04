import { writeFileSync } from "fs";
import fetch from "node-fetch";
import chapters from "./chapters.json" assert { type: "json" };

let muhsaf = [];
const requests = [];
for (let page_number = 1; page_number <= 604; page_number++) {
  requests.push(
    /* create the page */
    fetch(
      `https://api.quran.com/api/v4/quran/verses/uthmani?page_number=${page_number}`
    )
      .then((res) => res.json())
      .then((json) => {
        let raw_page = json.verses;
        let page = {};

        let current_chapter_number = "";

        raw_page.forEach((verse) => {
          let chapter_number = verse.verse_key.split(":")[0];
          let verse_number = verse.verse_key.split(":")[1];

          if (!(chapter_number in page)) {
            current_chapter_number = chapter_number;
            page[current_chapter_number] = {
              chapterNumber: chapter_number,
              titleEn: chapters[chapter_number - 1].title,
              titleAr: chapters[chapter_number - 1].titleAr,
              verseCount: chapters[chapter_number - 1].count,
              text: [],
            };
          }
          page[current_chapter_number].text.push({
            verseNumber: verse_number,
            text: verse.text_uthmani,
          });
        });

        return page;
      })
      .then(async (page) => {
        /* add juz number to each page */
        return fetch(
          `https://api.quran.com/api/v4/verses/by_page/${page_number}`
        )
          .then((response) => response.json())
          .then((data) => {
            page = {
              ...page,
              juzNumber: data.verses[0].juz_number,
            };
            return page;
          });
      })
  );
}

Promise.all(requests).then((results) => {
  muhsaf = [{}, ...results]; // empty object is added intentionally to accommodate the original Muhsaf page page_numberes
  writeFileSync("madani-muhsaf.json", JSON.stringify(muhsaf));
});
