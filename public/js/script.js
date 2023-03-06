const apiURL = "https://api.orhanaydogdu.com.tr/deprem/live.php";
const tableBody = document.getElementById("deprem-tablosu");

fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    const depremler = data.result;
    for (let i = 0; i < 100; i++) {
      const deprem = depremler[i];
      const row = tableBody.insertRow();
      row.insertCell().innerText = deprem.date;
      const magCell = row.insertCell();
      magCell.innerText = deprem.mag;
      if (deprem.mag >= 4.5) {
        magCell.classList.add("mag-red");
      } else if (deprem.mag >= 3.5) {
        magCell.classList.add("mag-yellow");
      } else {
        magCell.classList.add("mag-green");
      }
      row.insertCell().innerText = deprem.title;
      row.insertCell().innerText = deprem.depth;
      row.insertCell().innerText = deprem.earthquake_id;
    }
  })
  .catch(error => {
    console.error("API hatası:", error);
  });
``
