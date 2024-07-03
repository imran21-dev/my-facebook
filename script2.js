function fillIcon() {
    const icon = document.getElementById("homeIcon")
        icon.className = "fa-solid fa-house-window"
         icon.id = "home-color"
}
function fill2Icon() {
    const icon = document.getElementById("videoIcon")
        icon.className = "fa-solid fa-clapperboard-play"
         icon.id = "home-color"
    

         
}
function fill3Icon() {
    const icon = document.getElementById("storeIcon")
        icon.className = "fa-solid fa-store"
         icon.id = "home-color"

}
function fill4Icon() {
    const icon = document.getElementById("groupIcon")
        icon.className = "fa-solid fa-user-group"
         icon.id = "home-color"

}
function fill5Icon() {
    const icon = document.getElementById("gamingIcon")
        icon.className = "fa-solid fa-gamepad"
         icon.id = "home-color"

}




function seeMoreItem() {
    const newDiv = document.getElementById("hiddenDiv")
          newDiv.style.display = "flex"
     const seeButton = document.getElementById("seeMoreDisplay")  
           seeButton.style.display = "none" 
      const lessButton = document.getElementById("seeLessDisplay")   
         lessButton.style.display = "flex"     
    
}
function seeLessItem() {
    const newDiv = document.getElementById("hiddenDiv")
          newDiv.style.display = "none"
     const lessButton = document.getElementById("seeLessDisplay")  
           lessButton.style.display = "none"
           
      const seeButton = document.getElementById("seeMoreDisplay") 
          seeButton.style.display = "flex"    
    console.log(seeButton)
}






function seeMoreItemSht() {
    const newDiv = document.getElementById("hiddenDivSht")
          newDiv.style.display = "flex"
     const seeButton = document.getElementById("seeMoreDisplaySht")  
           seeButton.style.display = "none" 
      const lessButton = document.getElementById("seeLessDisplaySht")   
         lessButton.style.display = "flex"     
    
}
function seeLessItemSht() {
    const newDiv = document.getElementById("hiddenDivSht")
          newDiv.style.display = "none"
     const lessButton = document.getElementById("seeLessDisplaySht")  
           lessButton.style.display = "none"
           
      const seeButton = document.getElementById("seeMoreDisplaySht") 
          seeButton.style.display = "flex"    
   
}



function checkR() {
    const scrollingDiv = document.getElementById("storySlidebar")
    const styleMake = scrollingDiv.style.transform = "translateX(-300px)"
         scrollingDiv.style.transition = "0.3s ease-in-out"

    const button1 = document.getElementById("scrollRight1")     
    const button2 = document.getElementById("scrollRight2") 
    const buttonl1 = document.getElementById("scrollLeft1") 
          button2.style.display = "block"
          button1.style.display = "none" 
          buttonl1.style.display = "block"   

}
function checkR2() {
    const scrollingDiv = document.getElementById("storySlidebar")
    const styleMake = scrollingDiv.style.transform = "translateX(-600px)"
         scrollingDiv.style.transition = "0.3s ease-in-out"



         const button3 = document.getElementById("scrollRight3")     
         const button2 = document.getElementById("scrollRight2") 
         const buttonl1 = document.getElementById("scrollLeft1") 
         const buttonl2 = document.getElementById("scrollLeft2")
               button2.style.display = "none"
               button3.style.display = "block" 
               buttonl2.style.display = "block" 
               buttonl1.style.display = "none"

}
function checkR3() {
    const scrollingDiv = document.getElementById("storySlidebar")
    const styleMake = scrollingDiv.style.transform = "translateX(-900px)"
         scrollingDiv.style.transition = "0.3s ease-in-out"

         const button3 = document.getElementById("scrollRight3") 
         const buttonl3 = document.getElementById("scrollLeft3")
         const buttonl2 = document.getElementById("scrollLeft2")

          buttonl3.style.display = "block"
          button3.style.display = "none"
          buttonl2.style.display = "none" 

}





