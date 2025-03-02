const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");

const validNumber = (str) => {
//const regex = /1?\s[\d.][\d.][\d.]-?[\d.][\d.][\d.]-?[\d.][\d.][\d.][\d.]/g;
//const regex = /^1?\s?[(]?\d{3}[)]?\s?-?\d{3}\s?-?\d{4}$/g;
const regex = /^1?\s?([(]\d{3}[)]|\d{3})\s?-?\d{3}\s?-?\d{4}$/g;
return regex.test(str);
};

//testtd

const checkUserInput = () => {
  if (userInput.value === "") {
    alert("Please provide a phone number")
  } else if (validNumber(userInput.value)) {
    result.style.display = "block";
    //result.style.color = "black";
    result.innerHTML += `<p>Valid US number: ${userInput.value}</p>`;
    userInput.value = "";
  } else if (!validNumber(userInput.value)) {
    result.style.display = "block";
    //result.style.color = "#cc1504";
    result.innerHTML += `<p>Invalid US number: ${userInput.value}</p>`;
    userInput.value = ""
  }
};

const clearUserInput = () => {
  result.innerHTML = "";
};

checkBtn.addEventListener("click", checkUserInput);

clearBtn.addEventListener("click", clearUserInput);

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
}
