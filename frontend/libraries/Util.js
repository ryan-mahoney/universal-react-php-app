export const getParameterByName = function (name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

export const objectRemoveKey = function (myObj, deleteKey) {
    return Object.keys(myObj)
        .filter(key => key !== deleteKey)
        .reduce((result, current) => {
            result[current] = myObj[current];
            return result;
        }, {});
}
