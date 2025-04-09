declare module '@expo/websql' {
  export default function openDatabase(
    name: string,
    version?: string,
    description?: string,
    size?: number
  ): WebSQLDatabase;

  export interface WebSQLDatabase {
    transaction: (
      callback: (tx: WebSQLTransaction) => void,
      errorCallback?: (error: any) => void,
      successCallback?: () => void
    ) => void;
  }

  export interface WebSQLTransaction {
    executeSql: (
      sqlStatement: string,
      args?: any[],
      successCallback?: (tx: WebSQLTransaction, resultSet: WebSQLResultSet) => void,
      errorCallback?: (tx: WebSQLTransaction, error: Error) => boolean
    ) => void;
  }

  export interface WebSQLResultSet {
    insertId?: number;
    rowsAffected: number;
    rows: {
      length: number;
      item: (idx: number) => any;
      _array: any[];
    };
  }
} 