# Infinite Scroll

## Implementation:

- Make the fetch request to the api and paginate / limit the number of data fetched per page (like fetch 10 datas for first page and so on).
- Call the fetch method in useEffect with pages being the dependency.
- Create a function to handle the scrolling i.e. when the user has reached the bottom of the viewport it should show a loader which indicates that more data is being fetched and hence after sometime more data should be fetched for next page.
- This function should also be called inside a useEffect with loading and hasMore as dependencies.
