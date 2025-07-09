function findMostFrequentWord(){
    // 1.
    const text=document.getElementById("text").innerText;
    // 2.
    const words=text.toLowerCase().replace(/[^a-z\s]/g, "").split(/\s+/);
          // 3. Count frequency
      const freq = {};
      words.forEach(word => {
        freq[word] = (freq[word] || 0) + 1;
      });

      // 4. Find the most frequent word
      let maxCount = 0;
      let mostFrequent = "";

      for (let word in freq) {
        if (freq[word] > maxCount) {
          maxCount = freq[word];
          mostFrequent = word;
        }
      }

      // 5. Display the result
      const resultDiv = document.querySelector("#result");
      resultDiv.innerText = `Most frequent word: "${mostFrequent}" (Count: ${maxCount})`;
    }

    findMostFrequentWord(); // Call the function

    
