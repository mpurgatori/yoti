

//Orders receipts array from newest to oldest
export const descending = (array) => {
    return array.receipts.sort(function(a,b){
        return new Date(b.transaction["unix-timestamp"]) - new Date(a.transaction["unix-timestamp"]);
        });
    }



const toTitleCase = str => {
    return str.replace(/\w\S*/g, (txt)=> {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

//take lowercase hyphenated string and returns spaced forst letter uppercase string for each word
export const attrString = str => {
    let newStr = str.replace(/(\w)(-)(\w)/g, '$1 $3');
    return toTitleCase(newStr);
}

