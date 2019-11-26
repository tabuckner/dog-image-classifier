import { GoogleScraper } from './google-scraper';
import { FirebaseDocumentDto } from './models/firebase-document.dto';
import { FirebaseDocument } from './firebase-document';

const queries = ['male dog', 'female dog'];

GoogleScraper.scrape(...queries).then(results => {
  for (const googleQuery in results) {
    for (const item of results[googleQuery]) {
      const nextDocument: FirebaseDocumentDto = new FirebaseDocument(
        googleQuery,
        item.url,
        item.height,
        item.width
      );
      console.warn(nextDocument);
    }
  }
  // console.log(results);
});
