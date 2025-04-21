
# Project Overview, Notes, CRUD Functionality (rc-devs)

## Project Overview
This daily task manager was not my original plan for my personal project in this course. It started out as a way to practice using services and templates, concepts I had been struggling with, but in that practice it become semi-functional so I ran with it!

The manager is simple; a single user is given a default array of daily tasks that they can read, and from there they can add new tasks or delete tasks as they choose. They can also update the 'status' of the tasks, and the card on which the task is displayed changes to a corresponding color. 

While the app is not super streamlined or pleasing to the eye, it is basically functional. I have actually been using it as part of my morning routine, part testing and (surprisingly!) part convenience. 

I plan on adding other features to this app, and am currently working on these in the dev branch.

## Project Development Notes (Non-Angular; rc-devs)
Utilize README.md for initialization steps for project.

Using the development tools has been extremely helpful with this project. It can be difficult at times to intuitively identify where elements of the code are displaying when multiple components are being rendered, but the dev tools help to solve that issue. 

In addition to our class, rewatching video lectures from Max at Academind (https://github.com/mschwarzmueller) and reading through the angular documentation (https://angular.dev) has been crucial for this to be anywhere near functional 🫡. 

## CRUD Functionality (Non-Angular; rc-devs)
C - Add New Task; input task name and description
R - Read the default array and newly created tasks in the browser
U - Change Status; select new status from drop-down and click change status
D - Delete; delete any default or added task

## Intended Use
This daily task manager app is meant to help manage tasks (in this demo, household chores) throughout a workd day and provide a historical view for accountability beyond. 

This version uses session storage for development purposes, but could utilize local storage to persist beyond single session use.

## Practical Use and Features
The task manager loads with the option to select a new checklist or review history. Upon first use/using session storage there is no history.

### New Checklist
Upon selecting 'new checklist', the default tasks are loaded and displayed. The task card displays the task name, a button to toggle its description, its status, a change status button, and a delete button.

This selection also displays an 'add task' and 'submit' button

### Task Card

##### Toggle description
When toggled, the show description shows or hides the description or notes regarding the task. This allows for quick reference without taking up room in the UI. Each task description is toggled independently.

##### Task Status
Each task loads with a select option menu with the values 'incomplete', 'in progress' and 'complete'. The default value is 'incomplete'.

The user selects the task status, and clicks change status to complete the change. Upon click 'change status', the UI updates with a color associated with the chosen status, allowing for quick reference for the user.

##### Delete
The Delete button removes the default or added task from the list. 

### Add New Task
Clicking 'add new task' removes the button and displays a form. The form includes an input for entering the task name and a textarea for description or instructions. The task name input is required. The form also contains an add task button and a cancel button.

#### Add Task Inputs
The task name input is required by the form, and the description is optional

#### Add Task
Upon completion of the form, the add task button pushes the new task into the checklist, and returns the 'add new task' button

#### Cancel Button
The cancel button removes the form and does not update the checklist. It removes the form and restores the 'add new task' button

### Submit
Upon submit, the window asks for confirmation, to ensure the user does not erroneously submit the checklist. A 'no' selection returns the user to the list without editing anything.

Upon confirmation, the checklist and its data is pushed to history for future reference. A time and date stamp is included, and can be used as a reference id.


## History
The history component is meant to be used by the user for accountability of previous task lists. The current version uses session storage for development purposes, and so resets after each refresh.

The history component is accessed via the 'review history' button.  Upon click, any submitted checklists display in a card, showing the task name and its status at the time of submission. The date and time of submission is also displayed.

Upon clicking 'new checklist', the user is returned to the most recent checklist, allowing for historical reference while still utilizing the task list. 

