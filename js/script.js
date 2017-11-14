var vacation = {
  destination: "Europe",
  countries: ["France","Italy","Spain","Germany"],
  cities: ["Paris", "Florance", "Madrid", "Berlin"],
  hotel: true,
  luggage: {
    carryon: ["laptop", "toiletries", "makeup bag", "under garments"],
    numberOfBags: 2
  },
  message: function(city, numberOfBags) {
    console.log("Welcome to " + city + "You have " + numberOfBags + " bags");
  }

};
