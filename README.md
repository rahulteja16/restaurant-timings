Following assumptions & code choices have been made in this assignment subject to discussion.

## Running the application

- This app is built with `create-react-app` boiler plate.
- To Run the app, follow

```
npm install
npm run
```

- Verify test cases and code coverage with

```
npm test
npm test -- --coverage
```

## API Assumptions

- Custom hook `useFetchTimings` to mock API call with `setTimeOut` to fetch data.
- The app assumes there will always be a sequence of open & close objects in `days` array.
- Sequence of multipe open/close objects in a `days` array is not expected. Hence, the following JSON data is treated as **invalid**.

```
"tuesday": [
   	{ "type": "open", "value": 36000 },
	{ "type": "open", "value": 36000 },
    { "type": "close", "value": 64800 }
 ],
```

- If timings are spread across multiple days, then the assumption is that the restaruant will close within 2 days, i.e a restaurant open on **Monday** should be closed on **Tuesday**.
- If spead across two days, the first day JSON data should end with **opening time** and second day JSON data should start with **closing time**. So, the following JSON data is considered **invalid**.

```
 "saturday": [
    { "type": "close", "value": 3600 },
    { "type": "open", "value": 36000 }
  ],
  "sunday": [
    { "type": “open”, "value": 3600 },
  ]
```

## Formatted Data Object

- Foramtted response is converted into an array of `Schedule` object that is passed down into the compenent `OpeningItem`. Structure of `Schedule` object:

```
{
    day: string, // monday
    isToday: bool, // true or false to show TODAY text
    openHrs: string[] // ['10 AM-6 PM']
}
```

## `openHrs` array logic

- Initial Check: Last index of `days` array to be close/open.
- Type is `close`: Loop though the array to find `open` objects which will be used to calculate the **opening time** of the restaurant and next occuring index of the `open` object will be the **closing time** as there cannot be multiple instances of open/close together.
- Type is `open`: Fetch the next `days` array and the first object of the array will have the **closing time**. This value is used to calculate the **closing time**.

## Design System

- Minimum necessary design system has been used as required by the applicaiton. In production, the design system will be much more elborate and scalabe.
- Used **Styled Components** for styling.

## Testing

- `OpeningSummary` and `OpeningItem` have been unit tested and with 100% code coverage.
- Snapshot tests used to quickly find any changes in generated HTML.
- Ideally, Integration tests should be written to verify the workflow, but since there is only a single API call, I feel RoI would be very less. Subject to discussion.
