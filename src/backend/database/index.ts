import * as SQLite from 'expo-sqlite';


const initializeDatabase = async() => {
    const db = await SQLite.openDatabaseAsync('cityItinerary.db');

    await db.execAsync(`
        PRAGMA journal_mode = WAL;

        CREATE TABLE IF NOT EXISTS cities (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE, -- Ensure city names are unique
            country TEXT,
            region TEXT -- e.g., State, Province
        );

        CREATE TABLE IF NOT EXISTS destinations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            city_id INTEGER NOT NULL, -- Added foreign key column
            name TEXT NOT NULL,
            address TEXT,
            description TEXT,
            category TEXT, -- e.g., 'Restaurant', 'Museum', 'Park'
            latitude REAL,
            longitude REAL,
            visited BOOLEAN DEFAULT 0,
            FOREIGN KEY (city_id) REFERENCES cities(id) ON DELETE CASCADE -- Added foreign key constraint
        );

        CREATE TABLE IF NOT EXISTS itinerary_items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            destination_id INTEGER NOT NULL,
            visit_date TEXT, -- Store date as ISO8601 string (YYYY-MM-DD) or timestamp
            visit_time TEXT, -- Store time as HH:MM
            visit_order INTEGER, -- Optional: for ordering visits on the same day
            notes TEXT,
            FOREIGN KEY (destination_id) REFERENCES destinations(id) ON DELETE CASCADE
        );
    `);

    console.log("Database initialized successfully");

    return db;
}

