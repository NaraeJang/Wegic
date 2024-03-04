# Wegic

Welcome to Wegic - Your Mobile Wedding Invitation Solution. Originally conceived as a UX/UI project for a Korean-Canadian couple entering the Canadian wedding market, I've brought the Wegic Mobile Wedding Invitation to life through web development. Mobile invitations have gained popularity for their convenience, cost-effectiveness, environmental consciousness and social media compatibility. Focused on the mobile version, Wegic is fully responsive across various mobile devices, offering notable features such as a dynamic calendar, D-day countdown, and the ability to save data and leave comments for the couple.

#### Features

- **Accessible Database:** Utilizing **Google Sheets** as Wegic's database for easy data viewing and editing by users unfamiliar with databases.
- **Event Overview Page:** Access all essential information about the event on a single page.
- **Multilingual Support:** Wegic supports English and French based on the target audience.
- **Our Story Section:** Share the couple's romantic stories.
- **Gallery Section:** Swipe through multiple couple photos.
- **Contact Section:** Directly linked to Groom & Bride contact info for easy celebration coordination.
- **Calendar Section:** Customized calendar functions that calculates days, recognizes weekdays, and displays targeted month and D-day.
- **Our Wedding Day & Wedding Party Section:** Display the schedule and wedding party details.
- **Gift Registry Section:** Link to the gift registry website for easy gifting information.
- **Location Section:** Utilizing the **Google Map Embed API** to display the location and any necessary information about the place.
- **RSVP Section:** **Fetch (POST) data to Google Sheets** to manage guest attendance, number of attendees, and food preferences.
- **Live Wedding Section:** Allows remote participation in the wedding through a provided link.
- **Comment Section:** Users can **leave and edit comments on the page by posting data to Google Sheets.**

#### Google Sheet DB

[Access the Google Sheet](https://docs.google.com/spreadsheets/d/1X-2b6CSyaXiua-gUG3LLZ7QMXjY9hegZcDf2g0FdyPg/edit?usp=sharing)

#### Live Demo

[Experience the Live Demo](https://naraejang-wegic-project.netlify.app/)

## Installation

To run Wegic locally:

```bash
# Clone the repository
git clone https://github.com/NaraeJang/wegic.git

# Navigate to the project directory
cd wegic

# Install dependencies
npm install

# Start the application
npm start
```

## Dependencies & Script

| Name    | Version | Name         | Version |
| :------ | :------ | :----------- | :------ |
| Vite.js | 5.0.8   | Sass         | 1.71.1  |
| Dayjs   | 1.11.7  | React-icons  | 4.12.0  |
| Swiper  | 11.0.6  | Font Awesome | script  |
| nanoid  | 5.0.6   | xtypejs      | 0.7.1   |

## Process

### Project background

Originally conceived as one of my UX/UI projects for a Korean-Canadian couple entering the Canadian wedding market, and I decided to bring the Wegic Mobile Wedding Invitation to life through web development.

### Role as UI/UX Designer

As a UI/UX Designer, I collaborated closely with my clients to gather user requirements, analyze competitors' offerings, and develop the mobile invitation structure. I created and refined paper wireframes, serving as the basis for digital wireframes. Designing high-fidelity UI prototypes, I ensured seamless user flows through user testing.

### Role as Front-end Developer

As a Front-end Developer, I planned the division of each section to build the application, created components based on different sections in the page, and started editing the SCSS. After finalizing the visuals, I focused on implementing the functionalities, and constant testing was performed to reduce errors.

### Learnings

#### Structural Thinking

The project required thinking about structures, connections among functions, pages, and global variables, enhancing my logical thinking.

#### Google App Script

Understanding how Google App Script works took time, but it proved to be interesting to use Google Sheets as a Database for the app.

#### Deep Dive into Functions

Creating the dynamic calendar involved developing several functions, managing state, and passing values to components, showcasing the importance of understanding their connections.

### Overall Growth:

Each aspect of this project contributed to improving my skills, problem-solving abilities, and overall understanding of app development.

## How Can It Be Improved?

## Introduction Video

Preparing...

<!-- [![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/YOUTUBE_VI...)](https://www.youtube.com/watch?v=YOUTU...) -->

## License

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

Copyright (c) 2024 Narae Jang

[The MIT License (MIT)](https://opensource.org/licenses/MIT)
