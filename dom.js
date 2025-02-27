console.log("Hello Dom");

// document.body.childNode[1].childNodes;
// let cont =document.body.childNode[1].childNodes;
// cont
// cont.firstChild;
// cont.lastChild;
//document.body.childNodes[1].firstElementChild;
// document.body.childNodes[1].firstElementChild.style.backgroundColor="green";

// > document.body.childNodes[1].firstElementChild.style.Color="red";
// < "red"
// > document.body.childNodes[1].firstElementChild.style.color="red";
// < "red"

//done on inspect mode

// [Log] Hello Dom (dom.js, line 1)
// > document.body.childNodes[1].firstElementChild.style.color="red";
// < "red"
// > $1
// < "red"
// > document.body.childNodes[1].firstElementChild.chidNodes;
// < undefined
// > document.body.childNodes[1].firstElementChild.children;
// < HTMLCollection [] (0)
// > document.body.childNodes[1].firstElementChild.children[1];
// < undefined
// > document.body.firstElementChild.children[1];
// < <div class="box">Box2</div>
// > document.body.firstElementChild.children[1].nextElementSibling;
// < <div class="box">Box3</div>
// > document.body.firstElementChild.children[1].previousElementSibling;
// < <div class="box" style="color: red;">Box1</div>
// > document.body.firstElementChild.children[1].previousElementSibling.blur;
// < function blur() {
//     [native code]
// }
// > document.body.firstElementChild.children[1].previousSibling;
// < #text "
//         "
// > document.body.firstElementChild.children[1].parentElement;
// < <div class="container">…</div>