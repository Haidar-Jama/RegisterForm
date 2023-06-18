

let image = document.querySelector("#image");
let title = document.querySelector("#title");
let article = document.querySelector("#article");
let form = document.querySelector("form");
let boxes = document.querySelector(".boxs");


const getPostFromLocalStorage = () => {

    let posts = localStorage.getItem("posts");

    return posts ? JSON.parse(localStorage.getItem("posts")) : [];

}

const LoadPostsFromLocalStorage = () => {

    let postList = getPostFromLocalStorage();
    boxes.innerHTML ="";
    postList.forEach((p) => {




        boxes.innerHTML += `

                <div class="box">
                <div class="imgprent"><img src="${p.image}" alt=""></div>
               <h2>${p.title}</h2>
               <p>${p.article}</p>
        </div>   `;


    })



}

LoadPostsFromLocalStorage();


const addPostToLocalStorage = (postInfo) => {


    let image = postInfo[0].value;
    let title = postInfo[1].value;
    let article = postInfo[2].value;

    let post = {}


    if (image == "" && title == "" && article == "") {

        return;

    } else {
        post = {

            image: image,
            title: title,
            article: article,

        }

    }


    let posts = getPostFromLocalStorage();

    posts.push(post);

    localStorage.setItem("posts", JSON.stringify(posts));


    LoadPostsFromLocalStorage();


}

form.addEventListener("submit", (e) => {

    e.preventDefault();



    if (image.value.length === 0 && title.value.length == 0 && article.value === 0) {
        return;
    } else {
        addPostToLocalStorage([image, title, article]);
        // LoadPostsFromLocalStorage();
    }




})














// // const btn = document.querySelector("#Save_post");


// // const postNow = e => {

// //      let userInfo =JSON.parse(localStorage.getItem('userInfo')) || []; 
// //      userInfo.push ( {
// //   phote : document.querySelector("#image").value,
// //   title : document.querySelector("#title").value,
// //   article : document.querySelector("#article").value,
// // });

// // localStorage.setItem('userInfo',JSON.stringify(userInfo));
// // displayInfo();
// // document.querySelector('form').reset();
// // e.preventDefault();


// // function displayInfo(){
// //     if(localStorage.getItem('userInfo')){
  
// //      var outputInfo =document.querySelector(".boxs");
// //      outputInfo.innerHTML ="";
// //         JSON.parse(localStorage.getItem('userInfo')).forEach(info => {
// //             outputInfo.innerHTML +=`
// //      <div class="box">
// //      <div class="imgprent"><img src="${info.phote}" alt=""></div>
// //      <h2>${info.title}</h2>
// //      <p>${info.article}</p>
// //   </div>                      
// //      `
// //         });
        
// //     } 
    
// // }

// // };

// // displayInfo();



// let currentUser = localStorage.getItem("currentUser");

// span.innerHTML = currentUser.substring(0, 5);


// let imageUrl = document.querySelector("#image");
// let title = document.querySelector("#title");
// let content = document.querySelector("#article");
// let form = document.querySelector("form");
// let postArea = document.querySelector(".inputs");

// let posts = document.querySelector(".posts");

// const getPostFromLocalStorage = () => {

//     let posts = localStorage.getItem("posts");

//     return posts ? JSON.parse(localStorage.getItem("posts")) : [];

// }

// const LoadPostsFromLocalStorage = () => {

//     let postList = getPostFromLocalStorage();

//     postList.forEach((p) => {

//         posts.innerHTML += `
//         <div class="box">
//         <div class="imgprent"><img src="${p.imageUrl}" alt=""></div>
//          <h2>${p.title}</h2>
//         <p>${p.content}</p>
//          </div>                      
//          `;


//     })



// }
// LoadPostsFromLocalStorage();


// const addPostToLocalStorage = (postInfo) => {

//     let imageUrl = postInfo[0].value;
//     let title = postInfo[1].value;
//     let content = postInfo[2].value;

//     let post = {}
//     // console.log(imageUrl);
//     // console.log(title);
//     // console.log(content);

//     if (imageUrl == "" && title == "" && content == "") {

//         return;

//     } else {

//         post = {

//             imgUrl: imageUrl,
//             title: title,
//             content: content,

//         }

//     }

//     let posts = getPostFromLocalStorage();

//     posts.push(post);

//     localStorage.setItem("posts", JSON.stringify(posts));




// }

// document.addEventListener("click", (e) => {

//     let isclciked = postArea.contains(e.target);

//     if (!isclciked) {

//         if (imageUrl.value.length === 0 && title.value.length == 0 && content.value === 0) {
//             return;
//         } else {
//             addPostToLocalStorage([imageUrl, title, content]);
//             LoadPostsFromLocalStorage();
//         }

//     }



// })


// `
//   <div class="box">
//   <div class="imgprent"><img src="${info.phote}" alt=""></div>
//    <h2>${info.title}</h2>
//   <p>${info.article}</p>
//    </div>                      
//    `