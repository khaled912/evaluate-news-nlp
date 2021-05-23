
//get it from (https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url/5717133#5717133)
function URL_Validation(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ 
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
      '(\\#[-a-z\\d_]*)?$','i'); 
    return !!pattern.test(str);
  }

  export { URL_Validation }