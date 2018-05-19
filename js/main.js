// ----- Promises & Fetch ------

// promise = new Promise( (resolve, reject) => {
// 	setTimeout(() => {
// 		resolve();
// 	}, 3000);
// });

// // There can be more than one callback function
// promise
// 	.then(() => console.log("Finally done!"))
// 	.then(() => console.log("I also finished!"))
// 	.catch(() => console.log("Rejected!"))


// Here's a practical example of an ajax request with fetch:
url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
	.then(response => response.json())
	.then(data => console.log(data));













