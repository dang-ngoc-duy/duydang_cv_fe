import Buffer from "buffer";
//import { APP_LANG_DEFAULT, APP_TOKEN_NAME } from "./constants";
import { TAuthHeader } from 'app/types/api';

// const getHash256 = (a: string) => {
//     return crypto.createHash('sha256').update(a).digest('hex');
// }

// const getHmac512 = (str: string, key: string) => {
//     let hmac = crypto.createHmac("sha512", key);
//     return hmac.update(Buffer.from(str, 'utf8')).digest("hex");
// }

export const generateUUID = (): string => {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
}
const s4 = (): string => {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
}

export const contentType = (type: string): Record<"Content-Type", string> => {
  return { "Content-Type": type };
};

// export const decodeToken = (): ITokenLocal => {
//   const UT: ITokenLocal = { token: "", userid: "" };
//   let localToken = getStorage(APP_TOKEN_NAME);
//   if(!localToken)return UT;

//   const parse = Buffer.Buffer.from(localToken, "base64").toString().split(".");
//   UT.userid = parse.pop() ?? "";
//   UT.token = parse.join(".");

//   return UT;
// };

export const fixNullToString = <T,>(data: T): T => {
  const rs: Record<string, any> = {};

  for (let v in data){
    rs[v] = data[v] === null ? '' : data[v];
  }

  return rs as T;
}

export const formatPath = (path: string, ...params: (string | number)[]): string => {
  if (!path) return path;

  let match = path.match(/:[a-z][a-z\d_]*\??/gi);
  if (!match) return path;

  match
  .map(param => param.replace(/\?$/, ''))
  .filter((value, index, self) => self.indexOf(value) === index)
  .map((param, index) => path = path.replace(
    new RegExp(param + '\\??', 'gi'), 
    (params[index] ?? '').toString()
  ));

  return path;
}

export const stringToBase64 = (str: string): string => {
  return Buffer.Buffer.from(str).toString("base64");
};

// export const encodeToken = (UT: ITokenLocal): string => {
//   return stringToBase64([UT.token, UT.userid].join("."));
// };

export const getSearchPage = (search: string, name: string): number => {
  const params = new URLSearchParams(search);
  const page = Number(params.get(name)) || 1;
  return page < 1 ? 1 : page;
}

export const getQueryString = (init: Record<string, string | number | null | undefined>) => {
  const qs: Record<string, string> = {};
  // eslint-disable-next-line array-callback-return
  Object.keys(init).map((k) => {
    const t = typeof init[k];
    switch (t) {
      case 'object':
        qs[k] = '';
        break;
      case 'string':
      case 'number':
        qs[k] = (init[k] as string | number).toString();
        break;
    }
  })
  return new URLSearchParams(qs).toString();
}

// export const getLang = () => {
//   return (
//     window.localStorage.i18nextLng ??
//     // document.querySelector("html")?.lang ??
//     APP_LANG_DEFAULT.code
//   );
// };

export const getLocalItem = (name: string) => {
  let data = localStorage.getItem(name);

  try {
    data = JSON.parse(data as string);
  } catch (e) {
    return null;
  }

  return data;
};

// export const getValidate = (message = '', params = {}): IValidate => {
//   return { message, params };
// }

export const removeLocalItem = (name: string) => {
  localStorage.removeItem(name);
};

export const setLocalItem = (name: string, data: unknown) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const getSessionItem = (name: string) => {
  let data = sessionStorage.getItem(name);

  try {
    data = JSON.parse(data as string);
  } catch (e) {
    return null;
  }

  return data;
};

export const setSessionItem = (name: string, data: unknown) => {
  sessionStorage.setItem(name, JSON.stringify(data));
};

export const removeSessionItem = (name: string) => {
  sessionStorage.removeItem(name);
};

export const getStorage = (name: string) => {
  return getLocalItem(name) || getSessionItem(name);
}

export const removeStorage = (name: string) => {
  removeLocalItem(name);
  removeSessionItem(name);
}

export const updateDocumentTitle = (title: string) => {
  const current = document.title.split('|').pop()?.trim();
  const newTitle = [ title ];
  current && newTitle.push(current);
  document.title = newTitle.join(' | ');
}

export const intToRoman = (original: number): string => {
  if (original < 1 || original > 3999) {
    throw new Error('Error: Input integer limited to 1 through 3,999');
  }

  const numerals = [
    ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'], // 1-9
    ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'], // 10-90
    ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'], // 100-900
    ['M', 'MM', 'MMM'], // 1000-3000
  ];

  const digits = Math.round(original).toString().split('');
  let position = (digits.length - 1);

  return digits.reduce((roman, digit) => {
    if (digit !== '0') {
      roman += numerals[position][parseInt(digit) - 1];
    }

    position -= 1;

    return roman;
  }, '');
}

export const intToAlphabet = (original: number): string => {
  if (original < 0 || original > 3999) {
    throw new Error('Error: Input integer limited to 1 through 3,999');
  }

  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
                    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  return alphabet[original].concat('.');
}

export const convertToFloatingPoint = (first: number, second: number): string => {
  return first.toString().concat('.'+second);
}

export const numberToCurrency = (num: number | string) => {
  num = num.toString().replace(".", ",");
  let splitNum = num.split(',');
  let newNum = splitNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".").concat(',' + splitNum[splitNum.length-1])
  return newNum;
}
// export const fileToBlob = (file: File): IFileBlob => ({
//   blob: URL.createObjectURL(file),
//   type: file.type,
//   name: file.name
// });
// export const blobToFile = (blobFile: IFileBlob): File => {
//   const { blob, name, type } = blobFile;
//   return new File([blob], name, { type });
// };
export const getToDay = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  let date = dd + '/' + mm + '/' + yyyy;
  
  return date;
};


/**
 * Checking difference between two arrays
 * @type {T} - Type of item in array
 * @param arr1 - An array of `{T}` type 
 * @param arr2 - An array of `{T}` type
 * @returns `true`: If they are different
 * @returns `false`: If they are same
 */
 export const diffArray = <T,>(arr1: T[], arr2: T[]): boolean => {
  const outside1 = arr2.filter(a => arr1.indexOf(a) === -1);
  const outside2 = arr1.filter(a => arr2.indexOf(a) === -1);
  return !!outside1.length || !!outside2.length;
}


export const measure = {
  exec(name: string){
    if (
      process.env.NODE_ENV === 'development' ||
      sessionStorage.getItem('enabledMeasure') === 'allowed'
    ){
      console.time(name);
    }
  },
  execEnd(name: string){
    if (
      process.env.NODE_ENV === 'development' ||
      sessionStorage.getItem('enabledMeasure') === 'allowed'
    ){
      console.timeEnd(name);
    }
  }
}

export const ucfirst = (str: string) => {
  if (!str.length) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getAuthHeader = (token: string, type: TAuthHeader = 'Bearer'): Record<'Authorization', string> => {
  return { Authorization: `${ type } ${ token }` };
}


export function convertDayreceve(str:string) {
  const string = str.split('-')
  const day = new Date(Number(string[0]),Number(string[1])-1,Number(string[2]))
  return (day.getTime()).toString()
}

export function dataURIFile(dataURI:string) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0)
      byteString = atob(dataURI.split(',')[1]);
  else
      byteString = unescape(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }

  return new File([ia],'sceenshot.jpg', {type:mimeString});
}