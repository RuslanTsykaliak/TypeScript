// Enums

// Enum is a way to define a set of NAMED CONSTANTS. Enums allow you to define a collection of related values that can be used interchangeably in your code.

// For example, let's say you're building a weather app and you want to define a set of possible weather conditions like "sunny", "cloudy", "rainy" and "snowly". You could define an enum like this:

enum WeatherConditions {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
  Snowy = "snowy",
}

// In this example, WeatherConditions is the name of the enum, and each of the values (e.g. Sunny, Cloudy, etc.) is assigned an automatic numerical value starting from 0. You can also assing specific values to each enum member.

// Usage
const currentWeather = WeatherConditions.Sunny;
console.log(`The current weather is ${currentWeather}`);
// Output: The current weather is sunny
