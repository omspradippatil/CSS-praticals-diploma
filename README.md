# Client Side Scripting Practicals

## Live Demo

https://omspradippatil.github.io/CSS-praticals-diploma

This project contains 22 laboratory practicals for the **Client Side Scripting** subject, organized in separate folders.

Each practical is a simple, self-contained example using HTML, JavaScript, AngularJS, or React (via CDN), and one practical using Python in the browser (PyScript).

---

## Requirements

- A modern web browser (Chrome, Edge, Firefox, etc.).
- Internet connection (needed for:
  - AngularJS CDN
  - React + ReactDOM + Babel CDNs
  - PyScript CDN)

You **do not** need to install Node.js or Angular/React build tools just to run these examples from the `.html` files.

For Practical 4, there are comments describing how to install the full Angular CLI environment, but the example itself runs directly from the HTML file with AngularJS CDN.

---

## How to Run Practicals

### Option 1: Open directly in browser

1. In Windows Explorer, go to:
   - `c:/Users/OM/Desktop/Projects/CSS/`
2. Open the folder for the practical you want (for example `Practical04_AngularEnvironment_GoodMorning`).
3. Double-click `index.html` to open it in your default browser.

> This is enough for all the practicals in this project.

### Option 2: Use VS Code Live Server (recommended)

If you have the **Live Server** extension in VS Code:

1. Open the `CSS` folder in VS Code.
2. In the Explorer, right-click the `index.html` of any practical folder.
3. Click **"Open with Live Server"**.
4. Your browser will open at `http://localhost:...` and you can test the page.

This is useful especially for React and AngularJS examples.

---

## Practical List and Folders

Each practical is in its own folder with a single main file `index.html` (and sometimes extra `.js` or `.css` files).

1. **Practical 1  Hello World**  
   Folder: `Practical01_HelloWorld`  
   - Shows "Hello World" using `document.write()`, `console.log()`, and `alert()`.

2. **Practical 2  Welcome using Python script**  
   Folder: `Practical02_WelcomePython`  
   - Uses PyScript to display "Welcome" in the browser using Python code.

3. **Practical 3  JSON Objects**  
   Folder: `Practical03_JSONObjects`  
   - Creates Employee, Person, and Student objects in JSON and displays them.

4. **Practical 4  Angular environment & Good Morning**  
   Folder: `Practical04_AngularEnvironment_GoodMorning`  
   - Comments explain Angular CLI setup; page uses AngularJS CDN to display "Good Morning".

5. **Practical 5  AngularJS Form with Validation**  
   Folder: `Practical05_AngularJS_FormValidation`  
   - Form with name and email, required + basic validation.

6. **Practical 6  Data Model and View**  
   Folder: `Practical06_AngularJS_DataModelView`  
   - Employee object bound to the view using AngularJS.

7. **Practical 7  Two-way Databinding**  
   Folder: `Practical07_AngularJS_TwoWayDatabinding`  
   - Input field bound to a greeting using `ng-model`.

8. **Practical 8  AngularJS Filters**  
   Folder: `Practical08_AngularJS_Filters`  
   - Demonstrates uppercase, lowercase, currency, and date filters.

9. **Practical 9  AngularJS Events**  
   Folder: `Practical09_AngularJS_Events`  
   - Button click counter and mouseover/mouseout events.

10. **Practical 10  Display Data in Table**  
    Folder: `Practical10_AngularJS_TableDisplay`  
    - Student data displayed in a table using `ng-repeat`.

11. **Practical 11  CSS Odd and Even Table Rows**  
    Folder: `Practical11_CSS_TableOddEven`  
    - Uses CSS `nth-child(odd/even)` to style table rows differently.

12. **Practical 12  AngularJS Controller Methods**  
    Folder: `Practical12_AngularJS_ControllerMethods`  
    - Controller with multiple methods (increment, decrement, greeting) bound to buttons.

13. **Practical 13  Controllers in External Files**  
    Folder: `Practical13_AngularJS_ExternalControllerFile`  
    - AngularJS controller defined in an external JS file `app.js`.

14. **Practical 14  React Form Handling**  
    Folder: `Practical14_React_FormDataHandling`  
    - React form to handle name and email, displays submitted data.

15. **Practical 15  Pass Function Argument into React Component**  
    Folder: `Practical15_React_FunctionArgumentComponent`  
    - Parent component passes a `name` prop into a child component.

16. **Practical 16  Function Argument and React Lifecycle**  
    Folder: `Practical16_React_FunctionArgument_Lifecycle`  
    - Class component with props and lifecycle methods, toggled via a button.

17. **Practical 17  React Hooks State**  
    Folder: `Practical17_React_HooksState`  
    - Counter implemented with `useState` hook.

18. **Practical 18  Real Time Form using React Components**  
    Folder: `Practical18_React_RealTimeForm`  
    - Form that shows live preview of entered data.

19. **Practical 19  React Form Validations**  
    Folder: `Practical19_React_FormValidation`  
    - Email validation with error message and alert on success.

20. **Practical 20  Manipulate List with Key / without Key**  
    Folder: `Practical20_React_ListWithWithoutKey`  
    - Shows same list rendered with and without `key` props.

21. **Practical 21  Render List using map()**  
    Folder: `Practical21_React_ListMapFunction`  
    - Uses `map()` to render a student list with keys.

22. **Practical 22  CSS Approaches in React**  
    Folder: `Practical22_React_CSSApproaches`  
    - Demonstrates inline styles, external CSS stylesheet class, and explains CSS Modules conceptually.

---

## Notes

- Make sure you are **online** when opening the files so CDNs (AngularJS, React, PyScript) can load.
- If your browser blocks mixed or insecure content, prefer using Live Server (it serves over `http://localhost`).
- You can customize any practicals code inside its folder if your teacher asks for variations.

##  Support

If you find this project helpful, consider [supporting me](https://om-patil.com/donate).

---

##  Contact the Developer

**Developed by OM Patil**

- **Portfolio**: [ompradippatil.netlify.app](https://ompradippatil.netlify.app/)
- **GitHub**: [@omspradippatil](https://github.com/omspradippatil)
- **LinkedIn**: [OM Pradip Patil](https://in.linkedin.com/in/om-pradip-patil)
- **Email**: [omspradippatil@gmail.com](mailto:omspradippatil@gmail.com)
