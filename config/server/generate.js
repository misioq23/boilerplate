module.exports = () => {
	const data = { users: [] }
	// Create 1000 users
	for (let i = 0; i < 1000; i++) {
		data.users.push({ id: i, name: `user${i}`, surname: `surname${i}`, mail: `user${i}@user.com`, site: `www.user${i}.com` })
	}
	return data
}
