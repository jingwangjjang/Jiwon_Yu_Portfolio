import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img className="logo" src="/logo.png" alt="logo" />
        </motion.span>
        <div className="social">
          <a href="https://linkedin.com/in/jiwon-yu-2788271a0/" target="_blank">
            <img src="/LinkedIn.png" alt="LinkedIn" />
          </a>
          <a href="https://leetcode.com/mak2rae/" target="_blank">
            <img src="/LeetCode.png" alt="LeetCode" />
          </a>
          <a href="https://jingwangjjang.hashnode.dev/" target="_blank">
            <img src="/Hashnode.png" alt="Hashnode" />
          </a>
          <a href="https://instagram.com/jing_wang_jjang/" target="_blank">
            <img src="/Instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
