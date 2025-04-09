import { Connection } from 'mysql2/promise';

// Function to add a new destination
async function addDestination(
  connection: Connection,
  cityId: number,
  name: string,
  description: string
) {
  try {
    await connection.execute(
      'INSERT INTO destinations (city_id, name, description) VALUES (?, ?, ?)',
      [cityId, name, description]
    );
    console.log(`Added destination: ${name}`);
  } catch (error) {
    console.error('Error adding destination:', error);
    throw error;
  }
}

// Function to add a user message
async function addUserMessage(
  connection: Connection,
  message: string,
  isFromUser: boolean = true
) {
  try {
    await connection.execute(
      'INSERT INTO user_messages (message, is_from_user) VALUES (?, ?)',
      [message, isFromUser]
    );
    console.log(`Inserted user message: ${message}`);
  } catch (error) {
    console.error('Error inserting user message:', error);
    throw error;
  }
}

export { addDestination, addUserMessage };
