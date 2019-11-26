import admin from 'firebase-admin';
const serviceAccount = require('../tokens/dog-image-classifier-firebase-adminsdk-o3hqg-d180aaf74a.json');

export class UrlsCollection {
  public static get() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    const db = admin.firestore();
    const collection = db.collection('urls');
    return collection;
  }
}
