// Displaying toast on manual action `Try`
document.getElementById("new-toast").addEventListener("click", function() {
  Toastify({
    text: "Achievement Progress/Unlocked - tier 2", // achievemnet text; after uncloking just Achievement Unlocked and remove tier
    title: 'Achievmenet title goes here', // achievement title goes here
    destination: 'https://valletta.casinogrounds.com/profile/17-skylined97/achievements',
    avatar: 'https://storage.googleapis.com/gwen-prod-storage/0ed3b3ab-f3cd-4f2c-9ad0-d3f755729ae7/1601380836265-acheivement-badges-240x240-07.svg', // final avatar
    duration: 3000,
    gwenCoinAmount: 80,
    close: true,

  }).showToast();
  i++;
});