function checkL() {
    const scrollingDiv = document.getElementById("storySlidebar")
    const styleMake = scrollingDiv.style.transform = "translateX(0px)"
         scrollingDiv.style.transition = "0.3s ease-in-out"
         const button2 = document.getElementById("scrollRight2")
         const button1 = document.getElementById("scrollRight1")
         const buttonl1 = document.getElementById("scrollLeft1")
           button2.style.display = "none"
           button1.style.display = "block"
           buttonl1.style.display = "none"

}
function checkL2() {
    const scrollingDiv = document.getElementById("storySlidebar")
    const styleMake = scrollingDiv.style.transform = "translateX(-300px)"
         scrollingDiv.style.transition = "0.3s ease-in-out"

         const button3 = document.getElementById("scrollRight3")
         const button2 = document.getElementById("scrollRight2")
         const buttonl1 = document.getElementById("scrollLeft1") 
         const buttonl2 = document.getElementById("scrollLeft2") 
             button3.style.display = "none"
             button2.style.display = "block"
             buttonl1.style.display = "block"
             buttonl2.style.display = "none"

}
function checkL3() {
    const scrollingDiv = document.getElementById("storySlidebar")
    const styleMake = scrollingDiv.style.transform = "translateX(-600px)"
         scrollingDiv.style.transition = "0.3s ease-in-out"
     

         const buttonl3 = document.getElementById("scrollLeft3")
         const buttonl2 = document.getElementById("scrollLeft2")
         const button3 = document.getElementById("scrollRight3")

               buttonl3.style.display = "none"
               buttonl2.style.display = "block"
               button3.style.display = "block"

}



function moreHeight(){
    const ok = document.getElementById("commentHeight")
    const emoji = document.getElementById("emojiPadding")
    const sendEmoji = document.getElementById("sendComment")
        ok.style.height = "80px"
        ok.style.borderRadius = "20px"
        ok.style.flexDirection = "column"
        emoji.style.paddingBottom = "10px"
        emoji.style.width ="100%"
        sendEmoji.style.display = "flex"
    console.log(sendEmoji)
}



function keyUp() {
    const anchor = document.getElementById("sendComment")
    const anchorIcon = document.getElementById("amni")
          anchor.style.opacity ="100%"
          anchor.style.cursor = "pointer"
         anchorIcon.classList.add("amni")
    console.log(anchorIcon)
}



// repost str



function moreHeight2(){
    const ok = document.getElementById("commentHeight2")
    const emoji = document.getElementById("emojiPadding2")
    const sendEmoji = document.getElementById("sendComment2")

        ok.style.height = "80px"
        ok.style.borderRadius = "20px"
        ok.style.flexDirection = "column"
        emoji.style.paddingBottom = "10px"
        emoji.style.width ="100%"
        sendEmoji.style.display = "flex"
    
    console.log(sendEmoji)
}



function keyUp2() {
    const anchor = document.getElementById("sendComment2")
    const anchorIcon = document.getElementById("amni2")
          anchor.style.opacity ="100%"
          anchor.style.cursor = "pointer"
         anchorIcon.classList.add("amni")
    console.log(anchorIcon)
}



function moreHeight3(){
    const ok = document.getElementById("commentHeight3")
    const emoji = document.getElementById("emojiPadding3")
    const sendEmoji = document.getElementById("sendComment3")

        ok.style.height = "80px"
        ok.style.borderRadius = "20px"
        ok.style.flexDirection = "column"
        emoji.style.paddingBottom = "10px"
        emoji.style.width ="100%"
        sendEmoji.style.display = "flex"
    
    console.log(sendEmoji)
}



function keyUp3() {
    const anchor = document.getElementById("sendComment3")
    const anchorIcon = document.getElementById("amni3")
          anchor.style.opacity ="100%"
          anchor.style.cursor = "pointer"
         anchorIcon.classList.add("amni")
    console.log(anchorIcon)
}

function checkClose() {
    const closePost = document.getElementById("postOne")
          closePost.style.display = "none"
    console.log(closePost)
}
function checkClose2() {
    const closePost = document.getElementById("postTwo")
          closePost.style.display = "none"
    console.log(closePost)
}
function checkClose3() {
    const closePost = document.getElementById("postThree")
          closePost.style.display = "none"
    console.log(closePost)
}