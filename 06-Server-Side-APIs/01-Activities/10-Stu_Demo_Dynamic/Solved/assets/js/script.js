var usersContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Using console.log to examine the data
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        //Creating a h3 element and a p element
        var userName = document.createElement('h3');
        var userUrl = document.createElement('p');
        var userUrla = document.createElement('a');

        //Setting the text of the h3 element and p element.
        userName.textContent = data[i].login;
        userUrla.href = data[i].html_url; 
        userUrla.target = "_blank";
        userUrla.textContent = userUrla.href;
        console.log(userUrla);

        //Appending the dynamically generated html to the div associated with the id="users"
        //Append will attach the element as the bottom most child.
        userUrl.append(userUrla);
        usersContainer.append(userName);
        usersContainer.append(userUrl);
      }
    });
}
fetchButton.addEventListener('click', getApi);
