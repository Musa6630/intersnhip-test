function validation() {
  //   var source = document.getElementById('source').value;
  var pipelinename = document.getElementById("pipelinename").value;
  var ProjectName = document.getElementById("ProjectName").value;
  var BucketName = document.getElementById("BucketName").value;
  var CloudStorage = document.getElementById("CloudStorage").value;
  var Credentials = document.getElementById("Credentials").value;
  var no_specialchar = /^[A-Za-z]+$/;
  if (source == "") {
    document.getElementById("error1").innerHTML = "**name cannot be empty";
    return false;
  }

  //validation for pipeline Name
  if (pipelinename == "") {
    document.getElementById("error2").innerHTML = "**It should not be empty";
    return false;
  }
  if (pipelinename.length <= 4) {
    document.getElementById("error2").innerHTML =
      "**minimum 5 character is required";
    return false;
  }
  if (pipelinename.match(no_specialchar)) true;
  else {
    document.getElementById("error2").innerHTML =
      "No Special Character Allowed";
    return false;
  }

  //validation for Project Name
  if (ProjectName == "") {
    document.getElementById("error3").innerHTML =
      "**Project name cannot be empty";
    return false;
  }
  if (ProjectName.length <= 4) {
    document.getElementById("error3").innerHTML =
      "**minimum 5 character is required";
    return false;
  }
  if (ProjectName.match(no_specialchar)) true;
  else {
    document.getElementById("error3").innerHTML =
      "No Special Character Allowed";
    return false;
  }

  //validation for Bucket Name
  if (BucketName == "") {
    document.getElementById("error4").innerHTML =
      "**Bucket name cannot be empty";
    return false;
  }
  if (BucketName.length <= 4) {
    document.getElementById("error4").innerHTML =
      "**minimum 5 character is required";
    return false;
  }
  if (BucketName.match(no_specialchar)) true;
  else {
    document.getElementById("error4").innerHTML =
      "No Special Character Allowed";
    return false;
  }

  //validation for Storage location
  if (CloudStorage == "") {
    document.getElementById("error5").innerHTML =
      "**storage location cannot be empty";
    return false;
  }
  if (source.length <= 4) {
    document.getElementById("error5").innerHTML =
      "**minimum 5 character is required";
    return false;
  }
  if (CloudStorage.match(no_specialchar)) true;
  else {
    document.getElementById("error5").innerHTML =
      "No Special Character Allowed";
    return false;
  }

  //validation for credentials
  if (Credentials == "") {
    document.getElementById("error6").innerHTML =
      "**credentials cannot be empty";
    return false;
  }
  if (Credentials.length <= 4) {
    document.getElementById("error6").innerHTML =
      "**minimum 5 character is required";
    return false;
  }
  if (Credentials.match(no_specialchar)) true;
  else {
    document.getElementById("error6").innerHTML =
      "No Special Character Allowed";
    return false;
  }
}
