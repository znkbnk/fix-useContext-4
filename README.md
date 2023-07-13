This React project contains intentional
mistakes related to using the useContext
hook to manage state globally. By
identifying and fixing these errors
in the code, you will gain practical 
experience and improve your skills with
implementing useContext correctly in
React applications.

Mistake 1: Importing wrong context
Fix: In Page.js, update the import
statement to import {ThemeContext} 
from './App' rather than importing
an incorrect file. This will ensure
Page.js is using the ThemeContext 
created and exported in App.js.

Mistake 2: Missing braces
Fix: In Page.js, update the return 
statement to use curly braces {theme} 
instead of quotes when passing the 
theme variable into the div's className.

Mistake 3: No Context Provider
in App component
Fix: Add the <ThemeContext.Provider>
in App to provide context to consuming
components.

Mistake 4: Typo in Context name export
Fix: Fix typo when exporting
const - export const ThemeContext.

Mistake 5: Context exported but
not created
Fix: Create context before exporting
export const ThemeContext = createContext();

Mistake 6: Default value not set in
Context creation
Fix: Set default value
export const ThemeContext = createContext('light');
