# 🔐 Password Generator

![HTML](https://img.shields.io/badge/HTML-5-orange?style=for-the-badge&logo=html5)
![CSS](https://img.shields.io/badge/CSS-3-blue?style=for-the-badge&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A modern, secure and responsive password generator built with **vanilla HTML, CSS and JavaScript**.

This application allows users to create customizable passwords with real-time strength evaluation and a clean dark UI.

---

## ✨ Features

- Adjustable password length (4–20 characters)
- Include uppercase letters
- Include lowercase letters
- Include numbers
- Include symbols
- Real-time strength indicator
- One-click copy to clipboard
- Custom styled range input & checkboxes
- Responsive dark UI

---

## 🧠 Strength Logic

Password strength is calculated based on:

- Password length
- Number of selected character types

Strength levels:

| Bars | Level |
|------|--------|
| 1    | WEAK |
| 2    | MEDIUM |
| 3    | STRONG |
| 4    | VERY STRONG |

---

## 🛠 Tech Stack

- **HTML5**
- **CSS3**
  - Flexbox
  - CSS Variables
  - Custom form styling
- **JavaScript (ES6)**
  - DOM manipulation
  - Event listeners
  - Random password generation
  - Clipboard API

---

## 📂 Project Structure
    password-generator/
    │
    ├── index.html
    ├── css/
    │ └── style.css
    ├── js/
    │ └── app.js
    └── README.md

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/password-generator.git
cd password-generator