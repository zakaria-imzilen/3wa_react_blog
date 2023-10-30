import {
	Button,
	Container,
	FormGroup,
	FormLabel,
	TextField,
	TextareaAutosize,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Blog } from "../utils";

const NewBlogForm = ({ setBlogs }) => {
	const [title, setTitle] = useState("");
	const [article, setArticle] = useState("");
	const [author, setAuthor] = useState("");

	const handleAdd = () => {
		if (title.length < 3) return toast.warn("Invalid title");
		if (article.length < 10) return toast.warn("Invalid article");
		if (author.length < 2) return toast.warn("Invalid author");

		setBlogs((prev) => [
			...prev,
			new Blog(prev.length + 1, title, article, { name: author }),
		]);

		toast.success("Blog article added successfuly");

		setTitle("");
		setArticle("");
		setAuthor("");
	};

	return (
		<Container maxWidth={"md"} style={{ margin: "3rem" }}>
			<Typography variant="h5" margin={2}>
				Add New blog
			</Typography>
			<TextField
				onChange={({ target }) => setTitle(target.value)}
				value={title}
				margin="normal"
				variant="filled"
				fullWidth
				label={"Title"}
			/>
			<FormGroup>
				<FormLabel>Article</FormLabel>
				<TextareaAutosize
					onChange={({ target }) => setArticle(target.value)}
					value={article}
					minRows={5}
				/>
			</FormGroup>
			<TextField
				onChange={({ target }) => setAuthor(target.value)}
				value={author}
				margin="normal"
				variant="filled"
				fullWidth
				label={"Author"}
			/>

			<Button onClick={handleAdd} variant="contained" color="primary">
				Add
			</Button>
		</Container>
	);
};

export default NewBlogForm;
