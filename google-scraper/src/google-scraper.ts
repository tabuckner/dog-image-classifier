import { GoogleScraperResultsModel } from 'models/google-scraper-results.model';
import { ImageMetadataModel } from 'models/image-metadata.model';
const Scraper = require('images-scraper');

export class GoogleScraper {
  private static readonly categoryImageCount = 20;

  public static async scrape(
    ...queries: string[]
  ): Promise<GoogleScraperResultsModel> {
    const results: GoogleScraperResultsModel = {};

    for (const query of queries) {
      results[query] = [];

      const scraper = GoogleScraper['getScraper'](query);
      const imagesMetaData: ImageMetadataModel[] = await scraper.start();
      results[query] = imagesMetaData.map(image => {
        return {
          url: image.url,
          height: image.height,
          width: image.width,
        };
      });
    }

    return results;
  }

  private static getScraper(query: string): any {
    // TODO: Create types for `images-scraper`.
    return new Scraper.Google({
      keyword: query,
      limit: GoogleScraper.categoryImageCount,
      puppeteer: {
        headless: false,
      },
      advanced: {
        imgType: 'photo', // options: clipart, face, lineart, news, photo
        resolution: 'm', // options: l(arge), m(edium), i(cons), etc.
        color: undefined, // options: color, gray, trans
      },
    });
  }
}
