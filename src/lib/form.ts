interface FormValue {
	key: string;
	type: "string" | "number" | "boolean";
	maxLength: number;
}

export function validateFormData(formData: FormData, requiredValues: FormValue[]): boolean {
	for (const requiredValue of requiredValues) {
		const value = formData.get(requiredValue.key);
		if (value === null || value === "") return false;
		if (requiredValue.type === "string" && (value as string).length > requiredValue.maxLength) return false;
		if (requiredValue.type === "number" && isNaN(+value)) return false;
		if (requiredValue.type === "boolean" && value !== "true" && value !== "false") return false;
	}
	return true;
}
