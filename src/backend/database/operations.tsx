import { openDatabaseAsync, SQLiteDatabase } from 'expo-sqlite';

// Assuming db is initialized and accessible, or passed as an argument
// You'll need to manage how the db connection is accessed by these functions
async function addDestination(cityId: number, name: string, description: string) {
  const db = await openDatabaseAsync('cityItinerary.db'); // Or get the existing connection
  await db.runAsync(
    'INSERT INTO destinations (city_id, name, description) VALUES (?, ?, ?)',
    [cityId, name, description]
  );
  console.log(`Added destination: ${name}`);
}

async function addUserMessage(db: SQLiteDatabase, message: string, isFromUser: boolean = true) {
  try {
    await db.runAsync(
      'INSERT INTO user_messages (message, is_from_user) VALUES (?, ?)',
      [message, isFromUser ? 1 : 0]
    );
    console.log(`Inserted user message: ${message}`);
  } catch (error) {
    console.error('Error inserting user message:', error);
    throw error;
  }
}

export { addDestination, addUserMessage };
