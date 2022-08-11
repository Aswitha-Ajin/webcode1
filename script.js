var div = document.createElement("div");

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "name");
input.setAttribute("placeholder", "Enter your name");

var button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("class", "btn btn-primary btn-sm");
button.innerHTML = "Search";
button.addEventListener("click", foo);  

var country = document.createElement("div")
country.setAttribute("id", "country");


div.append(input, button, country);
document.body.append(div);
async function foo() {
  let country_value = []
  try {
    let name = document.getElementById("name").value;
    var url = `https://api.nationalize.io/?name=${name}`;
    let response = await fetch(url);
    let result = await response.json();

    result.country.map((items) => {
      country_value.push(items)
    })
    if (country_value.length === 0) {
      return country.innerHTML = 'No country available. try another'
    } else {
      country.innerHTML = country_value.slice(0, 2).map((item) => {
        return `<p>COUNTRY :${item.country_id}, PROBABILITY :${item.probability}</p>`
      });
    }
  } catch (err) {
    console.log('error->', err)
  }
}



