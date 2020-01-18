let text = "One: 'Hi Mary.' Two: 'Oh, hi.'\n" +
    "One: 'How are you doing?'\n" +
    "Two: 'I'm doing alright. How about you?'\n" +
    "One: 'Not too bad. The weather is great isn't it?'\n" +
    "Two: 'Yes. It's absolutely beautiful today.'\n" +
    "One: 'I wish it was like this more frequently.'\n" +
    "Two: 'Me too.'\n" +
    "One: 'So where are you going now?'\n" +
    "Two: 'I'm going to meet a friend of mine at the department store'\n" +
    "One: 'Going to do a little shopping?'\n" +
    "Two: 'Yeah, I have to buy some presents for my parents.'\n" +
    "One: 'What's the occasion?'\n" +
    "Two: 'It's their anniversary.'\n" +
    "One: 'That's great. Well, you better get going. You don't want to be late.'\n" +
    "Two: 'I'll see you next time.'\n" +
    "One: 'Sure.' Bye.'";

// Task 1
console.log("Task1\n");

let exp = /'/g;

let formatText = text.replace(exp, "\"");
console.log(formatText);


// Task 2
console.log("\nTask2\n");

exp = /(')(.+)(')/g;

formatText = text.replace(exp, "\"$2\"");
console.log(formatText);
// name
// name1
// Name

// Task 3
console.log("\nTask3\n");

const expName = /[a-z]+/i;
const expPhone = /\+[\d](\(\d{3}\)\d{3}\-\d{4})/;
const expEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;

function validate() {
    let nameField = document.getElementById("user-name");
    let phoneField = document.getElementById("user-phone");
    let emailField = document.getElementById("user-email");

    if (!expName.test(nameField.value)) {
        nameField.style.backgroundColor = "red";
        alert("Ошибка name");
    }
    else {
        nameField.style.backgroundColor = "white";
    }
    if (!expPhone.test(phoneField.value)) {
        phoneField.style.backgroundColor = "red";
        alert("Ошибка phone");
    }
    else {
        phoneField.style.backgroundColor = "white";
    }
    if (!expEmail.test(emailField.value)) {
        emailField.style.backgroundColor = "red";
        alert("Ошибка email");
    }
    else {
        emailField.style.backgroundColor = "white";
    }
}

let sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", validate);
