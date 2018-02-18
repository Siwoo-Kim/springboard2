
export class Review {

  constructor(
    public id: number,
    public comments: string,
    public document: any,
    public member: any,
    public created: Date,
    public rating: number
  ){}


}
