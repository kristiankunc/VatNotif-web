import { mysqlConfig } from "../conf/mysql.js";
import { createConnection, type Connection } from "mysql2/promise";

export class Database {
	protected static async connect(): Promise<Connection> {
		return await createConnection({
			host: mysqlConfig.host,
			port: mysqlConfig.port,
			user: mysqlConfig.username,
			password: mysqlConfig.password,
			database: mysqlConfig.database,
		});
	}

	protected static async disconnect(connection: Connection): Promise<void> {
		connection.end();
	}

	protected static async query(sql: string, values?: any[]): Promise<any> {
		const connection = await this.connect();
		const [rows] = await connection.execute(sql, values);
		await this.disconnect(connection);

		return rows;
	}
}
