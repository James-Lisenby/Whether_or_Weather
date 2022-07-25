var myApi = 'a783470c8e0e839974c5046a1b0cdf57'
console.log(myApi);
// Api for Open Weather source.

var searchedList = document.getElementById('searchedList');

function getApi() {

    var requestUrl = 'https://api.openweathermap.org/data/3.0/onecall?&appid=14db4ea9ed26c7d98a29d7942a363b4a';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.length; i++) {
                var listItem = document.createElement('li');
                listItem.textContent = data[i].html.url;
                searchedList.appendchild(listItem);
            }
        });
};

var searchBtn = document.getElementById('find');
searchBtn.addEventListener('click', getApi);  
