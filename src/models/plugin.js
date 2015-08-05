export class Plugin {
  name = '';
  endpoint = '';
  location = '';
  constructor(data){
    Object.assign(this, data);
  }
}