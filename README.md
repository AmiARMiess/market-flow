#  MarketFlow - Marketing Efficiency Landing Page

A high-converting, responsive landing page designed specifically for marketing agencies and SaaS platforms. This template focuses on communicating business value (ROI, Strategy, Growth) rather than just technical specs, featuring a modern dark-mode aesthetic and interactive elements.

<img width="1349" height="2593" alt="image" src="https://github.com/user-attachments/assets/2a3b1756-02b8-4d9f-b0d8-6b512f7c79b9" />

## ✨ Key Features

-   **Interactive Pricing Toggle:** A fully functional Monthly/Yearly billing switch with smooth animations and dynamic price updates using vanilla JavaScript.
-   **Marketing-Centric Layout:** Sections dedicated to Audience Targeting, ROI Scaling, and Campaign Optimization.
-   **Responsive Design:** Adapts seamlessly from desktop to mobile using CSS Grid and Flexbox.
-   **Modern UI/UX:** Dark theme with glowing accents, hover effects, and clean typography (Inter font).
-   **Zero Dependencies:** Built with pure HTML5, CSS3, and ES6+ JavaScript. No React, Vue, or heavy frameworks required.
-   **Lead Generation Ready:** Includes a styled contact form section for capturing leads.

## 📁 Project Structure

```text
market-flow/
├── index.html      # Main HTML structure & content
├── style.css       # All styling, animations, and responsive queries
├── script.js       # Interactive logic (Pricing toggle, Mobile menu)
└── README.md       # Project documentation
```

## 🛠️ Technologies Used

-   **HTML5:** Semantic markup structure ensuring accessibility and SEO best practices.
-   **CSS3:** Advanced styling using Custom Properties (Variables), Flexbox, CSS Grid, and keyframe animations for a responsive dark-mode design.
-   **JavaScript (ES6+):** Vanilla JS for DOM manipulation, handling the interactive pricing toggle logic, and mobile navigation without external dependencies.
-   **Font Awesome 6:** Scalable vector icon library for visual indicators across strategy, execution, and growth sections.
-   **Google Fonts (Inter):** Modern, highly readable sans-serif typography optimized for digital interfaces.

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AmiARMiess/market-flow.git
    cd market-flow
    ```

2.  **Open the project:**
    Simply open `index.html` in your preferred web browser to view the landing page.

3.  **Local Development (Optional):**
    For a better development experience with live reloading, run a local server:
    ```bash
    # Using Python 3
    python -m http.server 8000

    # Using Node.js
    npx http-server
    ```
    Then navigate to `http://localhost:8000` in your browser.

## 🎨 Customization

The project uses CSS variables for easy theming. Open `style.css` and modify the `:root` section to match your brand colors:

```css
:root {
    --bg-dark: #0f172a;       /* Main Background */
    --primary-blue: #3b82f6;  /* Primary Accent */
    --primary-red: #ef4444;   /* Secondary Accent */
    --primary-gold: #f59e0b;  /* Highlight Color */
    --text-light: #f8fafc;    /* Text Color */
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE). You are free to use, modify, and distribute this code for personal or commercial projects.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improving the pricing logic, design, or content, feel free to open an issue or submit a pull request.
