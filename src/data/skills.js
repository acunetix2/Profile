import {
  FaReact,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaLinux,
  FaSearch, 
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiJavascript,
  SiC,
  SiCplusplus,
  SiGnubash,
  SiWireshark,
  SiCisco,
  SiHuawei,
} from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa6";
import MetasploitIcon from "@/components/MetasploitIcon";

const skills = {
  technical: [
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "Java", icon: FaJava, color: "text-red-500" },
    { name: "Python", icon: FaPython, color: "text-blue-400" },
    { name: "C", icon: SiC, color: "text-blue-500" },
    { name: "C++", icon: SiCplusplus, color: "text-indigo-400" },
    { name: "Bash", icon: SiGnubash, color: "text-green-500" },
    { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "text-sky-400" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
    { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
  ],

  professional: [
    { name: "Problem-solving" },
    { name: "Team leading" },
    { name: "Teamwork" },
    { name: "Creative thinking" },
    { name: "Communication" },
  ],

  tools: [
    { name: "Kali Linux", icon: FaLinux },
    { name: "Wireshark", icon: SiWireshark },
    { name: "Metasploit", icon: MetasploitIcon, color: "text-pink-400" },
    { name: "Nmap", icon: FaNetworkWired, color: "text-green-400" },
    { name: "Enum4Linux" }, 
    { name: "Hydra" }, 
    { name: "Cisco Packet Tracer", icon: SiCisco },
    { name: "Huawei VRP", icon:SiHuawei }, 
    { name: "Shodan", icon: FaSearch, color: "text-red-500" }, 
    { name: "ZenMap", icon: FaNetworkWired, color: "text-blue-400" },
  ],
};

export { skills };
