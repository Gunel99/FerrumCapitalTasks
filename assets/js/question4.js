// Question 4: Write code that posts data using rest api's (you can use any of them for example
// https://jsonapi.org/examples/).

let selectUsers = document.getElementById("users");

fillAllUsersIntoSelect = async () => {
  let users = [];

  const rawResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  users = await rawResponse.json();

  for (let user of users) {
    const { id, name } = user;
    // console.log(name);

    let option = document.createElement("option");
    option.setAttribute("value", id);
    option.textContent = name;

    selectUsers.appendChild(option);
  }
  //   console.log(selectUsers);
};

fillAllUsersIntoSelect();

postAlbom = async (e) => {
  e.preventDefault();

  let data = {};
  let formData = new FormData(e.currentTarget);

  formData.forEach((value, key) => (data[key] = value));

  const rawResponse = await fetch(
    "https://jsonplaceholder.typicode.com/albums",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const content = await rawResponse.json();

  let postedAlbom = document.getElementById("posted-albom");
  let li = document.createElement("li");
  let span = document.createElement("span");

  li.textContent = `Album title: ${content.title}, `;
  span.textContent = `Users: ${content.users}`;

  li.appendChild(span);
  postedAlbom.appendChild(li);
};
