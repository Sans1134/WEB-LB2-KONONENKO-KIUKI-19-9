let intervalId;

//Start button - starts generation
function startAddingRows() {
  const intervalSeconds = Number(document.getElementById("intervalInput").value);
  if (!intervalSeconds || intervalSeconds < 1) {
    alert("Please enter a valid interval in seconds.");
    return;
  }

  //Call 'addRow()' every 'intervalSeconds'
  intervalId = setInterval(addRow, intervalSeconds * 1000);
}

//Stop button - stops generation
function stopAddingRows() {
  clearInterval(intervalId);
}

function addRow() {
  //Find the first 'tbody' child of '#table_1'
  const tableBody = document.querySelector("#table_1 tbody");
  //Insert new row to the end
  const newRow = tableBody.insertRow(-1);
  
  for (let i = 0; i < 3; i++) {
    const newCell = newRow.insertCell(i);
    newCell.textContent = generateRandomNumber();
    
    //First row is unique
    if(tableBody.rows.length === 1)
      newCell.style.fontSize="xx-large";

    //Odd and even rows are different
    if (tableBody.rows.length % 2 === 0) {
      newCell.style.fontStyle = "italic";
      newCell.style.fontSize = "large";
     
    }
  }
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}
