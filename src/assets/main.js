document.addEventListener("DOMContentLoaded", function () {
  var text = document.getElementById("text-dynamic").getAttribute("data-value");
  const textDynamic = document.getElementById("text-dynamic");
  let index = 0;

  function addUserName() {
    textDynamic.style.display = "inline"; // Mostrar el text dinámico
    textDynamic.textContent += text[index];
    index++;
    if (index < text.length) {
      setTimeout(addUserName, 100); // Velocidad de escritura (milisegundos)
    }
  }
  addUserName();
});

// DaisyUI Theme Toggle
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  let currentTheme;
  if (savedTheme) {
    currentTheme = savedTheme;
  } else {
    currentTheme = systemPrefersDark ? "dark" : "light";
  }

  document.documentElement.setAttribute("data-theme", currentTheme);
  document.documentElement.classList.toggle("dark", currentTheme === "dark");
  updateThemeIcons(currentTheme);
}

function updateThemeIcons(theme) {
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");

  if (theme === "dark") {
    darkIcon.classList.add("hidden");
    lightIcon.classList.remove("hidden");
  } else {
    darkIcon.classList.remove("hidden");
    lightIcon.classList.add("hidden");
  }
}

// Initialize theme on page load
initTheme();

// Theme toggle button
const themeToggleBtn = document.getElementById("theme-toggle");
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    updateThemeIcons(newTheme);
  });
}

