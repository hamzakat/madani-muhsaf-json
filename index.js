import { writeFileSync } from "fs";
import fetch from "node-fetch";
import chapters from "./chapters.json" assert { type: "json" };

let muhsaf = [];
const requests = [];
for (let page_number = 1; page_number <= 604; page_number++) {
  requests.push(
    fetch(
      `https://api.quran.com/api/v4/quran/verses/uthmani?page_number=${page_number}`
    )
      .then((res) => res.json())
      .then((json) => {
        let raw_page = json.verses;
        let page = {};
        let current_chapter_title = "";

        raw_page.forEach((verse) => {
          let chapter_number = verse.verse_key.split(":")[0];
          let verse_number = verse.verse_key.split(":")[1];
          let chapter_title = chapters[chapter_number - 1].titleAr;

          if (!(chapter_title in page)) {
            current_chapter_title = chapter_title;
            page[current_chapter_title] = {
              chapter_number: chapter_number,
              title_en: chapters[chapter_number - 1].title,
              verse_count: chapters[chapter_number - 1].count,
              text: [],
            };
          }
          page[current_chapter_title].text.push({
            verse_number: verse_number,
            text: verse.text_uthmani,
          });
        });

        return page;
      })
  );
}

Promise.all(requests).then((results) => {
  muhsaf = [{}, ...results]; // empty object is added intentionally to accommodate the original Muhsaf page indexes
  writeFileSync("madani-muhsaf.json", JSON.stringify(muhsaf));
});
