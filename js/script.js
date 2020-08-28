function validate() {
  let eventType = document.getElementById("eventType").value;
  let eventTitle = document.getElementById("eventTitle").value;
  let eventDates = document.getElementById("eventDates").value;
  let eventToDates = document.getElementById("eventToDates").value;
  let postingDate = document.getElementById("postingDate").value;
  var errorText;
  let confirm = new Array();

  if (eventType == 0) {
    errorText = "Please Complete the Form\nEvent Type is Missing.";
    alert(errorText);
    return false;
  } else {
    confirm.push("The Event Type is: " + eventType);
  }

  if (eventTitle <= 0) {
    errorText = "Please Complete the Form\nEvent Title is Missing.";
    alert(errorText);
    return false;
  } else {
    confirm.push("The Event Title is: " + eventTitle);
  }

  if (eventDates <= 0 || eventToDates <= 0) {
    errorText = "Please Complete the Form\nEvent Dates is/are Missing.";
    alert(errorText);
    return false;
  } else {
    confirm.push(
      "The Event will be held from: " + eventDates + " to " + eventToDates
    );
  }

  if (postingDate <= 0) {
    errorText = "Please Complete the Form\nPosting Date is Missing.";
    alert(errorText);
    return false;
  } else {
    confirm.push("The Posting Date will be on: " + postingDate);
  }

  let cb = document.getElementsByClassName("cb");
  let print = new Array();
  if (cb[0].checked) {
    print.push("Registration is Required.");
  }
  if (cb[1].checked) {
    print.push("The event is associated with a Family Program.");
  }
  if (cb[2].checked) {
    print.push(
      "Upon Registration Completion, The Users will Receive an Auto Generated Email."
    );
  }
  if (cb[3].checked) {
    print.push("There is a Point of Contact.");
  }
  if (cb[4].checked) {
    print.push("There is a Hosting Command Point of Contact.");
  }

  var list = "";
  for (i = 0; i < print.length; i++) {
    const element = print[i];
    list = list + "*" + element + "\n";
  }

  var pile = "";
  for (i = 0; i < confirm.length; i++) {
    const element = confirm[i];
    pile = pile + "*" + element + "\n";
  }

  alert("Details of The Event:\n" + pile);
  if (list.length > 0) {
    alert("Options You Included:\n" + list);
  }
  alert("Form Submitted Successfully!");
  return true;
}

function clr() {
  if (confirm("Are you sure you want to reset the form?")) {
    return true;
  } else {
    return false;
  }
}
