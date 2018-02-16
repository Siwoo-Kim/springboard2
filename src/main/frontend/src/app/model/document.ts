import {DateFormatter} from "../service/date-formatter";

export class Document {
  public id: number;
  public title: string;
  public text: string;
  public writer: string;
  public postDate: Date;
  public hit: number;

  get postDateStr():string {
    return DateFormatter.getlocalDateString(this.postDate);
  }

  constructor(
    id: number,
    title: string,
    text: string,
    writer: string,
    postDate: Date,
    hit: number
    ){
    this.id = id;
    this.title = title;
    this.writer = writer;
    this.postDate = postDate;
    this.hit = hit;
  }

}
