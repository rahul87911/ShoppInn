import React from 'react';

const AddressCard = () => {
  return (
    <div style={styles.cardContainer}>
      <div>
        <p style={styles.name}>Rahul Mishra</p>
        <p style={styles.address}>Mumbai, Gokul, 40001</p>
        <div>
          <p style={styles.phone}>Phone: 1234567890</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
  name: {
    display:"flex",
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#333',
  },
  address: {
    display:"flex",
    fontSize: '16px',
    color: '#555',
    marginBottom: '12px',
  },
  phone: {
    display:"flex",
    fontSize: '14px',
    color: '#777',
  },
};

export default AddressCard;
