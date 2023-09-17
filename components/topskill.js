import React from 'react';
import styles from './topskill.module.css'; // Import the CSS module

const TopSkills = () => {
  const skills = [
    { icon: '🚀', text: 'Project Leadership' },
    { icon: '💻', text: 'PHP' },
    { icon: '🔍', text: 'MySQL' },
    { icon: '⚙️', text: 'Node.js' },
  ];

  return (
    <div className={styles['top-skills-container']}>
      <h3>Top Skills</h3>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>
            <span className="icon">{skill.icon}</span> {skill.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSkills;
