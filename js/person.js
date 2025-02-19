const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
const profileContainers = document.querySelector(".grid_1-1");

if (profileContainers) {
  let fetchUrl = `https://dummyjson.com/users/${id}`; // Opdateret URL

  fetch(fetchUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("Data fetched:", data);
      showList([data]); // Opdateret for at sende en enkelt bruger
      document.getElementById("apply-filters").addEventListener("click", () => {
        applyFilters([data]); // Opdateret for at sende en enkelt bruger
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function showList(users) {
  console.log("Showing user:", users);
  const markup = users
    .map(
      (user) => `
        <div class="grid_1-1_2-img">
          <div >
            <div class="name_mobile">
              <h2>${user.firstName} ${user.lastName}</h2>
              <h4>${user.age} years, ${user.address.state}</h4>
            </div>

            <img src="https://randomuser.me/api/portraits/${user.gender == "female" ? "women" : "men"}/${user.id % 100}.jpg" alt="" />
          </div>

          <div class="grid_1-1_2">
            <img src="https://randomuser.me/api/portraits/${user.gender == "female" ? "women" : "men"}/${user.id % 100}.jpg" alt="" />
            <img src="https://randomuser.me/api/portraits/${user.gender == "female" ? "women" : "men"}/${user.id % 100}.jpg" alt="" />
          </div>
        </div>
        <div>
          <div class="name_mobile2">
              <h2>${user.firstName} ${user.lastName}</h2>
              <h4>${user.age} years, ${user.address.state}</h4>
          </div>
          <div class="div_info">
          <p> <span>Age:</span> ${user.age}</p>
            <p> <span>City:</span>  ${user.address.city}</p>
            <p> <span>Height:</span> ${user.height} cm</p>
            <p> <span>Weight:</span> ${user.weight} kg</p>
            <p> <span>Haircolor, type:</span> ${user.hair.color} ${user.hair.type} </p>
            <p> <span>Eye color:</span> ${user.eyeColor}</p>
          </div>
          <div class="div_contact">
            <div class="add_to_basket">
              <a href="login.html"><h5>Save this profile</h5></a>
            </div>
            <div class="add_to_basket">
              <a href="mailto:"><h5>Send a message</h5></a>
            </div>
            <div class="add_to_basket">
              <a href="login.html"><h5>Book now</h5></a>
            </div>
          </div>
        </div>

        `
    )
    .join("");
  console.log("Generated markup:", markup);
  profileContainers.innerHTML = markup;
}
