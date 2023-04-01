export interface MysqlConfigOptions {
	host: string;
	port: number;
	username: string;
	password: string;
	database: string;
}

export interface VatsimConfigOptions {
	authUrl: string;
	clientId: string;
	clientSecret: string;
	redirectUri: string;
	scopes: string;
}
