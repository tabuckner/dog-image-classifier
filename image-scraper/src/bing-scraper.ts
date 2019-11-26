import { GoogleScraperResultsModel } from 'models/google-scraper-results.model';
import { ImageMetadataModel } from 'models/image-metadata.model';
const Scraper = require('bing-image-scraper');

export class BingScraper {
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

      const scraper = new Scraper();
      const imagesMetaData: ImageMetadataModel[] = await scraper.list({
        keyword: query,
        num: BingScraper.categoryImageCount,
      });

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
}
