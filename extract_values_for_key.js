export default function extractValuesForKey(obj, str, path = '', result = {}) {  
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    if (key === str) {
      result[path] = obj[key];  
    } else if (typeof obj[key] === 'object') {
      extractValuesForKey(
        obj[key], 
        str, 
        path.length > 0 ? path += `/${key}` : path += key, 
        result,
      ); 
    }    
  });
  
  return result;
}
