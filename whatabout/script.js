$(".login_button").on("click", login);
$("#submitgroup").on("click", newGroup);
$(".group").on("click", openGroup);
$("#enter_btn").on("click", newCom);
$(".iconvote").on("click", vote);


function vote(event) {
  var target = event.target;
  var commentid = target.parentElement.parentElement.getAttribute("commentid");
  console.log(commentid);
};





var loggedin = 1;

function newCom(event) {
  var comment = document.querySelector("#newcomment").value;
  var li = $("<li>").addClass("commentli"); //add comment ID!

  var c_user = $("<div>").addClass("c_user");
  var usericon =  $("<img>").addClass("usericon").attr("src","img/lucas.jpg");
  c_user.append(usericon);

  var c_text = $("<div>").addClass("c_text");
  var po = $("<p>");
  po.text(comment);
  po.addClass("font2");
  c_text.append(po);

  var c_vote = $("<div>").addClass("c_vote");
  var yes =  $("<img>").addClass("iconvote").attr("src","img/check.png");
  var no =  $("<img>").addClass("iconvote").attr("src","img/x.png");
  c_vote.append(yes);
  c_vote.append(no);

  li.append(c_user);
  li.append(c_text);
  li.append(c_vote);
  $(".commentul").append(li);
};

function login(event) {
  event.preventDefault();
  var username = $("#input").val();
  $(".firstloginbox").toggle();
  $(".user").toggle();
  $(".topright").append($("<p>")).text(username);
};

function addGroup(event) {
  // $(".addgroupbox").toggle();
  $(".example").toggle();
};

///OPTIONS SHOW/HIDE
function showOptions(event) {
  if (loggedin == 1) {
    $(".members").toggle();
  }
  else {
    // pass;
    ///loginbox
  }
};

function newGroup(event) {
  addGroup();
};

function openGroup(event) {
  var group = event.target;
  var groupID = group.getAttribute("groupid");
  var groupName = group.textContent;
  $("#title").text(groupName);
  ///selected animation
  var groups = $(".group");
  for (var i = 0; i < groups.length; i++) {
    groups[i].classList.remove("selected");
  };
  group.classList.toggle("selected");
  ///
  // $(".members").show();
  $(".insidegroup").show();
  $(".currentmembers").show();
};
