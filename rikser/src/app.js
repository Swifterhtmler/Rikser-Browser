

const life = {
    name: "Riku",
    age: 18,
    status: 404,
    bored: true,
    mood: "undefined",
    hoursWasted : "undefined"
}

try {
    if (life.status === 404) {
        console.error("Life not found. Did you try turning it off and on again?");
      } else if (life.status !== 404 && life.bored) {
          console.log("Boredom detected.");
          } else if (life.status === 200) {
              console.log("Status 200: Ready to study. Just kidding, procrastination mode activated.");
         } else {
         console.log("Life status unknown. Panic mode engaged.");
    }
} catch (error) {
    throw new Error("Unexpected error: Swedish is useful.");
}
