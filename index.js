import { writeFileSync } from "fs";
import fetch from "node-fetch";

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
        let current_chapter_number = "";

        raw_page.forEach((verse) => {
          let chapter_number = verse.verse_key.split(":")[0];
          let verse_number = verse.verse_key.split(":")[1];
          if (!(chapter_number in page)) {
            current_chapter_number = chapter_number;
            page[current_chapter_number] = [];
          }
          page[current_chapter_number].push({
            verse_number: verse_number,
            text: verse.text_uthmani,
          });
        });

        return page;
      })
  );
}

Promise.all(requests).then((results) => {
  muhsaf = [{}, ...results]; // empty object is added intentionally to fix the page index
  writeFileSync("madani_muhsaf.json", JSON.stringify(muhsaf));
});
