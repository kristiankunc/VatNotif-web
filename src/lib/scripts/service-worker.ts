self.addEventListener("push", (e) => {
	console.log("Push received");
	const data = e.data.json();
	e.waitUntil(
		self.registration.showNotification(data.title, {
			body: data.body,
			image: data.image,
		})
	);
});
