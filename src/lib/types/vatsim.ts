export interface VatsimUserData {
	cid: number;
	personal: {
		name_first: string;
		name_last: string;
		name_full: string;
	};
	oauth: {
		token_valid: boolean;
	};
}

export interface WatchedCallsign {
	string: string;
	topdown: boolean;
}
