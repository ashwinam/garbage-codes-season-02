// 51. Extract the Domain Name From a URL

/*
Write a function that given an input URL, returns its domain name.
*/

const domainName = url => {
    let list_of_words = url.split("//")
    list_of_words =  list_of_words.map(ele => ele.includes(".") && ele).filter(ele => ele)
    let arr = list_of_words.join().split(".")

    for (let i of arr){
        if (i.toLowerCase() === "www")
            continue
        else return i;
    }

  };
  
  console.log(domainName('www.google.ca')); // google

  console.log(domainName('http://google.com')); // google
  console.log(domainName('https://google.com')); // google
  console.log(domainName('http://google.co.jp')); // google
  console.log(domainName('https://www.google.com')); // google