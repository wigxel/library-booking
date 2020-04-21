
LANDING PAGE FOR THE LIBRARY APPLICATION
========================================
This page is meant to be the first on going to the URL. It should have:

  Sign-in button
  --------------
  On clicking the sign-in button, a form should pop-up with the **input for ID** and **input for password** and a submit button. If the ID and password checks out, it should take the user to the Admin dashboard.
  
  Sign-up button
  --------------

  The Sign-up button should call up a pop up form with inputs for 
  * Name of School 
  * Email address 
  * Contact Information 
  * Password 
  * Address
  * Submit button
  
  On successfully regsitering there show be a pop-up message of **registration successful**.
  
  This page should also have information explaining what the application is capable of.
  
 
ADMIN DASHBOARD FOR SCHOOLS
========================================


HOME PAGE FOR SCHOOLS LIBRARY
========================================
After adding books for the admin dashboard, it should be seen on the home page for students and teachers to borrow using their personalised ID.

The Home page should have:

  Filter component
  ----------------
  This filter component should have an input for searching by **name of book / name of author**.
  It should have an input to **search by category of books**. The Categories should be:
  * Primary 1- 6
  * Jss 1 - 3
  * Sss 1- 3
  * Teachers
    
  Book component
  ----------------
  The body of this page should be filled with with books the schools has which will be coming from the admin dashboard/database. The books will be presented to the user using the book component. The book component would have : 
* Book Title
* Quantity available
* Cover Photo
* Authors 
* Edition
* Pages

Then a **button (borrow button)** would be attached to the book component to trigger the borrowing form. On click of the borrow button, a form with an **input for ID** and a **submit button** should pop up and the user can input their ID to request for the book. if the ID of the user matches an ID in the database, and the ID is allowed to borrow the particular book, then the request will be granted and a notification would be shown (pop-up notification).
