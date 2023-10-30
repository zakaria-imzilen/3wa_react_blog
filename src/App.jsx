import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./utils";
import { useState } from "react";

function App() {
	const [users, setUsers] = useState([
		{
			id: 1,
			fullName: "Zakaria Imzilen",
			email: "zakaria@gmail.com",
			pwd: "zakaria123",
		},
		{
			id: 2,
			fullName: "Hicham Sayidi",
			email: "hicham@gmail.com",
			pwd: "hicham123",
		},
		{
			id: 3,
			fullName: "Souhail Bouaouiss",
			email: "souhail@gmail.com",
			pwd: "souhail123",
		},
	]);
	// Sign in: getter
	// Sign up: setter
	const [currentUser, setCurrentUser] = useState({
		isConnected: false, // req.isAuthenticated()
		data: null, // req.user
	});
	// Protected Routes: getter
	// Sign in: setter

	const [blogs, setBlogs] = useState([
		{
			id: 1,
			title: "Lorem ipsum dolor sit amet.",
			article:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nobis, consequuntur aspernatur eaque ratione perferendis dolorem cupiditate, obcaecati deserunt, error corrupti enim corporis sequi ipsam nemo! Omnis, mollitia. Non delectus doloremque, sapiente nisi enim architecto repudiandae quisquam est, voluptas cumque corporis incidunt consectetur illum a? Aperiam nesciunt cupiditate facilis reiciendis officiis soluta rerum non laborum illum nisi, consequuntur perspiciatis provident.",
			author: {
				name: "Souhail",
			},
			date: "2023-05-24 Thursday",
		},
	]);

	return (
		<BrowserRouter>
			<Routes>
				{routes.map((route) => (
					<Route
						key={route.id}
						path={route.path}
						element={
							<route.component
								users={users}
								setUsers={setUsers}
								currentUser={currentUser}
								setCurrentUser={setCurrentUser}
								blogs={blogs}
								setBlogs={setBlogs}
							/>
						}
					/>
				))}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
