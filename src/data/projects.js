const projects = [
  {
    title: "Metapeek - Image Forensics Tool",
    description:
      "An advanced image forensics tool that extracts, analyzes, and detects metadata inconsistencies in digital images for authenticity verification.",
    tools: ["Python", "Pillow", "ExifTool", "Tkinter"],
    github: "https://github.com/acunetix2/metapeek",
    demo: "https://meta-peek.vercel.app",
    image: "/images/metapeek.png", 
  },
  {
    title: "Sysmonitor - CLI System Monitoring Tool",
    description:
      "A lightweight command-line tool that provides real-time insights into CPU, memory, disk usage, and running processes for system performance monitoring.",
    tools: ["Python", "psutil", "Click"],
    github: "https://github.com/acunetix2/sysmonitor",
    demo: null,
    image: "/images/sysmonitor.png", 
  },
  {
    title: "TaskBoard - Task Management Site",
    description:
      "A web-based task management platform for creating, organizing, and tracking tasks with a clean interface.",
    tools: ["React", "TailwindCSS", "Node.js", "MongoDB"],
    github: "https://github.com/acunetix2/devtaskmanager",
    demo: "https://activa-blond.vercel.app", 
    image: "/images/taskboard.png", 
  },
];

export default projects;
