
var n = document.getElementById("sliderSize").value;
document.getElementById("dataDisplay").innerText = ` Choose data size( ${n} )`;
var speed = document.getElementById("sliderSpeed").value;
document.getElementById("multi").innerText = `speed x ${speed}`;

document.getElementsByClassName("createRandArr")[0].addEventListener("click",resizeArr);

document.getElementById("sliderSpeed").addEventListener("input",()=>{
  speed = document.getElementById("sliderSpeed").value;
  document.getElementById("multi").innerText = `speed x ${speed}`;
});


function resizeArr(){
  let e = document.querySelector(".arrayData");
  var child = e.lastElementChild; 
  while (child) {
      e.removeChild(child);
      child = e.lastElementChild;
    
}

n = document.getElementById("sliderSize").value;
document.getElementById("dataDisplay").innerText = ` Choose data size( ${n} )`;
createArray(n,100);
}




// This function returns promised time delay of what is asked
function time(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms/speed);
  });
}




// function to create bars
async function createArray(n = 15, h = 100) {
  // Selecting a class to append array Bars
  let arrayData = document.querySelector(".arrayData");

  //Generating 20 random array elements
  for (let i = 0; i < n; i++) {

    // Generating 20 random heights from 1 to 105
    // 6 is added as if the div height is lesser than this the innner HTML is leaking
    let height = (Math.floor(Math.random() * h) + 6);

    //creating an element "div"
    let bar = document.createElement("div");

    await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 50));

    // Adding class "bar" to "div"
    bar.classList.add("bar");

    // Provide height to the bar
    bar.style.height = `${height * 3}px`;

    //Assigning inner content to bars so that we can observe the heights
    bar.innerHTML = height * 3;

    // Appending the array of if bars to a selected div
    arrayData.appendChild(bar);
  }
}

createArray();





//Function to Perform SelectionSort
async function selectionSort(n = 15) {
  let heights = document.getElementsByClassName("bar");

  for (let i = 0; i < n - 1; i++) {

    let mini = i;

    heights[i].style.backgroundColor = "orange";

    //Looping all the elements with idx greater than i and checking for minimum
    for (let j = i + 1; j < n; j++) {

      // Making the current traversing height of redbg
      heights[j].style.backgroundColor = "red";

      //Adding delay before starting the new iteration
      await time(500);

      // Checking if the current minium is greater than current element
      if (parseInt(heights[j].innerHTML) < parseInt(heights[mini].innerHTML)) {
        if (mini != i) {
          //
          heights[mini].style.backgroundColor = "rgb(0, 183, 255)";
        }
        mini = j;
      }

      else {
        heights[j].style.backgroundColor = "rgb(0, 183, 255)";
      }


    }

    heights[mini].style.backgroundColor = "rgb(0, 183, 255)";

    //Swaping the mini with the i-th element
    if (mini != i) {
      let temp1 = heights[mini].innerHTML;
      let temp2 = heights[mini].style.height;

      heights[mini].innerHTML = heights[i].innerHTML;
      heights[mini].style.height = heights[i].style.height;
      heights[i].innerHTML = temp1;
      heights[i].style.height = temp2;
      time(500);

    }

    // As loop ends we get the correct idx a i th position
    heights[i].style.backgroundColor = "lightgreen";

    await time(300);

  }
  //Making the last bar color same as rest of them
  heights[n - 1].style.backgroundColor = 'lightgreen';
}




//Function to perform bubbleSort
async function bubbleSort(n = 15) {

  let heights = document.querySelectorAll(".bar");

  for (let i = 0; i < n - 1; i++) {

    //Shifting the largest number at the back of array
    for (let j = 0; j < n - 1 - i; j++) {

      let valin1 = parseInt(heights[j].innerHTML);
      let valin2 = parseInt(heights[j + 1].innerHTML);
      let valst1 = heights[j].style.height;

      heights[j].style.backgroundColor = "orange";
      heights[j + 1].style.backgroundColor = "orange";
      console.log(heights[j + 1]);
      await time(600);

      // swapping the two consecutive nodes is previos is greater
      if (valin1 > valin2) {

        heights[j].innerHTML = heights[j + 1].innerHTML;
        heights[j].style.height = heights[j + 1].style.height;
        heights[j + 1].innerHTML = valin1;
        heights[j + 1].style.height = valst1;
        swap = true;
      }

      await time(500);

      heights[j].style.backgroundColor = "rgb(0, 183, 255)";
      heights[j + 1].style.backgroundColor = "rgb(0, 183, 255)";
      await time(100);

    }

    // Every last position gets the correct idx
    heights[n - 1 - i].style.backgroundColor = "lightgreen";
  }

  //Marking last element as it is in correct position
  console.log(heights[0]);
  heights[0].style.backgroundColor = 'lightgreen';

}





