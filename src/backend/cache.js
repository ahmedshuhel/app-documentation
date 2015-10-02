function dateAdd(date, interval, units) {
  var ret = new Date(date); //don't change original date
  switch(interval.toLowerCase()) {
    case 'year'   :  ret.setFullYear(ret.getFullYear() + units);  break;
    case 'quarter':  ret.setMonth(ret.getMonth() + 3*units);  break;
    case 'month'  :  ret.setMonth(ret.getMonth() + units);  break;
    case 'week'   :  ret.setDate(ret.getDate() + 7*units);  break;
    case 'day'    :  ret.setDate(ret.getDate() + units);  break;
    case 'hour'   :  ret.setTime(ret.getTime() + units*3600000);  break;
    case 'minute' :  ret.setTime(ret.getTime() + units*60000);  break;
    case 'second' :  ret.setTime(ret.getTime() + units*1000);  break;
    default       :  ret = undefined;  break;
  }
  return ret;
}

export class Cache {
  fromNow(hours = 1, minutes = 0, seconds = 0) {
    return dateAdd(dateAdd(dateAdd(new Date(), 'hour', hours), 'minute', minutes), 'second', seconds);
  }

  get(key) {
    let content = null;

    try {
      let stored = localStorage.getItem(key);
      if(stored) {
        stored = JSON.parse(stored);
        if(stored.expires - Date.now() > 0) {
          content = stored.content;
        }
      }
    } finally {
      return content;
    }
  }

  put(key, content, expires) {
    try {
      let toStore = {
        content: content,
        expires: (expires || this.fromNow(1)).getTime()
      };

      localStorage.setItem(key, JSON.stringify(toStore));
    } finally {
      return content;
    }
  }
}
