export class Post {
  mID: string;
  mAuthor: string;
  mContent: string;
  mDescription: string;
  mPicture: string;
  mRelease_date: string;

  constructor()
  constructor(id?: string, author?: string, content?: string, description?: string,
    picture?: string, release_date?: string) {

    this.mID = id;
    this.mAuthor = author;
    this.mContent = content;
    this.mDescription = description;
    this.mPicture = picture;
    this.mRelease_date = release_date;
  }
}
