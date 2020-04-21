# LIBRARY BOOK-KEEPING APPLICATION
This application is for the pupose of making the operation of a library in a school semi-automated by storing the physical book in a database and monitorin the inflow and out flow of books in the library. This will help monitor books which are due for return and track missing books with the ID of the borrower.

## LANDING PAGE FOR THE LIBRARY APPLICATION

This page is meant to be the first on going to the URL. It should have:

  ### Sign-in button

  On clicking the sign-in button, a form should pop-up with the **input for ID** and **input for password** and a submit button. If the ID and password checks out, it should take the user to the Admin dashboard.
  
  ### Sign-up button


  The Sign-up button should call up a pop up form with inputs for 
  * Name of School 
  * Email address 
  * Contact Information 
  * Password 
  * Address
  * Submit button
  
  On successfully regsitering there show be a pop-up message of **registration successful**.
  
  This page should also have information explaining what the application is capable of.
  
 
## ADMIN DASHBOARD FOR SCHOOLS

The Admin dashboard is where the updates come from. it basically should have two sides, the side navigation (left side) and the body (the right hand right).

  ### The navigation plane
  This should contain a search filter component which contains an input to take in the authors name or book title and a search button.
  The navigation plane would also contain the categories of books. on link of any category, the books on the right hand side is filtered to show books of only the clicked category.
  
  ### The body
  The body is basically a list of books in the database.
  The list of books is displayed using the book component and an **edit button** and a **delete button** is added to it.
  On click of the edit button of any book, a form should display with inputs for the book component that can be editted and updated on the click of the **update button** on the form.
  On click of the delete button, a pop-up should show to make sure the admin wants to delete the book...

## HOME PAGE FOR SCHOOLS LIBRARY

After adding books for the admin dashboard, it should be seen on the home page for students and teachers to borrow using their personalised ID.

The Home page should have:

  ### Filter component

  This filter component should have an input for searching by **name of book / name of author**.
  It should have an input to **search by category of books**. The Categories should be:
  * Primary 1- 6
  * Jss 1 - 3
  * Sss 1- 3
  * Teachers
    
  ### Book component

  The body of this page should be filled with with books the schools has which will be coming from the admin dashboard/database. The books will be presented to the user using the book component. The book component would have : 
* Book Title
* Quantity available
* Cover Photo
* Authors 
* Edition
* Pages

Then a **button (borrow button)** would be attached to the book component to trigger the borrowing form. On click of the borrow button, a form with an **input for ID** and a **submit button** should pop up and the user can input their ID to request for the book. if the ID of the user matches an ID in the database, and the ID is allowed to borrow the particular book, then the request will be granted and a notification would be shown (pop-up notification).
