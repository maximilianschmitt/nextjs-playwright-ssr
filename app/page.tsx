export default async function Home() {
	const repos = await fetch('https://api.github.com/users/maximilianschmitt/repos?sort=updated', {
		cache: 'no-cache',
	}).then((res) => (res.ok ? res.json().then((repos) => repos.slice(0, 3)) : []))

	return (
		<main className="p-4">
			<h1 className="text-xl">Latest repositories</h1>
			<ul className="mt-4 flex flex-col gap-1">
				{repos.map((repo: any) => {
					return <li key={repo.id}>{repo.full_name}</li>
				})}
			</ul>
		</main>
	)
}
