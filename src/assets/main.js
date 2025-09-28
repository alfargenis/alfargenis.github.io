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

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

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

    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-image').src = project.image;
    document.getElementById('modal-date').textContent = project.date;
    document.getElementById('modal-read-time').textContent = project.readTime;
    document.getElementById('modal-description').textContent = project.description;
    document.getElementById('modal-link').href = project.link;

    // Clear and populate technologies with specific colors
    const techContainer = document.getElementById('modal-technologies');
    techContainer.innerHTML = '';

    // Technology color mapping
    const techColors = {
      'React Native': 'tech-react',
      'React': 'tech-react',
      'TypeScript': 'tech-typescript',
      'JavaScript': 'tech-javascript',
      'Next.js 15': 'tech-nextjs',
      'Node.js': 'tech-nodejs',
      'MongoDB': 'tech-mongodb',
      'Express.js': 'tech-express',
      'Python': 'tech-python',
      'Tailwind CSS': 'tech-tailwind',
      'Vite': 'tech-vite',
      'Expo': 'tech-expo',
      'Selenium': 'tech-selenium',
      'AI/ML': 'tech-ai',
      'Camera API': 'tech-camera',
      'Cloud Sync': 'tech-cloud',
      'Security': 'tech-security',
      'Cryptography': 'tech-crypto',
      'E-commerce': 'tech-ecommerce',
      'WhatsApp API': 'tech-whatsapp',
      'Cryptocurrency': 'tech-crypto',
      'BIP39': 'tech-crypto',
      'Offline': 'tech-security',
      'Open Source': 'tech-default',
      'Local Storage': 'tech-default',
      'Responsive Design': 'tech-default',
      'Productivity': 'tech-default',
      'Minimal UI': 'tech-default',
      'Business Intelligence': 'tech-default',
      'Google APIs': 'tech-default',
      'Data Analytics': 'tech-default',
      'Healthcare': 'tech-default',
      'Dashboards': 'tech-default',
      'Multi-currency': 'tech-ecommerce',
      'Performance': 'tech-default',
      'Modern UI': 'tech-default',
      'WebDriver': 'tech-selenium',
      'Automation': 'tech-selenium',
      'Testing': 'tech-selenium',
      'Faker': 'tech-python',
      'JWT': 'tech-security',
      'Redux': 'tech-react',
      'Socket.io': 'tech-nodejs'
    };

    project.technologies.forEach((tech, index) => {
      const techBadge = document.createElement('span');
      const colorClass = techColors[tech] || 'tech-default';
      techBadge.className = `tech-badge ${colorClass}`;
      techBadge.textContent = tech;
      techBadge.style.animationDelay = `${index * 0.05}s`;
      techBadge.style.animation = 'slideUp 0.4s ease-out backwards';
      techContainer.appendChild(techBadge);
    });

    // Show modal with elegant styling
    modal.classList.remove('hidden');
    modal.style.cssText = `
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(30, 41, 59, 0.9)) !important;
      backdrop-filter: blur(12px) !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      z-index: 9999 !important;
      padding: 1rem !important;
      animation: fadeIn 0.3s ease-out !important;
    `;

    const modalContent = document.getElementById('modal-content');
    modalContent.style.cssText = `
      transform: scale(1) !important;
      opacity: 1 !important;
      position: relative !important;
      max-width: 900px !important;
      width: 95% !important;
      max-height: 85vh !important;
      overflow-y: auto !important;
      background: white !important;
      border-radius: 16px !important;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
      animation: slideUp 0.3s ease-out !important;
    `;

    // Apply dark mode if active
    if (document.documentElement.classList.contains('dark')) {
      modalContent.style.background = '#0f172a !important';
      modalContent.style.color = 'white !important';
    }

    document.body.style.overflow = 'hidden';
  }

  // Hide modal with smooth animation
  function hideModal() {
    const modalContent = document.getElementById('modal-content');

    // Animate out
    modalContent.style.animation = 'slideOut 0.3s ease-out forwards';
    modal.style.animation = 'fadeIn 0.3s ease-out reverse';

    // Hide after animation completes
    setTimeout(() => {
      modal.classList.add('hidden');
      modal.style.display = 'none';
      modal.style.animation = '';
      modalContent.style.animation = '';
      document.body.style.overflow = 'auto';
    }, 300);
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
