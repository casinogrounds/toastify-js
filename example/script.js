i = 0;

// Displaying toast on manual action `Try`
document.getElementById("new-toast").addEventListener("click", function() {
  Toastify({
    text: "Achievement title",
    description: 'Achievement description goes here',
    avatar: 'https://storage.googleapis.com/gwen-prod-storage/0ed3b3ab-f3cd-4f2c-9ad0-d3f755729ae7/1601380836265-acheivement-badges-240x240-07.svg',
    duration: 3000,
    close: true,

  }).showToast();
  i++;
});
