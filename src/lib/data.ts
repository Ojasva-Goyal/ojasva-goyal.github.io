export const experiences = [
  {
    id: 1,
    title: "Undergraduate Researcher (Disruptive Technologies - AI/ML Lab)",
    company: "BITS Pilani, Pilani Campus",
    date: "Jan 2025 – Present",
    description:
      "Researching multimodal learning techniques for Visual Question Answering (VQA) systems applied to advertisement analysis. Exploring transformer-based models to enhance interpretability and accuracy in ad-based VQA tasks.",
    type: "Study Oriented Project",
    skills: ["Multimodal Learning", "Transformers", "VQA", "Deep Learning"]
  },
  {
    id: 2,
    title: "Business Data Analyst",
    company: "Vaaree",
    date: "July 2024 – Dec 2024",
    description:
      "Built a TFT-based sales forecasting model to improve sales and inventory planning. Developed portfolio health dashboards using SQL, Metabase, and Tableau. Conducted RCA for underperforming SKUs, improving profitability by 15% in specific categories.",
    type: "Internship",
    skills: ["Temporal Fusion Transformer", "Tableau", "SQL", "Metabase", "Sales Forecasting"]
  },
  {
    id: 3,
    title: "Summer Research Intern",
    company: "Ministry of Education, Govt. of India (CoE: AI for Agriculture)",
    date: "May 2024 – July 2024",
    description:
      "Researched panoptic farm segmentation using satellite image time series for Indian districts. Results contributed to further government funding for scalable deployment.",
    type: "Internship",
    skills: ["Remote Sensing", "Time Series Analysis", "Segmentation", "Panoptic Models"]
  },
  {
    id: 4,
    title: "BIM Researcher and Consultant",
    company: "University of Auckland",
    date: "July 2023 – Aug 2023",
    description:
      "Worked with Hynds Pipe Systems Ltd to analyze New Zealand’s BIM landscape. Provided data-driven recommendations for BIM integration.",
    type: "Internship",
    skills: ["BIM", "Market Research", "Consulting"]
  },
  {
    id: 5,
    title: "Summer Robotics Intern",
    company: "P.N.T. Robotics & Automation Solutions LLP",
    date: "May 2023 – July 2023",
    description:
      "Researched MAV navigation in GPS-denied environments. Simulated robotic arms using MoveIT and improved localization with ArUco markers.",
    type: "Internship",
    skills: ["SLAM", "MoveIT", "ArUco Markers", "ROS"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Visual Question Answering for Agricultural Diagnostics",
    description:
      "Developed a deep learning + VQA system for wheat rust detection achieving 97.69% accuracy. Published in Scientific Reports. Implemented federated learning for mobile and drone deployment.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop",
    tags: ["VQA", "Federated Learning", "Deep Learning", "ResNet", "Agritech"],
    githubUrl: "https://github.com/Ojasva-Goyal",
    liveUrl: "https://doi.org/10.1038/s41598-024-79793-2"
  },
  {
    id: 2,
    title: "CycleGAN-Based Image Dehazing",
    description:
      "Implemented a CycleGAN from scratch to improve image clarity in hazy conditions. Enhanced performance with data augmentation techniques.",
    image: "https://images.unsplash.com/photo-1543039717-b4d407503ac6?q=80&w=1000&auto=format&fit=crop",
    tags: ["CycleGAN", "Image Processing", "Deep Learning"],
    githubUrl: "https://github.com/Ojasva-Goyal/CycleGAN-based-Image-Dehazing"
  },
  {
    id: 3,
    title: "CNN-Based Sound Classification for Multi-Class Recognition",
    description:
      "Built a 6-layer CNN model to classify 13 sound classes using Mel spectrograms. Tested multiple architectures like EfficientNet, ResNet, and MobileNetV2.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1000&auto=format&fit=crop",
    tags: ["CNN", "Audio Classification", "Librosa", "Sound Recognition"],
    githubUrl: "https://github.com/Ojasva-Goyal/CNN-Based-Sound-Classification-for-Multi-Class-Recognition"
  },
  {
    id: 4,
    title: "Object Tracking UAV for Indoor Surveillance",
    description:
      "Led development of AI-based tracking system for UAVs in indoor environments. Secured INR 50,000 funding from BITS Pilani.",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1000&auto=format&fit=crop",
    tags: ["Drone AI", "Object Tracking", "Swarm Systems", "Indoor Navigation"],
    githubUrl: "https://docs.google.com/presentation/d/1oZg8C2DB7iLsiBUHgs5iLaVPEl1W15QWWSvR1uvbrQk/edit?usp=sharing"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Choosing the Right NVIDIA Jetson Board: A Researcher's Perspective",
    excerpt: "Insights into how to pick the perfect NVIDIA Jetson board for AI research on edge devices.",
    date: "May 10, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    tags: ["Deep Learning", "Generative Ai", "Ai Hardware", "Edge Computing", "Nvidia Jetson", "Robotics"],
    slug: "choosing-nvidia-jetson",
    liveUrl: "https://medium.com/p/5b08e25dae18"
  },
  {
    id: 1,
    title: "Fine-Tuning DeepSeek-VL2 for Multimodal Instruction Following: A Comprehensive Technical Guide",
    excerpt: "Fine-tuning large-scale vision-language models with detailed error breakdowns and best practices.",
    date: "May 21, 2025",
    readTime: "6 min read",
    image: "https://plus.unsplash.com/premium_photo-1745610508165-de54e709a30e?q=80&w=1974&auto=format&fit=crop",
    tags: ["Deepseek", "Vision Language Model", "Fine Tuning", "Deepseek Vl2", "Debugging"],
    slug: "finetune-deepseek-vl2",
    liveUrl: "https://medium.com/towards-artificial-intelligence/fine-tuning-deepseek-vl2-for-multimodal-instruction-following-a-step-by-step-guide-13238ad704ac"
  },
  {
    id: 1,
    title: "Demystifying Pixtral Fine-Tuning: Instruction Tasks with Multimodal Prompts",
    excerpt: "How I fine-tuned Pixtral‑12B with LoRA for custom image-text tasks on a single GPU ?",
    date: "May 24, 2025",
    readTime: "5 min read",
  image: "https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?q=80&w=1321&auto=format&fit=crop",
    tags: ["Pixtral", "Vision Language Model", "Fine Tuning", "Mistral", "Multimodal AI"],
    slug: "finetune-pixtral-12b",
    liveUrl: "https://medium.com/generative-ai/demystifying-pixtral-fine-tuning-instruction-tasks-with-multimodal-prompts-7cf80be1c4f4"
  },
  {
    id: 1,
    title: "CUDA vs cuDNN: The Dynamic Duo That Powers Your AI Dreams",
    excerpt: "Ever wondered what’s happening behind the scenes when your fancy AI model churns through millions of calculations in seconds?",
    date: "July 09, 2025",
    readTime: "9 min read",
  image: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?q=80&w=1170&auto=format&fit=crop",
    tags: ["Cuda", "Cudnn", "Gpu Computing", "Deep Learning", "Parallel Programming"],
    slug: "cuda vs cdDNN",
    liveUrl: "https://medium.com/towards-artificial-intelligence/cuda-vs-cudnn-the-dynamic-duo-that-powers-your-ai-dreams-96f3b3f2710e"
  }
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "C", "JavaScript", "MATLAB", "R"]
  },
  {
    category: "Machine Learning & AI",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Computer Vision", "NLP", "Reinforcement Learning"]
  },
  {
    category: "Data Science & Analysis",
    items: ["Pandas", "NumPy", "Data Visualization", "Statistical Analysis", "Jupyter", "SQL"]
  },
  {
    category: "Robotics & Drones",
    items: ["Drone Programming", "ROS (Robot Operating System)", "Sensor Fusion", "SLAM", "Path Planning", "Control Systems"]
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "Docker", "AWS", "Linux", "Raspberry Pi", "Arduino", "Flight Controllers"]
  }
];

