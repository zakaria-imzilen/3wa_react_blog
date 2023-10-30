import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SingleBlog = ({ blogs }) => {
	const [currentBlog, setCurrentBlog] = useState(null);

	const navigate = useNavigate();

	// 1- Capture the id passed in the URL params
	const params = useParams();

	// 2- Search for the blog article
	useEffect(() => {
		setTimeout(() => {
			const findBlog = blogs.find((blog) => blog.id == params.id);
			if (!findBlog) return navigate("/home");
			setCurrentBlog(findBlog);
		}, 3000);
	}, []);

	return !currentBlog ? (
		"Loading..."
	) : (
		<div>
			<Typography variant="h1">{currentBlog.title}</Typography>
			<Typography variant="body2">{currentBlog.article}</Typography>

			<Button variant="contained" color="success">
				<Link to={"/home"}>Back</Link>
			</Button>
		</div>
	);
};

export default SingleBlog;
