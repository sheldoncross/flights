import * as SQLite from 'expo-sqlite';


const initializeDatabase = async() => {
    const db = await SQLite.openDatabaseAsync('flights');

}

