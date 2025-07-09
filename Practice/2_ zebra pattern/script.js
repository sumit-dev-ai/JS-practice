const listItems = document.querySelectorAll("#cars li");

    listItems.forEach((item, index) => {
      if (index % 2 === 0) {
        // Even index: white text on black background
        item.style.color = "white";
        item.style.backgroundColor = "black";
      } else {
        // Odd index: black text on white background
        item.style.color = "black";
        item.style.backgroundColor = "white";
      }
      
    })