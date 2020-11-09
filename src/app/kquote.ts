export class Kquote {
  showDetails: boolean;
  constructor(public citation: string, public author: string, public name: string){
    this.showDetails = false;
  }
}