// Project Modal and Text Truncation System
document.addEventListener("DOMContentLoaded", function () {
  // Project data with detailed information
  const projectData = {
    caloria: {
      title: "CalorIA Demo",
      image: "/src/img/Mockup CalorIADemo.png",
      date: "Sep 17, 2025",
      readTime: "5 min read",
      description: "CalorIA Demo is a smart calorie tracking mobile application developed with React Native, TypeScript, and Expo. The app features a complete modern UI/UX design with an intuitive interface for daily nutrition tracking. It includes advanced camera integration for automatic food recognition using AI, macronutrient calculator, personalized goal system, detailed meal history, and cloud synchronization. Perfect for users looking to maintain a healthy lifestyle with cutting-edge technology. The application also features barcode scanning, nutrition facts database, progress charts, social sharing capabilities, and integration with fitness trackers.",
      technologies: ["React Native", "TypeScript", "Expo", "AI/ML", "Camera API", "Cloud Sync"],
      link: "https://github.com/alfargenis/CalorIA-Demo"
    },
    briochesca: {
      title: "Brioches C.A.",
      image: "/src/img/Mockup Briochesca.png",
      date: "Aug 30, 2025",
      readTime: "4 min read",
      description: "Professional landing page and complete e-commerce platform for Brioches C.A., an artisanal Venezuelan bakery. Developed with Next.js 15, TypeScript, and Tailwind CSS for maximum performance and scalability. The platform includes dynamic pricing system adaptable to multiple currencies, interactive product catalog, direct WhatsApp commerce integration for orders, inventory management system, administrative panel, and responsive design optimized for mobile and desktop. Features include real-time order tracking, customer reviews, payment processing, promotional campaigns, and analytics dashboard.",
      technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "WhatsApp API", "E-commerce", "Multi-currency"],
      link: "https://briochesca.github.io/"
    },
    grab: {
      title: "Grab (MERN FullStack)",
      image: "/src/img/Mockup Grab.png",
      date: "Jul 14, 2024",
      readTime: "18 min read",
      description: "Grab Test is a comprehensive full-stack application built using the MERN (MongoDB, Express.js, React, Node.js) stack, designed specifically for testing and showcasing various skills in web development. Features include user authentication with JWT, RESTful API design, database integration with MongoDB, responsive React frontend, state management with Redux, real-time features with Socket.io, file upload functionality, data validation, error handling, and deployment strategies. Perfect demonstration of modern full-stack development practices with scalable architecture and clean code principles.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Redux", "Socket.io"],
      link: "/PT_NL/"
    },
    aletheia: {
      title: "AletheiaExclusive",
      image: "/src/img/Mockup Aletheia.png",
      date: "Jun 13, 2024",
      readTime: "7 min read",
      description: "Aletheia Exclusive is a modern e-commerce application built using React and Vite, focusing solely on the frontend experience. This application aims to provide users with a sleek, intuitive interface for browsing and purchasing products. Features include dynamic product catalog, advanced filtering and search functionality, shopping cart management, responsive design, smooth animations, product image galleries, wishlist functionality, user-friendly checkout process, and modern UI components. Optimized for performance with Vite's fast build tools and React's component architecture.",
      technologies: ["React", "Vite", "E-commerce", "Responsive Design", "Modern UI", "Performance"],
      link: "/AletheiaExclusive/"
    },
    deeppusher: {
      title: "DeepFormPusher",
      image: "/src/img/Mockup DeepPusher.png",
      date: "April 30, 2024",
      readTime: "3 min read",
      description: "DeepFormPusher is an automated form interaction tool designed to stress test and interact with online forms. This project uses Selenium WebDriver and Faker library to simulate realistic user input and submit forms repeatedly for testing purposes. Features include automated form field detection, realistic data generation, multi-browser support, configurable test scenarios, detailed logging and reporting, error handling, and scalable test execution. Perfect for QA testing, security testing, and form validation processes in web development workflows.",
      technologies: ["Python", "Selenium", "Faker", "WebDriver", "Automation", "Testing"],
      link: "/DeepFormPusher/"
    },
    mnemonic: {
      title: "Mnemonic",
      image: "/src/img/Mockup Mnemonic.png",
      date: "Jun 3, 2024",
      readTime: "2 min read",
      description: "Mnemonic is a secure offline application designed to generate cryptographic seed phrases for cryptocurrency wallets. Built with security as the top priority, the app operates completely offline to ensure maximum protection of sensitive data. Features include BIP39 compliant seed phrase generation, multiple language support, entropy visualization, phrase validation, security audit trails, and educational resources about cryptocurrency security. Being open source, users can inspect, verify, and contribute to the codebase for enhanced transparency and trust in the security implementation.",
      technologies: ["Cryptography", "BIP39", "Security", "Offline", "Open Source", "Cryptocurrency"],
      link: "/Mnemonic/"
    },
    todo: {
      title: "To Do Task",
      image: "/src/img/Mockup ToDoTask.png",
      date: "May 30, 2024",
      readTime: "2 min read",
      description: "To Do Task is a simple and easy-to-use productivity application that allows you to add, check off, and delete tasks efficiently. Ideal for everyday use and designed to be intuitive for all users. Features include clean and minimalist interface, task categorization, priority levels, due date reminders, progress tracking, data persistence, keyboard shortcuts, responsive design, and export functionality. Built with modern web technologies for optimal performance and user experience across all devices.",
      technologies: ["JavaScript", "Local Storage", "Responsive Design", "Productivity", "Minimal UI"],
      link: "/To-Do-Task/"
    },
    toxilab: {
      title: "Toxi-Lab BI",
      image: "/src/img/Mockup Toxi-Lab BI.png",
      date: "Abr 04, 2024",
      readTime: "8 min read",
      description: "TOXILAB-BI is a comprehensive business intelligence application specifically designed for the decision-making process of clinical laboratories. It includes an integrated AI-powered chat system to generate informative reports by querying the database with artificial intelligence through Google APIs. Features include real-time data analytics, interactive dashboards, automated report generation, predictive analytics, data visualization, laboratory workflow optimization, compliance tracking, and seamless integration with existing laboratory information systems for enhanced operational efficiency.",
      technologies: ["Business Intelligence", "AI/ML", "Google APIs", "Data Analytics", "Healthcare", "Dashboards"],
      link: "/toxilab-bi/"
    }
  };

  // Initialize modal functionality
  const modal = document.getElementById('project-modal');
  const closeModalBtn = document.getElementById('close-modal');
  const closeModalBtnBottom = document.getElementById('modal-close-btn');

  // Add direct event listeners to each read more button
  document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const projectKey = this.getAttribute('data-project');
      const project = projectData[projectKey];

      if (project) {
        showModal(project);
      }
    });
  });

  // Show modal with project data
  function showModal(project) {
    if (!modal) return;

    // Llenar datos del modal
    try {
      document.getElementById('modal-title').textContent = project.title;
      document.getElementById('modal-image').src = project.image;
      document.getElementById('modal-image').alt = project.title;
      document.getElementById('modal-date').textContent = project.date;
      document.getElementById('modal-read-time').textContent = project.readTime;
      document.getElementById('modal-description').textContent = project.description;
      document.getElementById('modal-link').href = project.link;

      // Clear and populate modern technology badges
      const techContainer = document.getElementById('modal-technologies');
      techContainer.innerHTML = '';

      // Modern technology badges with icons and gradients
      const techStyles = {
        'React Native': {
          bg: 'linear-gradient(to right, #22d3ee, #0891b2)',
          icon: '⚛️',
          text: 'white'
        },
        'React': {
          bg: 'linear-gradient(to right, #22d3ee, #3b82f6)',
          icon: '⚛️',
          text: 'white'
        },
        'TypeScript': {
          bg: 'linear-gradient(to right, #2563eb, #1d4ed8)',
          icon: '📘',
          text: 'white'
        },
        'JavaScript': {
          bg: 'linear-gradient(to right, #facc15, #eab308)',
          icon: '🟨',
          text: 'black'
        },
        'Next.js 15': {
          bg: 'linear-gradient(to right, #1f2937, #000000)',
          icon: '▲',
          text: 'white'
        },
        'Node.js': {
          bg: 'linear-gradient(to right, #10b981, #059669)',
          icon: '🟢',
          text: 'white'
        },
        'MongoDB': {
          bg: 'linear-gradient(to right, #059669, #047857)',
          icon: '🍃',
          text: 'white'
        },
        'Express.js': {
          bg: 'linear-gradient(to right, #374151, #1f2937)',
          icon: '⚡',
          text: 'white'
        },
        'Python': {
          bg: 'linear-gradient(to right, #3b82f6, #facc15)',
          icon: '🐍',
          text: 'white'
        },
        'Tailwind CSS': {
          bg: 'linear-gradient(to right, #06b6d4, #3b82f6)',
          icon: '🎨',
          text: 'white'
        },
        'Vite': {
          bg: 'linear-gradient(to right, #8b5cf6, #7c3aed)',
          icon: '⚡',
          text: 'white'
        },
        'Expo': {
          bg: 'linear-gradient(to right, #111827, #581c87)',
          icon: '📱',
          text: 'white'
        },
        'AI/ML': {
          bg: 'linear-gradient(to right, #ec4899, #ef4444)',
          icon: '🤖',
          text: 'white'
        },
        'Selenium': {
          bg: 'linear-gradient(to right, #10b981, #059669)',
          icon: '🔧',
          text: 'white'
        },
        'Security': {
          bg: 'linear-gradient(to right, #f97316, #ef4444)',
          icon: '🔒',
          text: 'white'
        },
        'E-commerce': {
          bg: 'linear-gradient(to right, #10b981, #059669)',
          icon: '🛒',
          text: 'white'
        },
        'WhatsApp API': {
          bg: 'linear-gradient(to right, #4ade80, #10b981)',
          icon: '💬',
          text: 'white'
        },
        'Cryptocurrency': {
          bg: 'linear-gradient(to right, #facc15, #f97316)',
          icon: '₿',
          text: 'black'
        },
        'JWT': {
          bg: 'linear-gradient(to right, #8b5cf6, #ec4899)',
          icon: '🔑',
          text: 'white'
        },
        'Socket.io': {
          bg: 'linear-gradient(to right, #1f2937, #111827)',
          icon: '🔌',
          text: 'white'
        }
      };

      project.technologies.forEach((tech) => {
        const style = techStyles[tech] || {
          bg: 'linear-gradient(to right, #6366f1, #8b5cf6)',
          icon: '⚙️',
          text: 'white'
        };

        const badge = document.createElement('span');
        badge.style.cssText = `
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          background: ${style.bg};
          color: ${style.text};
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: transform 0.2s ease;
          cursor: default;
        `;
        badge.innerHTML = `
          <span style="font-size: 16px;">${style.icon}</span>
          <span>${tech}</span>
        `;

        // Hover effect
        badge.addEventListener('mouseenter', () => {
          badge.style.transform = 'scale(1.05)';
        });
        badge.addEventListener('mouseleave', () => {
          badge.style.transform = 'scale(1)';
        });

        techContainer.appendChild(badge);
      });

    } catch (error) {
      return;
    }

    // Mostrar el modal de forma simple
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  // Hide modal de forma simple
  function hideModal() {
    modal.classList.add('hidden');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  // Close modal event listeners
  closeModalBtn.addEventListener('click', hideModal);
  closeModalBtnBottom.addEventListener('click', hideModal);

  // Close modal when clicking outside
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      hideModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      hideModal();
    }
  });

  // Initialize text truncation display
  document.querySelectorAll('.project-description').forEach(description => {
    const shortText = description.querySelector('.description-short');
    const fullText = description.querySelector('.description-full');
    const readMoreBtn = description.querySelector('.read-more-btn');

    // Show short text by default
    shortText.style.display = 'inline';
    fullText.style.display = 'none';
  });

});
