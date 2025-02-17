const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
const profileContainers = document.querySelector(".grid_1-1");

if (profileContainers) {
  let fetchUrl = `https://dummyjson.com/users?id=${id}`;

  fetch(fetchUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("Data fetched:", data);
      showList(data.users);
      document.getElementById("apply-filters").addEventListener("click", () => {
        applyFilters(data.users);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function showList(users) {
  console.log("Showing list of users:", users);
  const markup = users
    .map(
      (user) => `
    
              <div class="grid_1-1">
        <div>
          <div>
            <div class="name_mobile">
              <h2>${user.firstName} ${user.lastName}</h2>
              <h4>${user.age} years, ${user.address.state}</h4>
            </div>
            <img src="https://randomuser.me/api/portraits/men/${user.id}.jpg" alt="" />
          </div>
          <div class="grid_1-1_2">
            <img src="https://randomuser.me/api/portraits/men/${user.id}.jpg" alt="" />
            <img src="https://randomuser.me/api/portraits/men/${user.id}.jpg" alt="" />
          </div>
        </div>
        <div>
          <div class="name_mobile2">
            <h2>NAME NAME</h2>
            <h4>${user.age} years, ${user.city}</h4>
          </div>
          <div class="div_info">
          <p>Age: ${user.age}</p>
            <p>City: ${user.address.city}</p>
            <p>Height: ${user.height} cm</p>
            <p>Weight: ${user.weight} kg</p>
            <p>Haircolor, type :${user.hair.color} ${user.hair.type} </p>
            <p>Eye color: ${user.eyeColor}</p>
          </div>
          <div class="div_contact">
            <div class="add_to_basket">
              <a href=""><h5>Save this profile</h5></a>
            </div>
            <div class="add_to_basket">
              <a href="mailto:"><h5>Send a message</h5></a>
            </div>
            <div class="add_to_basket">
              <a href=""><h5>Book now</h5></a>
            </div>
          </div>
        </div>
      </div>
        
        
        `
    )
    .join("");
  console.log("Generated markup:", markup);
  profileContainers.innerHTML = markup;
}
