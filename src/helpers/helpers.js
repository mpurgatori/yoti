

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

//converts unix time stamp to time and date formatted
export const convertTimeStamp = stamp => {
    const a = new Date(stamp * 1000);
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    let min = a.getMinutes();
    if (parseInt(min, 10) < 10)
    min = `0${min}`;
    const sec = a.getSeconds();
    const dateFormat = `${date} ${month} ${year}`;
    const timeFormat = `${hour}:${min}`;
    return [dateFormat, timeFormat];
}