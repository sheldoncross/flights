import mysql from 'mysql2/promise';

const initializeDatabase = async() => {
  // Create a connection to the MySQL server
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'flights',
    password: 'abroad',
    database: 'flights'
  });
  
  console.log("Connected to MySQL database");

  // Create tables if they don't exist
  await connection.execute(`
    CREATE TABLE IF NOT EXISTS cities (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE,
      country VARCHAR(255),
      region VARCHAR(255)
    );

    CREATE TABLE IF NOT EXISTS destinations (
      id INT AUTO_INCREMENT PRIMARY KEY,
      city_id INT NOT NULL,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255),
      description TEXT,
      category VARCHAR(100),
      latitude DECIMAL(10, 8),
      longitude DECIMAL(11, 8),
      visited BOOLEAN DEFAULT FALSE,
      FOREIGN KEY (city_id) REFERENCES cities(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS itinerary_items (
      id INT AUTO_INCREMENT PRIMARY KEY,
      destination_id INT NOT NULL,
      visit_date DATE,
      visit_time TIME,
      visit_order INT,
      notes TEXT,
      FOREIGN KEY (destination_id) REFERENCES destinations(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS user_messages (
      id INT AUTO_INCREMENT PRIMARY KEY,
      message TEXT NOT NULL,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
      is_from_user BOOLEAN NOT NULL DEFAULT TRUE
    );
  `);

  console.log("Database initialized successfully");

  return connection;
}

export { initializeDatabase }

