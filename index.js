// console.log("We are making Project");
let food = document.querySelector(".food");
let indian = document.querySelector("#indian");
let canadian = document.querySelector("#canadian");
let american = document.querySelector("#american");
let thai = document.querySelector("#thai");
let british = document.querySelector("#british");
let russian = document.querySelector("#russian");
let recipe;
const fetchData = async (area) => {
  const api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  const data = await api.json();
  recipe = data.meals;
  // console.log("my api result ", data.meals);
  showData(recipe);
};
const serachRecipe = () => {
  let input = document.querySelector("#search");
  input.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      let inputValue = input.value;
      // console.log(inputValue);
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
      );
      const data = await api.json();
      recipe = data.meals;
      showData(recipe);
    }
  });
};
serachRecipe();
let showData = (recipe) => {
  food.innerHTML = recipe
    .map(
      (meal) => `<div style="text-align:center"><div>
<img src=${meal.strMealThumb} style="width:240px;border-radius:10px;border:2px solid blue";/>
</div>
<h5 style:"margin:10px">${meal.strMeal}</h5>
</div>`
    )
    .join("");
};

// fetchData("indian");
// let showdata = async () => {
// recipe = await fetchData("indian");
// console.log(recipe);
// food.innerHTML = recipe
//   .map(
//     (meal) => `<div style="text-align:center"><div>
//   <img src=${meal.strMealThumb} style="width:240px;border-radius:10px;border:2px solid blue";/>
//   </div>
//   <h5 style:"margin:10px">${meal.strMeal}</h5>
//   </div>`
//   )
//   .join("");
// };
// recipe = fetchData("indian");
// console.log(recipe);
// showdata();
fetchData("indian");
american.addEventListener("click", () => {
  fetchData("american");
});
indian.addEventListener("click", () => {
  fetchData("indian");
});
thai.addEventListener("click", () => {
  fetchData("thai");
});
canadian.addEventListener("click", () => {
  fetchData("canadian");
});
british.addEventListener("click", () => {
  fetchData("british");
});
russian.addEventListener("click", () => {
  fetchData("russian");
});
