# Sidcup Family Golf Website

![Screenshot 2024-10-16 103600](https://github.com/user-attachments/assets/44cacf8d-539f-44a9-a745-f6d95de56a27)

<img src="https://github.com/user-attachments/assets/0d3a63d1-8478-44d4-bab1-cae79c4b4acd" width="33.33333333333333%"> <img src="https://github.com/user-attachments/assets/df13940e-f716-4950-b562-8b084c0f6529" width="33.33333333333333%"> <img src="https://github.com/user-attachments/assets/7aa7819b-7dd1-4243-982b-3618c2018c6c" width="33.33333333333333%">

## Overview
This project is a promotional website for Sidcup Family Golf, featuring information about the venue, services, and facilities, including the Toptracer driving range, adventure golf, and golf lessons. The website uses GSAP for smooth animations and ScrollTrigger for engaging scroll-based animations.

## Features
- Custom Cursor Animation: The site has a custom cursor with hover effects over the navigation elements.
- Video Background: The hero section includes an autoplaying background video.
- Scroll Animations: Elements animate into view as the user scrolls, powered by GSAP and ScrollTrigger.
- Responsive Design: The site is designed to be responsive, adapting to various screen sizes.

## Sections
1. Header (Navigation Bar):
   - Links to various sections: Toptracer, Golf Lessons, Adventure Golf, Coffee Shop, and Leagues.
   - Includes a custom cursor effect when hovering over navigation items.

2. Hero Section (Page 1):
   - Features a looping background video and an introduction to Sidcup Family Golf.
   - The text and elements are animated for a smooth visual experience.

3. About Us Section (Page 2):
   - Contains information about the facility’s Toptracer driving range, golf lessons, and adventure golf.
   - Images and text animate into view as the user scrolls.

4. Cards Section:
   - Provides a quick overview of key offerings like Toptracer Ranges, Adventure Golf, and Golf Lessons.
   - The cards scale and fade into view as the user scrolls down.

5. Testimonial (Page 3):
   - A customer testimonial with animated quotation marks that move into place as you scroll.

6. Call to Action (Page 4):
   - Encourages visitors to take action with striking headings and images.

7. Footer:
   - Contains location information, contact details, and links to key areas like events and lessons.

## Technologies Used
- HTML & CSS: For structuring and styling the website.
- JavaScript: For dynamic cursor functionality and scroll animations.
- GSAP (GreenSock Animation Platform): Used for smooth animations.
- ScrollTrigger (GSAP Plugin): Provides scroll-based animations for different elements.
- Remix Icon: Used for the arrow icon in the hero section.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project folder:
   ```bash
   cd <project-folder>
   ```

3. Open the `index.html` file in your browser to view the website.

## Custom Cursor Functionality

The custom cursor and blur effect follow the user’s mouse movement. Here's how it works:

- The cursor enlarges and changes border style when hovering over navigation items.
- The background color of the cursor changes back to green when the mouse leaves the hover area.

## Scroll Animations (GSAP & ScrollTrigger)

The site uses GSAP animations to create smooth transitions and ScrollTrigger to animate elements based on the scroll position.

### Key Animations:
1. Navbar Animation:
   - The navbar changes size and background color when the user scrolls past the hero section.

2. About Us Section Animation:
   - Images and text in the About Us section animate into view with a staggered effect.
   

3. Cards Section Animation:
   - The cards in the services section scale and fade in as the user scrolls.
  

## File Structure
```plaintext
├── index.html        # Main HTML file
├── style.css         # Styles for the website
├── script.js         # JavaScript file with animations
└── assets/           # Folder containing images, videos, etc.
```

## Dependencies
- GSAP: [GSAP CDN](https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js)
- ScrollTrigger: [ScrollTrigger CDN](https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js)
- Remix Icon: [Remix Icon CDN](https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css)

## License
This project is licensed under the MIT License.
