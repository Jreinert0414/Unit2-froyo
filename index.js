let flavors = prompt(`what flavors would you like?`)

const flavorList = flavors.split(",");


const arrayToObj = (orderList) => {
  let obj = {};
  for (let i = 0; i < flavorList.length; i++) {
    if (obj[flavorList[i]]){
      obj[flavorList[i]]++;
    } else {
      obj[flavorList[i]] = 1;
    }

  }
return obj
}


console.log(arrayToObj())