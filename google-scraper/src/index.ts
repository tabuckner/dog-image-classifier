import { GoogleScraper } from './google-scraper';
import { FirebaseDocument } from './firebase-document';
import { UrlsCollection } from 'urls-collection';

const queries = ['male dog', 'female dog'];
const collection = UrlsCollection.get();

GoogleScraper.scrape(queries, 1000).then(results => {
  for (const googleQuery in results) {
    for (const item of results[googleQuery]) {
      const nextDocument = new FirebaseDocument(
        googleQuery,
        item.url,
        item.height,
        item.width
      );
      const serializedDocument = FirebaseDocument.serialize(nextDocument);
      collection.add(serializedDocument);
    }
  }
});
