
module.exports = function getSeason(springDate) {

    if (arguments.length === 0 || springDate.length === 0 ){
        return 'Unable to determine the time of year!';
    }
    
    let month = springDate.getMonth();
      if ("getMonth()" in springDate) {
          return 'Error';
      }
     let ty = Date.parse(springDate);
    
     if (ty < 100000000 && ty>0) {
        return 'Error';
     } 
     if (month >11 || month < 0  || month === undefined || isNaN(month)  ){
         return 'Error';
     } 
    switch (month) {
        case 0: return 'winter'; break;
        case 1: return 'winter'; break;
        case 2: return 'spring'; break;
        case 3: return 'spring'; break;
        case 4: return 'spring'; break;
        case 5: return 'summer'; break;
        case 6: return 'summer'; break;
        case 7: return 'summer'; break;
        case 8: return 'autumn'; break;
        case 9: return 'autumn'; break;
        case 10: return 'autumn'; break;
        case 11: return 'winter'; break;   
    }
    
};
