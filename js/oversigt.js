const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const category = urlParams.get("category");
const profileContainers = document.querySelector(".profile-containers");

if (profileContainers) {
  let fetchUrl = `https://dummyjson.com/users?limit=150`;

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
      <div class="box" data-gender="${user.gender}" data-age="${user.age}" data-category="${user.category}">
      <a href="person.html?id=${user.id}">
          <img src="https://randomuser.me/api/portraits/${user.gender == "female" ? "women" : "men"}/${user.id % 100}.jpg" alt="profile" class="profile-img" />
          <div class="feature">
            <div class="PersonDetails">
              <h3 class="PersonName">${user.firstName} ${user.lastName}</h3>
            </div>
            <a href="person.html?id=${user.id}" class="cta-book-now">BOOK NOW&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↗</a>
          </div>
          </a>
        </div>
      `
    )
    .join("");
  console.log("Generated markup:", markup);
  profileContainers.innerHTML = markup;
}

function applyFilters(users) {
  const genderFilter = document.getElementById("gender-filter").value;
  const ageFilter = document.getElementById("age-filter").value;

  console.log("Applying filters:", { genderFilter, ageFilter });

  const filteredUsers = users.filter((user) => {
    let genderMatch = genderFilter === "all" || user.gender === genderFilter;
    let ageMatch = ageFilter === "all" || (ageFilter === "young" && user.age < 30) || (ageFilter === "middle-aged" && user.age >= 30 && user.age < 40) || (ageFilter === "old" && user.age >= 40);
    return genderMatch && ageMatch;
  });

  console.log("Filtered users:", filteredUsers);
  showList(filteredUsers);
}

// Toggle på dropdown menuen så den bliver vist eller skjult
document.querySelector(".filter-button").addEventListener("click", () => {
  document.querySelector(".filter-dropdown").classList.toggle("show");
});

// Lukker dropdown menuen når brugeren klikker uden for dropdown menuen
window.onclick = function (event) {
  if (!event.target.matches(".filter-button")) {
    const dropdowns = document.getElementsByClassName("filter-dropdown");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
