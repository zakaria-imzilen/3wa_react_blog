import {
	AppBar,
	Box,
	Button,
	Container,
	CssBaseline,
	Slide,
	Toolbar,
	Typography,
	useScrollTrigger,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NewBlogForm from "../components/NewBlogForm";

function HideOnScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

const Home = ({ currentUser, blogs, setBlogs }) => {
	const navigate = useNavigate();

	// currentUser.isConnected = null
	// currentUser.isConnected = undefined
	// currentUser.isConnected = ""

	// GENDARMES -- PROTECTED 👮🏻‍♂️👮🏻‍♂️
	// First TIME
	useEffect(() => {
		if (currentUser.isConnected === false) return navigate("/auth");
	}, []);

	useEffect(() => {
		const storedBlogs = JSON.parse(localStorage.getItem("blogs"));
		if (storedBlogs?.length > 0) {
			console.log(storedBlogs);
			setBlogs(storedBlogs);
		}
	}, []);

	useEffect(() => {
		console.log("SAVING ", blogs);
		if (currentUser.isConnected)
			localStorage.setItem("blogs", JSON.stringify(blogs));
	}, [blogs]);

	return (
		<>
			<CssBaseline />
			<HideOnScroll>
				<AppBar>
					<Toolbar>
						<Typography variant="h6" component="div">
							Scroll to hide App bar
						</Typography>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
			<Container>
				<NewBlogForm setBlogs={setBlogs} />

				<Box sx={{ my: 2 }}>
					{blogs.map((blog) => (
						<Box key={blog.id}>
							<Typography variant="h6" color="burlywood">
								{blog.title}
							</Typography>
							<Typography variant="caption">
								{blog.date} by {blog.author.name}
							</Typography>

							<Typography margin={4} variant="body2">
								{blog.article}
							</Typography>

							<Button>
								<Link to={`/blog/${blog.id}`}>Read more</Link>
							</Button>
						</Box>
					))}
				</Box>
			</Container>
		</>
	);
};

export default Home;
