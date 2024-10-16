# Digital Performance Solutions Website


![Screenshot 2024-10-16 095446](https://github.com/user-attachments/assets/5ae329ac-54f0-471e-a623-9f3259880419)
<img src="https://github.com/user-attachments/assets/cfb094c3-281e-4f79-9f9e-cdbb7df10211" width="49%"> <img src="https://github.com/user-attachments/assets/b7ef3a9e-b4a9-495f-a9c4-96d733b80ff2" width="49%">
## Overview
This repository contains the code for a marketing agency website focused on providing digital performance solutions. The website is built with HTML, CSS, and JavaScript, using GSAP for animations.

## Features
- **Responsive Design:** Optimized for various screen sizes.
- **Smooth Animations:** Implemented using GSAP and ScrollTrigger for dynamic visual effects.
- **Multi-section Layout:** Contains multiple sections, such as the services page, about us, and careers page.

## Sections
1. **Header (Navigation):**
   - Contains links to sections like Services, Work, About, Culture, Careers, and a "Contact Us" button with an animated arrow.
   
2. **Page 1 (Hero Section):**
   - Displays a heading "Digital Performance Solution" with three images that animate into view as the page loads.
   
3. **Page 2 (About Us):**
   - Information about the agency’s services and collaborative approach, with an image and animation to engage visitors as they scroll.
   
4. **Page 3 (Our Services):**
   - A text and image section highlighting the agency’s services and their expertise in digital marketing solutions.

## Technologies Used
- **HTML/CSS**: For structure and styling.
- **GSAP (GreenSock Animation Platform)**: Handles the animations for images and text elements.
- **ScrollTrigger (GSAP plugin)**: Animates elements as they scroll into view.

## Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   ```
2. Navigate to the project folder:
   ```bash
   cd project-folder
   ```
3. Open the `index.html` file in your preferred browser.

## Usage

1. **Navigating the Site:**
   - Use the header to navigate between sections.
   - The images on the landing page are animated to slide in, giving the user a smooth, interactive experience.
   
2. **Scroll-triggered Animations:**
   - As you scroll through the pages, images and text fade in or slide from different directions.

## Animation Details (GSAP)

1. **Image Animations:**
   - The three images on the homepage (`img1`, `img2`, `img3`) fade and slide into view with slight delays to create a cascading effect.
   
2. **Scroll-based Animations:**
   - On the second page, images slide horizontally or vertically when the user scrolls.
   - The navigation bar fades out as the user scrolls past the first section.

## File Structure
```plaintext
├── index.html        # Main HTML file
├── style.css         # Styles for the website
├── script.js         # JavaScript with GSAP animations
└── assets/           # Folder containing images, icons, etc.
```

## Dependencies
- **GSAP**: [GSAP CDN](https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js)
- **ScrollTrigger**: [ScrollTrigger CDN](https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js)
- **RemixIcon**: [RemixIcon CDN](https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css)

## Future Enhancements
- Add a contact form for inquiries.
- Expand the “Our Services” section with more detailed information.
- Improve accessibility by adding aria-labels and improving keyboard navigation.

## License
This project is licensed under the MIT License.
