import { RelevantImageMetadataModel } from './relevant-image-metadata.model';

export interface GoogleScraperResultsModel {
  [key: string]: RelevantImageMetadataModel[];
}
