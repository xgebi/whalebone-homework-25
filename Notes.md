# Notes

- Approach
  - Option A: Create a simple app which will never be expanded and will be thrown away in week or two
  - Option B: Create a simple app which can serve as a starting point
  - I've opted for B, mostly to keep myself in check, to remind myself not to cut too many corners
- Two views vs Modal vs Hideable form
  - I've chosen to create two screens because it felt the simplest solution and had the least crowded markup template
- Service-repository pattern is an overkill for a project this size. The reason why I added it anyway is because of my developer habits. It separates function calling the backend away from potential processing of the data. So the processing of the data can be tested separately. Unit testing repository functions is not as important.
- Service-repository pattern is a personal preference for me, not a dogma.
- Note in case I'm head-desking: /list endpoint returns `owner` but /save requires `owner_name`
- I've followed object key naming conventions set by the backend. From experience, I try to avoid to changes to the data structure because in the past naming transformations between snake_case and camelCase drove me mad.
- To make or not to make a Device List table
  - pros
    - Simplified template in View
    - Follow Option B
  - cons
    - A bit of an overkill for a small application
- Validation of device types and operating system
  - In ideal situation device types and operating systems would be fetched from the backend, but in this case they are hardcoded as there are no endpoints for that
  - There's no validation for device types and operating system, instead there are options for operating systems depending on which device type is selected. The default is considered laptop/PC.
- Testing notes
  - I've chosen to test component and service because there the unit tests make the most sense
  - I've chosen not to test the views as I've hit limitations of what unit tests can do. If I were to set up tests for Views I'd opt for tools like Cypress or Playwright and had a mock backend.