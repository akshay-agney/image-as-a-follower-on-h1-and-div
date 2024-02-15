let elem = document.querySelectorAll(".elem");
let img = document.querySelector("#elem1 img");

elem.forEach((e) => {
     let cn = e.childNodes[3];
     e.addEventListener("mousemove", (d) => {
          cn.style.left = d.x - 10 + "px";
          cn.style.top = d.y - 50 + "px";

          //      logic => mouse pointer ki x and value jaida ho rhi hai jiske karan image follower neeche render ho rhi hai , toh merko
          //                     image ko pointer k pass laane k liye x and y ki values ko kamm krna hai
          //      uske liye fir maine elem ko target kiya. jo ki array ki form me hai becaz of  queryselectorAll
          //      us elem ko if condition se match karaya and x and y ki values ko kmm diya.

          if (elem[1] == e) {
               cn.style.left = d.x - 50 + "px";
               cn.style.top = d.y - 325 + "px";
          } else if (elem[2] == e) {
               cn.style.left = d.x - 50 + "px";
               cn.style.top = d.y - 600 + "px";
          }
     });
     e.addEventListener("mouseenter", (d) => {
          cn.style.opacity = 1;
          cn.style.scale = 1;
     });
     e.addEventListener("mouseleave", (d) => {
          cn.style.opacity = 0;
          cn.style.scale = 0;
     });
});
