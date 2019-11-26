import { GoogleScraperResultsModel } from 'models/google-scraper-results.model';
import { ImageMetadataModel } from 'models/image-metadata.model';
const Scraper = require('images-scraper');

export class GoogleScraper {
  private static readonly defaultCategoryImageCount = 100;
  private static categoryImageCount: number;

  public static async scrape(
    queries: string[],
    overrideCount?: number
  ): Promise<GoogleScraperResultsModel> {
    this.categoryImageCount = overrideCount || this.defaultCategoryImageCount;
    const results: GoogleScraperResultsModel = {};

    for (const query of queries) {
      results[query] = [];

      const scraper = GoogleScraper.getScraper(query);
      const imagesMetaData: ImageMetadataModel[] = await scraper.start();
      console.log(`Obtained ${imagesMetaData.length} results for ${query}`);
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
    console.log(
      `Creating scraper targeting ${query} for ${GoogleScraper.categoryImageCount} results.`
    );
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
