import { BingScraper } from './bing-scraper';
import { FirebaseDocument } from './firebase-document';
import { UrlsCollection } from './urls-collection';

const queries = ['male dog', 'female dog'];
const collection = UrlsCollection.get();

BingScraper.scrape(queries, 1000).then(results => {
  console.log('Completed the Scrape...');
  for (const googleQuery in results) {
    const segment = results[googleQuery];
    console.log(
      `Creating DTOs for ${segment.length} results on ${googleQuery}`
    );
    for (let i = 0; i < results[googleQuery].length; i++) {
      const item = results[googleQuery][i];
      const nextDocument = new FirebaseDocument(
        googleQuery,
        item.url,
        item.height,
        item.width
      );
      const serializedDocument = FirebaseDocument.serialize(nextDocument);
      console.log(
        `Preparing to add document ${i + 1}/${
          results[googleQuery].length
        } for ${googleQuery}`
      );
      collection.add(serializedDocument);
    }
  }
});
