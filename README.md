# Seven Home and Away

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Assumptions
Given styled components to use. 
For a styling task to have relative and absolute layout, 
mostly related to css in react.

Allocated a couple of hours. Used CRA to boot strap project template.

Picked the approach with em as the unit for responsiveness in terms of layout. 

flex box for browser compatibility and no complex layout. 

Given one image, may generate a different sized for different sized screen with break points.

May make the component more reusable, if there are more instance of Tile is needed.
however don't want to have premature optimization because only make it looks like the image is required. 

Only added one unit test to verify it works, if the projects grow out, might add more.

## Comments
Styled components is really good for DX, also add style lint integration.

However, it uses runtime to generate css(there is a different one claims 0 runtime but still new), need to think if the website really grown out to be very complex in terms of performance.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
