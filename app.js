//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    // console.log(question);
    const btn = question.querySelector('.question-btn');
    // console.log(btn);

    btn.addEventListener('click',function(){

        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove('show-text');
            }
        })




        question.classList.toggle('show-text');
        // question;
        console.log(question);
    })
})






//using selectors inside the element
// traversing the dom

// const questionBtns = document.querySelectorAll('.question-btn');
// const question = document.querySelector('.question');

// questionBtns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         e.currentTarget.parentElement.parentElement.classList.toggle('show-text');
//         // console.log(e.currentTarget.parentElement);
//     })
// })