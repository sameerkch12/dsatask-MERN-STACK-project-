import React from 'react';

const ProblemSection = ({  link }) => {
  const handleUpsolve = () => {
    // Redirect the user to the corresponding link in a new tab when the "Task Upsolve" button is clicked
    if (link) {
      window.open(link, '_blank');
    } else {
      console.log("No link provided for the Task Upsolve button.");
    }
  };

  const handleDelete = () => {
    // Code to handle the "Delete" button click
    console.log('Delete clicked!');
  };


  

  function convertURLToTitle(url) {
    url = url.replace(/^(https?:\/\/)?/, '');
  
    url = url.replace(/^www\./, '');
  
    url = url.replace(/\/$/, '').split('/').pop();
  
    const parts = url.split('-');
  
    const title = parts
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  
    return title;
  }
  
  const title = convertURLToTitle(link);


  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={{display:"flex",flexDirection:"column",textAlign:"left"}}>
          <h2 style={styles.title}>{title}</h2>
          <h2 style={styles.title}>{link}</h2>
        </div>
        <div style={styles.buttonsContainer}>
          <button style={styles.addButton} onClick={handleUpsolve}>Task Upsolve</button>
          <button style={styles.deleteButton} onClick={handleDelete}>Task Delete</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px', // Decreased height
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '45%', // Adjust the width to your preference
    margin: '10px', // Add some margin to create a gap
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column', // Vertical positioning for the buttons by default
    gap: '5px', // Space between the buttons
  },
  addButton: {
    padding: '8px 12px',
    borderRadius: '6px',
    backgroundColor: '#4caf50', // Green color for Add Task button
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
  deleteButton: {
    padding: '8px 12px',
    borderRadius: '6px',
    backgroundColor: '#f44336', // Red color for Task Delete button
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

// Media query for mobile devices
if (window.innerWidth <= 768) {
  styles.container.width = '90%'; // Adjust the width to your preference for smaller screens
  styles.header.flexDirection = 'column'; // Change to vertical layout
  styles.header.alignItems = 'center'; // Center the items horizontally
  styles.buttonsContainer.flexDirection = 'row'; // Align buttons horizontally on mobile devices
  styles.addButton.marginRight = '5px'; // Add some space between buttons
}


export default ProblemSection;
