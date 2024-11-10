//GENERATE STARS MAX IS 5 IF IS LESS THAN RATING MEANS 1.2.3.4 CASE IF LOOP AND PRINT 4 STARTS 
function generateStars(rating) {
    var maxRating = 5;
    var stars = '';
    // Loop through and generate filled stars
    for (var i = 1; i <= maxRating; i++) {
        if (i <= rating) {
            stars += "<span class=\"star filled\">\u2605</span>";
        }
        else {
            stars += "<span class=\"star\">\u2605</span>";
        }
    }
    return stars;
}
//NOW GENERATE RESUME BASED ON USERS INPUT
function generateResume(event) {
    var _a;
    event.preventDefault(); // Prevent form submission
    //RETRIVE VALUES FROM FORM base on IDS 
    var fullname = document.getElementById('fullname').value;
    var job_desc = document.getElementById('job_desc').value;
    var inputElement = document.getElementById('picture');
    var picture = (_a = inputElement === null || inputElement === void 0 ? void 0 : inputElement.files) === null || _a === void 0 ? void 0 : _a[0];
    var pictureURL = '';
    if (picture) {
        pictureURL = URL.createObjectURL(picture);
    }
    var profile_description = document.getElementById('profile_description').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var phonenumber = document.getElementById('phonenumber').value;
    var website = document.getElementById('website').value;
    var skill1 = document.getElementById('skill1').value;
    var rating1 = document.getElementById('rating1').value;
    var skill2 = document.getElementById('skill2').value;
    var rating2 = document.getElementById('rating2').value;
    var skill3 = document.getElementById('skill3').value;
    var rating3 = document.getElementById('rating3').value;
    var In1 = document.getElementById('in1').value;
    var Year1 = document.getElementById('y1').value;
    var degree1 = document.getElementById('d1').value;
    var In2 = document.getElementById('in2').value;
    var Year2 = document.getElementById('y2').value;
    var degree2 = document.getElementById('d2').value;
    var In3 = document.getElementById('in3').value;
    var Year3 = document.getElementById('y3').value;
    var degree3 = document.getElementById('d3').value;
    var j1 = document.getElementById('j1').value;
    var l1 = document.getElementById('l1').value;
    var d1 = document.getElementById('d1').value;
    var desc1 = document.getElementById('desc1').value;
    var j2 = document.getElementById('j2').value;
    var l2 = document.getElementById('l2').value;
    var d2 = document.getElementById('d2').value;
    var desc2 = document.getElementById('desc2').value;
    var j3 = document.getElementById('j3').value;
    var l3 = document.getElementById('l3').value;
    var d3 = document.getElementById('d3').value;
    var desc3 = document.getElementById('desc3').value;
    var stars = generateStars(parseInt(rating1));
    var stars2 = generateStars(parseInt(rating2));
    var stars3 = generateStars(parseInt(rating3));
    // Create the resume string using template literals
    var generatedResume = "\n    <div class=\"container\">\n    <div class=\"inside_container\">\n        <div class=\"left_side\">\n            <div class=\"profile_img\">\n                <img src=".concat(pictureURL, " width=\"200\" height=\"200\" />\n            </div>\n            <div class=\"My_profile\">\n                <div class=\"icon\">\n                    <img src=\"user.png\" width=\"20px\" height=\"20px\"/>\n                </div>\n                <div class=\"heading\">\n                    <h1 style=\"font-size: 30px;\">My Profile</h1>\n                </div>\n            </div>\n            <div class=\"para\">\n                <p>").concat(profile_description, "</p>\n            </div>\n            <div id=\"skill\">\n                <center><div class=\"personal_skill\">\n                    <h1 style=\"color: white;font-weight: bold;\">Personal SKill</h1>    \n                </div></center>\n                <div class=\"rating_skill\">\n                    <div class=\"name_skill\">\n                        <div class=\"name\">\n                            <p style=\"color: black;\">").concat(skill1, "</p>\n                        </div>\n                        <div class=\"rating_div\">\n                        <div class=\"rating_container\">\n                            <p>").concat(stars, "</p>\n                        </div>\n                        </div>\n                    </div>\n                    <div class=\"name_skill\">\n                        <div class=\"name\">\n                            <p style=\"color: black;\">").concat(skill2, "</p>\n                        </div>\n                        <div class=\"rating_div\">\n                        <div class=\"rating_container\">\n                            <p>").concat(stars2, "</p>\n                        </div>\n                        </div>\n                    </div>\n                   \n                    <div class=\"name_skill\">\n                        <div class=\"name\">\n                            <p style=\"color: black;\">").concat(skill3, "</p>\n                        </div>\n                        <div class=\"rating_div\">\n                        <div class=\"rating_container\">\n                            <p>").concat(stars3, "</p>\n                        </div>\n                        </div>\n                    </div>\n                </div>\n            </div> \n           <ul>\n                <li>\n                <div class=\"contact\">  \n                <div class=\"contact_icon\">\n                    <i class=\"fas fa-phone\" style=\"padding: 10px;color: hotpink;\"></i> <!-- Home icon from Font Awesome -->\n                </div>\n                <div class=\"details\" style=\"padding: 10px;\" >\n                    ").concat(phonenumber, "\n                </div>\n                </div>\n            </li>\n            <li>\n            <div class=\"contact\">\n                <div class=\"contact_icon\">\n                    <i class=\"fas fa-envelope\" style=\"padding: 10px;color: hotpink;\"></i> <!-- Home icon from Font Awesome -->\n                </div>\n                <div class=\"details\" style=\"padding: 10px;\" >\n                    ").concat(email, "\n            </div>\n            </div>\n            </li>\n            <li>\n                <div class=\"contact\">\n                <div class=\"contact_icon\">\n                    <i class=\"fas fa-globe\" style=\"padding: 10px;color: hotpink;\"></i> <!-- Home icon from Font Awesome -->\n                </div>\n                <div class=\"details\"  style=\"padding: 10px;\">\n                    ").concat(website, "\n                </div>\n                </div>\n            </li>\n            <li>\n            <div class=\"contact\">\n            <div class=\"contact_icon\">\n                <i class=\"fas fa-home\" style=\"padding: 10px;color: hotpink;\"></i> \n                </div>\n                <div class=\"details\" style=\"padding: 10px;\">\n                ").concat(address, "\n                </div>\n            </div>\n            </li>\n            </ul>\n            </div>                   \n        <div class=\"right_side\">\n            <div style=\"font-size: 60px;color: black;\">").concat(fullname, "</div>\n            <div class=\"job_desc\">\n                <h2 style=\"color: white;\">").concat(job_desc, "</h2>\n            </div>\n            <div class=\"education\">\n                <div class=\"heading1\" style=\"padding: 20px;\">\n                    <div class=\"contact\">\n                        <div style=\"flex: 20%;\"> \n                            <div class=\"star\">\n                                *\n                                </div>\n                        </div>\n                    <div class=\"details\">\n                        <h3>").concat(In1, "</h3>\n                        <h4>").concat(degree1, "</h4>\n                        <p>").concat(Year1, "</p>\n                    </div> \n                    </div>\n                    <div class=\"contact\">\n                        <div style=\"flex: 20%;\"> \n                            <div class=\"star\">\n                                *\n                                </div>\n                        </div>\n                        <div class=\"details\">\n                            <h3>").concat(In2, "</h3>\n                            <h4>").concat(degree2, "</h4>\n                            <p>").concat(Year2, "</p>\n                        </div> \n                        </div>\n\n                    <div class=\"contact\">\n                    <div style=\"flex: 20%;\"> \n                        <div class=\"star\">\n                            *\n                            </div>\n                    </div>\n                    <div class=\"details\">\n                        <h3>").concat(In3, "</h3>\n                        <h4>").concat(degree3, "</h4>\n                        <p>").concat(Year3, "</p>\n                    </div> \n                    </div>\n                </div>\n                <div class=\"data\">Education</div>\n            </div>\n         <div class=\"education\">\n            <div class=\"heading1\" style=\"padding: 20px;\">\n                <div class=\"contact\">\n                    <div style=\"flex: 20%;\"> \n                        <div class=\"star\">\n                            *\n                            </div>\n                    </div>\n                <div class=\"details\">\n                    <h3>").concat(j1, "</h3>\n                    <h4><span>").concat(d1, "</span>---<span>").concat(l1, "</span></h4>\n                    <h5>").concat(desc1, "</h5>\n                </div> \n                </div>\n                <div class=\"contact\">\n                    <div style=\"flex: 20%;\"> \n                        <div class=\"star\">\n                            *\n                            </div>\n                    </div>\n                <div class=\"details\">\n                    <h3>").concat(j2, "</h3>\n                    <h4><span>").concat(d2, "</span>---<span>").concat(l2, "</span></h4>\n                    <h5>").concat(desc2, "</h5>\n                </div> \n                </div>\n                <div class=\"contact\">\n                    <div style=\"flex: 20%;\"> \n                        <div class=\"star\">\n                            *\n                            </div>\n                    </div>\n                <div class=\"details\">\n                    <h3>").concat(j3, "</h3>\n                    <h4><span>").concat(d3, "</span>---<span>").concat(l3, "</span></h4>\n                    <h5>").concat(desc3, "</h5>\n                </div> \n                </div>\n            </div>\n            <div class=\"data1\">Work Experience</div>\n        </div>\n        </div>\n     </div>  \n    </div>\n\n    ");
    // Display the generated resume in the 'generatedResume' div
    var resumeDiv = document.getElementById('generatedResume');
    resumeDiv.innerHTML = generatedResume; // Set the resume HTML
}
//CALL A FUNCTION BASED ON SUBMIT BUTTON IF CLICK THEN GENERATE FUNCTION IS CALL
var submitButton = document.getElementById('submitBtn');
submitButton.addEventListener('click', generateResume);
