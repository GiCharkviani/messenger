export class PostModel {
  constructor(
    public author: string,
    public authorUid: string,
    public img: string,
    public text: string,
    public likes?: {num:number, auth:string[]},
  ){}
}
