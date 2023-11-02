let blogs = [];

function addBlog() {
    const title = document.getElementById("blog-title").value;
    const content = document.getElementById("blog-content").value;

    if (title && content) {
        const blog = {
            title: title,
            content: content,
            likes: 0,
        };

        blogs.push(blog);
        displayBlogs();
        
        // Clear input fields
        document.getElementById("blog-title").value = "";
        document.getElementById("blog-content").value = "";
    }
}

function likeBlog(index) {
    blogs[index].likes++;
    displayBlogs();
}

function displayBlogs() {
    const blogFeed = document.getElementById("blog-feed");
    blogFeed.innerHTML = "";

    blogs.forEach((blog, index) => {
        const blogDiv = document.createElement("div");
        blogDiv.classList.add("blog-card");
        blogDiv.innerHTML = `
            <h3>${blog.title}</h3>
            <p>${blog.content}</p>
            <button class="btn btn-primary" onclick="likeBlog(${index})">Like (${blog.likes})</button>
        `;

        blogFeed.appendChild(blogDiv);
    });
}