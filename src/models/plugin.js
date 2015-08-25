export class PluginModel {
  name = '';
  endpoint = '';
  location = '';
  constructor(data){
    Object.assign(this, data);
  }
}