// Function to perform insertion Sort
async function insertionSort(n = 15) {

  let heights = document.querySelectorAll(".bar");

  for (let i = 1; i < n; i++) {
    let key1 = parseInt(heights[i].innerHTML);
    let key2 = heights[i].style.height;
    let j = i - 1;
    console.log(key1);

    heights[i].style.backgroundColor = "orange";

    //Checking if current element is lesser than the values of the previously sorted array
    while (j >= 0 && parseInt(heights[j].innerHTML) > key1) {

      heights[j + 1].style.backgroundColor = "orange";

      await time(500);

      heights[j + 1].innerHTML = heights[j].innerHTML;
      heights[j + 1].style.height = heights[j].style.height;

      heights[j].innerHTML = key1;
      heights[j].style.height = key2;

      heights[j + 1].style.backgroundColor = "lightgreen";
      j--;

    }

    await time(500);

    heights[j + 1].style.backgroundColor = "lightgreen";
    if (i == 1) {
      heights[i].style.backgroundColor = "lightgreen";
    }
  }

}






// Element that stores all the bars (divs) 
var heights = document.getElementsByClassName("bar");

// This function selects the pivot position 
async function pivot(l, r) {
  let i = l - 1;
  let piv = parseInt(heights[r].innerHTML);

  await time(200);
  heights[r].style.backgroundColor = "red";
  await time(300);

  // Looping to get all the elements less than equal to a[n] to the position
  for (let j = l; j < r; j++) {
    heights[j].style.backgroundColor = "orange";
    await time(600);

    // If the current elements height is less than pivot then swap i+1 th and j+1 th idx
    if (parseInt(heights[j].innerHTML) <= piv) {
      i++;
      await time(600);
      if (i > l) {
        heights[i - 1].style.backgroundColor = "rgb(0, 183, 255)";
      }
      heights[i].style.backgroundColor = "white";
      await time(600);
      if (i != j) {
        let temp1 = heights[j].innerHTML;
        let temp2 = heights[j].style.height;

        heights[j].innerHTML = heights[i].innerHTML;
        heights[j].style.height = heights[i].style.height;
        heights[i].innerHTML = temp1;
        heights[i].style.height = temp2;
      }

      await time(600);
    }
    if (j != i) {
      heights[j].style.backgroundColor = "rgb(0, 183, 255)";
    }
  }
  i++;

  // Now replacing the i+1 th idx with the pivot
  let temp3 = heights[r].innerText;
  let temp4 = heights[r].style.height;

  heights[r].innerText = heights[i].innerText;
  heights[r].style.height = heights[i].style.height;
  heights[i].innerText = temp3;
  heights[i].style.height = temp4;
  heights[r].style.backgroundColor = "rgb(0, 183, 255)";
  await time(500);
  heights[i].style.backgroundColor = "lightgreen";

  // Returning pivot idx
  return i;
}

// Function to perform quick Sort
async function quickSort(n = 15, l = 0, r = n-1) {

  if (l < r) {
    // Fixing the pivot position in array
    let piv = await pivot(l, r);

    // Calling low to pivot -1 to fix element in it
    quickSort(n, l, piv - 1);

    // Calling pivot + 1 to high to fix element in it
    quickSort(n, piv + 1, r);
  }
}





let selec = document.getElementsByClassName("selection")[0];
let bub = document.getElementsByClassName("bubble")[0];
let inser = document.getElementsByClassName("insertion")[0];
let quk = document.getElementsByClassName("quick")[0];

selec.addEventListener("click",()=>selectionSort(n));
bub.addEventListener("click",()=>bubbleSort(n));
inser.addEventListener("click",()=>insertionSort(n));
quk.addEventListener("click",()=> quickSort(n,0,n-1));

let ref = document.getElementsByClassName("refresh")[0];
ref.addEventListener("click",()=>{
  window.location.reload();
})