export const education = [
  {
    degree: "Bachelor of Engineering in Civil + Minor in Data Science",
    institution: "Birla Institute of Technology & Science, Pilani, Pilani Campus",
    date: "2021 - 2025",
    description: " ",
    achievements: [
      "GPA: 7.79/10.0",
      "Dr. APJ Abdul Kalam Young Research Fellow",
      "Innovator of the Year, 2024-2025",
      // "Capstone Project: Autonomous Drone Swarm for Search and Rescue Operations",
      "Vice-Captain @ Team Robocon",
      // "Drone Tech Coordinator @ Kalipatnapu AR/VR Lab"
    ]
  }
  // {
  //   degree: "Machine Learning Specialization",
  //   institution: "Coursera (Stanford University)",
  //   date: "2022",
  //   description: "Comprehensive online specialization covering machine learning algorithms and applications.",
  //   achievements: [
  //     "Completed with Distinction",
  //     "Implemented various ML projects including neural networks from scratch"
  //   ]
  // },
  // {
  //   degree: "Drone Programming Certification",
  //   institution: "Udacity",
  //   date: "2021",
  //   description: "Specialized course in drone programming, control systems, and autonomous navigation.",
  //   achievements: [
  //     "Developed a custom autopilot system for a quadrotor",
  //     "Built a visual navigation system using computer vision"
  //   ]
  // }
];

export const honors = [
  {
    id: 1,
    title: "1st Place at ASCE CISSC-2025",
    organization: "ASCE CISSC International Conference",
    date: "Feb 2025",
    description: "Presented an AI-powered UAV crop disease diagnostic system integrating deep learning, Federated Learning, and Agentic AI."
  },
  {
    id: 2,
    title: "Innovator of the Year",
    organization: "BITSAA Mantra Leadership Awards",
    date: "Feb 2025",
    description: "Recognized for impactful innovation at the intersection of AI and sustainability."
  },
  {
    id: 3,
    title: "Top 20 in Hackathon 7.0",
    organization: "Cisco ThingQbator",
    date: "Dec 2024",
    description: "Shortlisted in top 20 out of 1000+ teams for innovative AI solutions."
  },
  {
    id: 4,
    title: "Amazon ML Challenge – Rank 166/75,000",
    organization: "Amazon",
    date: "Sep 2024",
    description: "Ranked in top 0.2% participants nationally."
  },
  {
    id: 5,
    title: "Winner – Nucleus: The Tech Show",
    organization: "BITS-TEC of DST, GOI",
    date: "Feb 2024",
    description: "Won 1st place and cash prize of INR 10,000."
  },
  {
    id: 6,
    title: "Microsoft for Startups – Founders Hub Selection",
    organization: "Microsoft/Nasscom ThingQbator",
    date: "Jul 2024",
    description: "Selected for prototyping stage for startup 'ePlast'."
  }
];

