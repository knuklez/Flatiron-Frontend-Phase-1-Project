/* AAAAA console.log("main.js connected");

const searchTermsInput = document.body.querySelector("#search-terms");
AAAA */
//adding and querying api

/* AAAA const getMealCategories = async () => {
  const mealCategoriesApiURL =
    "https://www.themealdb.com/api/json/v1/1/categories.php";
* AAAA/

  //try/catch is an error checking/catching method (check mdn).  see the location of the code.  has been moved inside of the try/catch - I left the original code outside of the try/catch.

  /* **********try/catch example using code from elswhere in the file/
    try {
    const response = await fetch(mealCategoriesApiURL);
    const data = response.json()
    console.log("data:", data); //data variable must be defined inside of the try/catch
    } catch (error) {
     console.log(error)
     alert("something went wrong, try again later")   
    }
    */

  //need to do a fetch = review "await"

 /* AAAA  const response = await fetch(mealCategoriesApiURL); //if use await here then also use on line 30 - const data = await response.json()
AAAA */
  //could use "then" method instead of "await" method by adding it to the "fetch" - const response = await fetch(mealCategoriesApiURL).then(response => json())

  //const data = response.json()  //needed to add await as line 26 is asynch but line 30 is Notification.  only getting a promise as output in live code

 /* AAAA const data = await response.json();

 * AAAA/

  //console.log("data: ", data) //tested and used instead of console.log(data)

  //const data = response.json converts response into a json format - like saving a letter as a ".doc" file.  can use as a json file at this point

  //const data = response.json() added after verifying after fetch worked

  //console.log(response) use to see if working (it is working) - tested

  //console.log(data) to see response in a json format - tested
};
// review purpose of "async"

/* AAAA const handleFormInputFocus = async () => {
  console.log("focus occurred");

  await getMealCategories();
};
searchTermsInput.addEventListener("focus", handleFormInputFocus);
AAAA */

//EVENT LISTENER
const button = document.querySelector(".btn");

button.addEventListener("click",  () => {
    alert("Event Listener Requirement Met")
}
);

