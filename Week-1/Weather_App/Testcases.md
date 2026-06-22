# Weather App - Manual Test Cases

## Page Load & UI

1. Verify the page title displays "Weather App" in the browser tab on load. [Pass]
2. Verify the background image is visible in the upper section on page load. [Pass]
3. Verify the "Enter City Name" label is displayed in the user input card on load. [Pass]
4. Verify the city name input field shows placeholder text "City Name" on load. [pass]
5. Verify the Search button is visible and enabled on page load. [Pass]
6. Verify the weather card displays default values (NA, NA°C, Feels like NA°C) on initial load. [Pass]
7. Verify the location pin icon (📍) is visible next to the city name in the weather card. [Pass]

## Search – Valid Input

9. Enter a valid city name (e.g., "Pune") and click Search; verify the city name updates in the weather card.
10. Enter a valid city name and click Search; verify the region/country field updates with the correct location data.
11. Enter a valid city name and click Search; verify the temperature value updates in the weather card.
12. Enter a valid city name and click Search; verify the weather condition text (e.g., Sunny, Cloudy) updates in the weather card.
13. Enter a valid city name and click Search; verify the "Feels like" temperature updates with the correct value and °C unit.
14. Enter a different valid city (e.g., "London") after a previous search; verify all weather card fields update to the new city's data.
15. Enter a city name with mixed case (e.g., "mUmBaI") and click Search; verify weather data is fetched and displayed correctly.

## Search – Invalid & Empty Input

16. Click Search without entering a city name; verify an alert message "Please enter a city name" is displayed.
17. Enter only spaces in the city input and click Search; verify the app handles it appropriately (alert or no API call).
18. Enter an invalid or non-existent city name (e.g., "XYZ123") and click Search; verify the app handles the error gracefully.
19. Enter special characters (e.g., "@#$%") in the city input and click Search; verify the app does not crash.

## Input Field Behavior

20. Verify the user can type and edit text freely in the city name input field.
21. Verify the input field accepts alphanumeric characters and spaces.
22. Verify clearing the input field and searching again triggers the empty-input validation alert.

## Layout & Responsiveness

23. Verify the user input card and weather card are both visible within the upper section after a successful search.
24. Verify the lower section displays four equally styled boxes in a row on a standard desktop screen.
25. Resize the browser window and verify the layout remains usable without overlapping critical elements.

## API & Data Accuracy

26. Search for a known city and verify the displayed temperature is a numeric value.
27. Search for a known city and verify the "Feels like" value is different from or equal to the main temperature as returned by the API.
28. Search for a city and verify weather data loads within a reasonable time (network permitting).
29. Perform a search with network disconnected; verify the app handles the failure without breaking the page.

## Regression & Edge Cases

30. Perform multiple consecutive searches for different cities; verify each search overwrites the previous weather card data correctly.
31. Enter a very long city name string and click Search; verify the input and weather card do not break the layout.
32. Search for a city, then refresh the page; verify the weather card resets to default NA values.
