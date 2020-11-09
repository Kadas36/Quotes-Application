export class Kquote {
  showDetails: boolean;
  constructor(public citation: string, public author: string, public name: string, public dateCreated = new Date()){
    this.showDetails = false;
  }
}
