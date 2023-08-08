self.addEventListener("push", (e) => {
	const data = e.data.json();
	e.waitUntil(
		self.registration.showNotification(data.title, {
			body: data.body,
			image: data.image,
		})
	);
});
