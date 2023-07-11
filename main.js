console.log("main.js connected");


const searchTermsInput = document.body.querySelector("#search-terms");

//adding and querying api

const getMealCategories = async () => {
    const mealCategoriesApiURL = "https://www.themealdb.com/api/json/v1/1/categories.php"

    //need to do a fetch = review "await"

    const response = await fetch(mealCategoriesApiURL);

    const data = response.json()

    console.log(data)

    //const data = response.json converts response into a json format - like saving a letter as a ".doc" file.  can use as a json file at this point

    //const data = response.json() added after verifying after fetch worked

    //console.log(response) use to see if working (it is working) 

    //console.log(data) to see response in a json format
    
}
// review purpose of "async"
const handleFormInputFocus = async () => {
    console.log("focus occurred");

    await getMealCategories();
};

searchTermsInput.addEventListener("focus", handleFormInputFocus)