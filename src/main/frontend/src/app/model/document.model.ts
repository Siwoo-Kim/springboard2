import {DateFormatter} from "../service/date-formatter";

export class Document {
  public id: number;
  public title: string;
  public text: string;
  public writer: string;
  public postDate: Date;
  public hit: number;
  public secret: boolean;
  public tagNames: string[];

  get postDateStr():string {
    return DateFormatter.getlocalDateString(this.postDate);
  }

  constructor(
    id: number,
    title: string,
    text: string,
    writer: string,
    postDate: Date,
    hit: number,
    secret : boolean,
    tagNames: string[]
    ){
    this.id = id;
    this.title = title;
    this.writer = writer;
    this.postDate = postDate;
    this.hit = hit;
    this.secret = secret;
    this.tagNames = tagNames;
  }

  addFrontHash(str: string){
    return '#'+str;
  }

  static deleteFrontHashFromString(str: string){
    if(str[0] == '#') {
      return str.slice(1,str.length);
    }
  }


}
