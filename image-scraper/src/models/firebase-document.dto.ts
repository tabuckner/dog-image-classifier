export interface FirebaseDocumentDto {
  googleQuery: string;
  imageUrl: string;
  height: number;
  width: number;
  votes: FirebaseDocumentDtoVotes;
}

export interface FirebaseDocumentDtoVotes {
  male: number;
  female: number;
  unknown: number;
}
