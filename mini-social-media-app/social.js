let postBtn = document.getElementById("postBtn");

let posts = document.getElementById("posts");

postBtn.addEventListener("click", function(){

    let input = document.getElementById("postInput");

    let div = document.createElement("div");

    div.innerHTML = `

    <h2>${input.value}</h2>

    <button class="likeBtn">Like</button>

    <span class="count">0</span>

    <button class="deleteBtn">Delete</button>

    <br><br>

    <input type="text" class="commentInput" placeholder="Write comment">

    <button class="commentBtn">Comment</button>

    <div class="comments"></div>

    <hr>

    `;

    posts.appendChild(div);



    // Like Button

    let likeBtn = div.querySelector(".likeBtn");

    let count = div.querySelector(".count");

    let like = 0;

    likeBtn.addEventListener("click", function(){

        like++;

        count.innerText = like;

    });



    // Comment Button

    let commentBtn = div.querySelector(".commentBtn");

    let commentInput = div.querySelector(".commentInput");

    let comments = div.querySelector(".comments");

    commentBtn.addEventListener("click", function(){

        let p = document.createElement("p");

        p.innerText = commentInput.value;

        comments.appendChild(p);

        commentInput.value = "";

    });



    // Delete Button

    let deleteBtn = div.querySelector(".deleteBtn");

    deleteBtn.addEventListener("click", function(){

        div.remove();

    });



    input.value = "";

});