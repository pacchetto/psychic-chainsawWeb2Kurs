function startGreetingTimer(message, seconds, callback) {
    setTimeout(() => {
      console.log(message);
      callback();
    }, seconds * 1000);
  }
  
  startGreetingTimer("Привіт!", 3, () => alert('Time is up!'));
  