import {
  FirebaseDocumentDto,
  FirebaseDocumentDtoVotes,
} from 'models/firebase-document.dto';

export class FirebaseDocument implements FirebaseDocumentDto {
  public googleQuery: string;
  public imageUrl: string;
  public height: number;
  public width: number;
  public votes: FirebaseDocumentDtoVotes;

  constructor(
    googleQuery: string,
    imageUrl: string,
    height: number,
    width: number
  ) {
    this.googleQuery = googleQuery;
    this.imageUrl = imageUrl;
    this.height = height;
    this.width = width;
    this.votes = this.initialVotes;
  }

  public static serialize(firebaseDocument: FirebaseDocument): object {
    return JSON.parse(JSON.stringify(firebaseDocument));
  }

  private get initialVotes(): FirebaseDocumentDtoVotes {
    return {
      female: 0,
      male: 0,
      unknown: 0,
    };
  }
}
