import React from "react";
import { FaRegCalendar, FaRegFileImage } from "react-icons/fa";
import { FiHome, FiSearch, FiSettings } from "react-icons/fi";
import { HiDocumentReport } from "react-icons/hi";
import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <FiSearch size={24} className={styles.icon} />
      <FiHome size={24} className={styles.icon} />
      <HiDocumentReport size={24} className={styles.icon} />

      <FaRegFileImage size={24} className={styles.icon} />
      <FaRegCalendar size={24} className={styles.icon} />
      <FiSettings size={24} className={styles.icon} />
    </div>
  );
};
