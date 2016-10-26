$(".login_button").on("click", login);
$("#submitgroup").on("click", newGroup);
$(".group").on("click", openGroup);
$("#enter_btn").on("click", newCom);
$(".iconvote").on("click", vote);


function vote(event) {
  console.log('yes');
  var target = event.target;
  var comment = target.parentElement.parentElement;
  var comment_ul = comment.parentElement;
  var percentage = $(target).siblings("p");
  var members = comment.parentElement.parentElement.getAttribute("members");
  var cutoff = Math.floor(members/2);
  var commentid = comment.getAttribute("commentid");
  var yes = parseInt(comment.getAttribute("yes"));
  var no = parseInt(comment.getAttribute("no"));
  var type = target.getAttribute("type");
  var temp = 0;
  var temp2 = 0;
  temp = Math.floor((yes / members)*100);

  //HIDE VOTES for USER
  // $(target).siblings("img").hide();
  // $(target).hide();

///REJECT OR APPROVE
  if (type == "yes") {
    yes += 1;
    temp = Math.floor((yes / members)*100);
    comment.setAttribute("yes", yes);
    percentage.text(temp+"%");
    percentage.show();
     if (temp >= 50) {
      comment.setAttribute("status", 1)
      percentage.css("color", "green")
      $(comment).css("background", "#e6ffe6")
    };
  };

  if (type == "no") {
    no += 1;
    comment.setAttribute("no", no)
    temp2 = (no / members)*100;
    percentage.text(temp+"%");
    percentage.show();
    if (temp2 > 50) {
      comment.setAttribute("status", -1)
      percentage.css("color", "red")
      $(comment).css("background", "#ffe6e6")
    };
  };
};


var loggedin = 1;

function newCom(event) {
  var comment = document.querySelector("#newcomment").value;
  var li = $("<li>").addClass("commentli").attr("yes", 0).attr("no", 0).attr("status", 0); //add comment ID?
  document.querySelector("#newcomment").value = "";

  var c_user = $("<div>").addClass("c_user");
  var usericon =  $("<img>").addClass("usericon").attr("src","img/lucas.jpg");
  c_user.append(usericon);

  var c_text = $("<div>").addClass("c_text");
  var po = $("<p>");
  po.text(comment);
  po.addClass("font2");
  c_text.append(po);

  var c_vote = $("<div>").addClass("c_vote");
  var yes =  $("<img>").attr("src","img/check.png").addClass("iconvote").attr("type","yes").on("click", vote);
  var no =  $("<img>").attr("src","img/x.png").addClass("iconvote").attr("type","no").on("click", vote);
  var perc = $("<p>").addClass("percentage").addClass("font");
  c_vote.append(yes);
  c_vote.append(no);
  c_vote.append(perc);

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