export const news = [
  {
    id: 1,
    title: "Special Mention in Director's Report, BITS Pilani @ Convocation' 25",
    date: "July 13, 2025",
    source: "",
    description: "Featured in the Director's Annual Report of Pilani Campus for being awarded the Dr. Kalam Fellowship. Grateful to see my work recognized at the institute level.",
    link: "https://www.youtube.com/watch?v=UB2HZpviZo8&t=3932s"
  },
  {
    id: 1,
    title: "Awarded Dr. APJ Abdul Kalam Young Research Fellowship",
    date: "May 23, 2025",
    source: "",
    description: "Selected as a recipient of the prestigious Dr. APJ Abdul Kalam Young Research Fellowship in recognition of outstanding research potential and societal impact. This honor supports my ongoing work in AI for social good.",
    link: "https://www.drkalamfellowship.com/winners-2024-2025.php"
  },
  {
    id: 1,
    title: "🌟 Celebrating the Achievements of Ojasva Goyal! 🌟",
    date: "Feb 24, 2025",
    source: "University News",
    description: "Got appreciation and acknowledgement for my accomplishments in research, innovation, and competitive excellence",
    link: "https://www.bits-pilani.ac.in/news/celebrating-the-achievements-of-ojasva-goyal/"
  },
  {
    id: 1,
    title: "1st Place Win @ AISC CISSC-25",
    date: "Feb 09, 2025",
    source: "University News",
    description: "My work on “AI-Powered UAV Crop Disease Diagnostics for Smart Cities of Tomorrow” got 1st pace at the conference",
    link: "https://www.bits-pilani.ac.in/news/triumph-in-innovation-bits-pilani-shines-at-asce-cissc-2025/"
  },
  {
    id: 2,
    title: "Featured in BITS Institute-wide Newsletter, Bitsology",
    date: "February, 2025",
    source: "Tech Innovators Magazine",
    description: "Featured for our recent award at ASCE Conference",
    link: "https://www.bits-pilani.ac.in/BITSology/BITSology-Vol-1.2/"
  },
  {
    id: 2,
    title: "Featured in Pilani Campus- Fall Semester Magazine, BITSCAN (Issue_44)",
    date: "December, 2024",
    source: "Tech Innovators Magazine",
    description: "Featured for my research work and achivements in the fall semester of 2023-2024.",
    link: "https://www.bits-pilani.ac.in/wp-content/uploads/BITSCAN-Issue_44_II-Sem-2023-24.pdf/"
  }
  // {
  //   id: 3,
  //   title: "Research Grant Awarded for Drone AI Project",
  //   date: "January 20, 2023",
  //   source: "Research Foundation",
  //   description: "Received $50,000 grant to continue research on energy-efficient path planning for autonomous drones.",
  //   link: "https://example.com/news3"
  // },
  // {
  //   id: 4,
  //   title: "Paper Accepted in Top-Tier AI Journal",
  //   date: "November 10, 2022",
  //   source: "Journal of Artificial Intelligence",
  //   description: "Research paper on vision-based navigation techniques for drones accepted for publication in a prestigious journal.",
  //   link: "https://example.com/news4"
  // }
];

// Update projects to include publication links
// export const researchProjects = [
//   {
//     id: 1,
//     title: "Deep Learning for Drone Obstacle Avoidance",
//     description: "Novel neural network architecture for real-time obstacle detection and avoidance in dynamic environments.",
//     image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=1000&auto=format&fit=crop",
//     tags: ["Deep Learning", "Computer Vision", "Robotics", "CNN"],
//     publicationUrl: "https://example.com/publication1",
//     githubUrl: "https://github.com"
//   },
//   {
//     id: 2,
//     title: "Multi-Agent Reinforcement Learning for Drone Swarms",
//     description: "Coordination algorithms enabling drone swarms to collaboratively perform complex tasks with minimal communication.",
//     image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1000&auto=format&fit=crop",
//     tags: ["Reinforcement Learning", "Multi-agent Systems", "Swarm Intelligence"],
//     publicationUrl: "https://example.com/publication2",
//     githubUrl: "https://github.com"
//   },
//   {
//     id: 3,
//     title: "Energy-Optimized Path Planning for Drones",
//     description: "Mathematical models and algorithms for energy-aware flight path planning in varying weather conditions.",
//     image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1000&auto=format&fit=crop",
//     tags: ["Path Planning", "Energy Optimization", "Algorithms"],
//     publicationUrl: "https://example.com/publication3"
//   }
// ];
