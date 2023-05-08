import NavBar from "./Navigation";
import Post from "./Post";
import { useEffect, useState } from "react";

const API_URL = 'https://pixabay.com/api/?key=33387929-afc042d47368a5c5770213c28&q=mercedes&image_type=photo&pretty=true';

const InstagramPage = () => {
const [posts, setPosts] = useState([]);
const [imageUrl, setImageUrl] = useState('');
const [caption, setCaption] = useState('');

const handleFetchData = () => {
fetch(API_URL)
.then((response) => response.json())
.then((data) => {
console.log("Success:", data);
setPosts(data.hits);
})
.catch((error) => {
console.error("Error:", error);
});
}

useEffect(() => {
handleFetchData()
}, []);

const handleImageUrlChange = (event) => {
setImageUrl(event.target.value);
};

const handleCaptionChange = (event) => {
setCaption(event.target.value);
};

const handleSubmit = (event) => {
event.preventDefault();
const newPost = { imageUrl, caption };
fetch('/api/posts', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(newPost),
})
.then((response) => response.json())
.then((data) => {
console.log('Success:', data);
setPosts([...posts, data]);
setImageUrl('');
setCaption('');
})
.catch((error) => {
console.error('Error:', error);
});
};

return (
<div>
<NavBar />
<Post Posts={posts} />
<div>
<h2>Add a post</h2>
<form onSubmit={handleSubmit}>
<div>
<label htmlFor="imageUrl">Image URL:</label>
<input type="text" id="imageUrl" value={imageUrl} onChange={handleImageUrlChange} />
</div>
<div>
<label htmlFor="caption">Caption:</label>
<input type="text" id="caption" value={caption} onChange={handleCaptionChange} />
</div>
<button type="submit">Submit</button>
</form>
</div>
</div>
);
};

export default InstagramPage;