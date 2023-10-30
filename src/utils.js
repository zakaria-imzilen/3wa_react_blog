import Auth from "./pages/Auth";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SingleBlog from "./pages/SingleBlog";

export const routes = [
	{
		id: 1,
		path: "/auth",
		component: Auth,
	},
	{
		id: 2,
		path: "/home",
		component: Home,
	},
	{
		id: 3,
		path: "/blog/:id",
		component: SingleBlog,
	},
	{
		id: 4,
		path: "*",
		component: NotFound,
	},
];

export class Blog {
	constructor(id, title, article, author = { name: "" }) {
		this.id = id;
		this.title = title;
		this.article = article;
		this.author = author;
		this.date = new Date().toDateString();
	}
}
