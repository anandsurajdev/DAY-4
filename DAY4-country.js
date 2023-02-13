var countrydetails = new XMLHttpRequest();
countrydetails.open("GET", "https://restcountries.com/v3.1/all")
countrydetails.send();
countrydetails.onload = function () {
    var country = JSON.parse(this.responseText);
    showdetails(country);
}
function showdetails(country) {
    if(country.length > 0) {
       for(let i= 0; i < country.length; i++) {
           const { name = {}, region = '', subregion = '', population = 0 }  = country[i];
           console.log(name.common, region, subregion, population);
       }
    }
}