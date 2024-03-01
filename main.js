

    let form = $('#form')
    let tbody = $('#tbody')
    let add = $('#add')
    let createForm = $('#create-form')
    let userId =1;
    let firstName = $('.fname')
    let lastName = $('.lname')
    let email = $('.email') 
    let address = $('.address')
    let dob = $('.dob')
    let graduation = $('.graduation')

    // education compulsary 
    let degree1 = $('.degree-1')
    let college1 = $('.college-1')
    let startYear1 = $('.startYear-1')
    let passoutYear1 = $('.passoutYear-1')
    let percentage1= $('.percentage-1')
    let backlog1 = $('.backlog-1')
    let degree2 = $('.degree-2')
    let college2 = $('.college-2')
    let startYear2 = $('.startYear-2')
    let passoutYear2 = $('.passoutYear-2')
    let percentage2= $('.percentage-2')
    let backlog2 = $('.backlog-2')

    // message 
    let msgFname = $('#msgFname')
    let msgEmail = $('#msgEmail')
    let msgAddress = $('#msgAddress')
    let msgDob = $('#msgDob')
    let msgGraduation = $('#msgGraduation')

    // data table 
    let table = new DataTable('#firstTable');

    createForm.on('click', function(){
        resetEducationRows();
        resetForm();
    })

    form.on('submit', function (e){
        e.preventDefault();
        formValidation();
    });

    function getCurrentDate() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function formValidation () {

        // education compulsary 
        let degree_1 = $('.degree-1');
        let college_1 = $('.college-1');
        let startYear_1 = $('.startYear-1');
        let passoutYear_1 = $('.passoutYear-1');
        let percentage_1 = $('.percentage-1');
        let backlog_1 = $('.backlog-1');
        let degree_2 = $('.degree-2');
        let college_2 = $('.college-2');
        let startYear_2 = $('.startYear-2');
        let passoutYear_2 = $('.passoutYear-2');
        let percentage_2 = $('.percentage-2');
        let backlog_2 = $('.backlog-2');

        // message for education compulsary
        let msgDegree_1 = $('.msgDegree-1');
        let msgCollege_1 = $('.msgCollege-1');
        let msgStartYear_1 = $('.msgStartYear-1');
        let msgPassoutYear_1 = $('.msgPassoutYear-1');
        let msgPercentage_1 = $('.msgPercentage-1');
        let msgBacklog_1 = $('.msgBacklog-1');
        let msgDegree_2 = $('.msgDegree-2');
        let msgCollege_2 = $('.msgCollege-2');
        let msgStartYear_2 = $('.msgStartYear-2');
        let msgPassoutYear_2 = $('.msgPassoutYear-2');
        let msgPercentage_2 = $('.msgPercentage-2');
        let msgBacklog_2 = $('.msgBacklog-2');

        reset()


        let isValid = true;

        function validateField(input, message){
            if(input.val().trim()==='' ){   
                input.addClass('is-invalid');
                message.text('Inavlid Input!');
                message.addClass('text-danger');
                isValid=false;
            }
        }

        function validateEmail(message){
            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(!emailRegex.test(email.val())){
                email.addClass('is-invalid');
                message.text('Inavlid Input!');
                message.addClass('text-danger');
                isValid=false;
            }
        }
        
        function validateDate(dateInput, message, minAge){
            const dateValue = new Date(dateInput.val());
            const currentYear = new Date().getFullYear();
            const yearDiff = currentYear - dateValue.getFullYear();
            if(dateInput.val() === '' || yearDiff < minAge){
                dateInput.addClass('is-invalid');
                message.text(`Age must be at least ${minAge} years!`);
                message.addClass('text-danger');
                isValid=false;
            }
        }

        function educationYearValidation(startyear, passoutyear, message){
            const yearRegex = /^\d{4}-\d{2}$/;
            const startFullYear = new Date(startyear.val());
            const passoutFullYear = new Date(passoutyear.val());
            const yearDiff = passoutFullYear.getFullYear()- startFullYear.getFullYear();
            

            if(!yearRegex.test(startyear.val()) || !yearRegex.test(passoutyear.val()) || yearDiff<0){
                passoutyear.addClass('is-invalid');
                message.text("Must be greater than start year!");
                isValid=false;
            }
        }

        function numValidation(num, message){
            if(num.val()===''){
                num.addClass('is-invalid');
                message.text("Invalid input!");
                isValid=false;
            }
        }

        // validating each input field
        validateField(firstName, msgFname);
        validateEmail(msgEmail);
        validateField(address, msgAddress);
        validateDate(dob, msgDob, 18); // Minimum age required: 18 years
        validateDate(graduation, msgGraduation, 1); // graduation year not in the future

        educationYearValidation(startYear_1, passoutYear_1, msgPassoutYear_1);
        validateField(degree_1, msgDegree_1);
        validateField(college_1, msgCollege_1);
        validateField(startYear_1, msgStartYear_1);
        numValidation(percentage_1, msgPercentage_1);
        numValidation(backlog_1, msgBacklog_1);

        educationYearValidation(startYear_2, passoutYear_2, msgPassoutYear_2);
        validateField(degree_2, msgDegree_2);
        validateField(college_2, msgCollege_2);
        validateField(startYear_2, msgStartYear_2);
        numValidation(percentage_2, msgPercentage_2);
        numValidation(backlog_2, msgBacklog_2);

        $('#educationTableBody tr').each(function() {
            let degree = $(this).find('.degree');
            let college = $(this).find('.college');
            let startYear = $(this).find('.startYear');
            let passoutYear = $(this).find('.passoutYear');
            let percentage = $(this).find('.percentage');
            let backlog = $(this).find('.backlog');

            let msgDegree = $(this).find('.msgDegree');
            let msgCollege = $(this).find('.msgCollege');
            let msgStartYear = $(this).find('.msgStartYear');
            let msgPassoutYear = $(this).find('.msgPassoutYear');
            let msgPercentage = $(this).find('.msgPercentage');
            let msgBacklog = $(this).find('.msgBacklog');

            educationYearValidation(startYear, passoutYear, msgPassoutYear);
            validateField(degree, msgDegree);
            validateField(college, msgCollege);
            validateField(startYear, msgStartYear);
            numValidation(percentage, msgPercentage);
            numValidation(backlog, msgBacklog);

        });

        if(isValid){

            // reset form validation state 
            reset();

            //add/update
            if(add.data('action') === 'add'){
                addUser();
            }else if(add.data('action') === 'update'){
                console.log('for update ')
                updateUserInList();
            }

            // close the modal 
            add.attr('data-bs-dismiss','modal');
            add.click();
            (function (){
                add.attr('data-bs-dismiss','');
            })()
        }
    };

    let users = [];

    function addUser(){
        console.log('add user')
        // for add 
        let compulsaryField = [
            {
                degree: degree1.val(),
                college: college1.val(),
                startYear: startYear1.val(),
                passoutYear: passoutYear1.val(),
                percentage: percentage1.val(),
                backlog: backlog1.val()
            },
            {
                degree: degree2.val(),
                college: college2.val(),
                startYear: startYear2.val(),
                passoutYear: passoutYear2.val(),
                percentage: percentage2.val(),
                backlog: backlog2.val()
            }
        ];

        let user = {
            id: userId++,
            firstName: firstName.val(),
            lastName: lastName.val(),
            email: email.val(),
            address: address.val(),
            dob: dob.val(),
            graduation: graduation.val(),
            educationsCompulsary: compulsaryField,
            educations: []
        }

        $('#educationTableBody tr').each(function(){
            let education = {
                degree: $(this).find('.degree').val(),
                college: $(this).find('.college').val(),
                startYear: $(this).find('.startYear').val(),
                passoutYear: $(this).find('.passoutYear').val(),
                percentage: $(this).find('.percentage').val(),
                backlog: $(this).find('.backlog').val()
            }

            user.educations.push(education);
        })

        users.push(user);

        // for update 
        renderUsers();
        alert('user created successfully!');
    }

    
    $('.add-education-btn').on('click', function addEducationRow () {
        const educationTableBody = $('#educationTableBody');
        educationTableBody.append(
            `
            <tr>
                <td class="pb-0">
                    <input type="text" class="form-control degree" placeholder="Degree">
                    <p class="msgDegree fs-6 text-danger"></p>
                </td>
                <td>
                    <input type="text" class="form-control college" placeholder="College">
                    <p class="msgCollege fs-6 text-danger"></p>
                </td>
                <td>
                    <input type="month" class="form-control startYear" placeholder="Start Year">
                    <p class="msgStartYear fs-6 text-danger"></p>
                </td>
                <td>
                    <input type="month" class="form-control passoutYear" placeholder="Passout Year">
                    <p class="msgPassoutYear fs-6 text-danger"></p>
                </td>
                <td>
                    <input type="number" class="form-control percentage" placeholder="Percentage" min="0" max="100" step="0.01">
                    <p class="msgPercentage fs-6 text-danger"></p>
                </td>
                <td>
                    <input type="number" class="form-control backlog" placeholder="Backlog" min="0" max="100">
                    <p class="msgBacklog fs-6 text-danger"></p>
                </td>
                <td>
                    <button type="button" class="btn btn-outline-danger remove-education-btn"><i class="fa-solid fa-minus"></i></button>
                </td>
            </tr>
            `
        )
    });

    $('#educationTableBody').on('click', '.remove-education-btn', function () {
        console.log('remove row fun called');
        const row = $(this).closest('tr');
        row.remove();
    });


    function renderUsers() {
        resetForm();
        let userHtml = users.map( function (user,index) {
            let { id, firstName, lastName, address, email, dob, graduation} = user;
            return `
            <tr data-user-id="${id}" >
                <th scope="row">${index+1}</th>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${email}</td>
                <td>${address}</td>
                <td>${dob}</td>
                <td>${graduation}</td>
                <td>
                    <button onclick="updateUser(${index})" class="btn btn-outline-primary me-2" data-bs-toggle="modal" data-bs-target="#form">
                        <i class="fa-solid fa-pen-to-square fa-lg"></i>
                    </button>
                    <button onclick="deleteUser(${index})" class="btn btn-outline-danger" >
                        <i class="fa-regular fa-trash-can fa-lg"></i>
                    </button>
                </td>
            </tr>
            `
        }).join(' ');
        $('#tbody').html(userHtml);
    }

    function updateUser(index) {
        let currentUser = users[index];
        console.log(currentUser);

        if(currentUser){

            // show common info 
            firstName.val(currentUser.firstName);
            lastName.val(currentUser.lastName);
            email.val(currentUser.email);
            address.val(currentUser.address);
            dob.val(currentUser.dob);
            graduation.val(currentUser.graduation);

            // show compulsary education fields 

            {
                degree1.val(currentUser.educationsCompulsary[0].degree),
                college1.val(currentUser.educationsCompulsary[0].college),
                startYear1.val(currentUser.educationsCompulsary[0].startYear),
                passoutYear1.val(currentUser.educationsCompulsary[0].passoutYear),
                percentage1.val(currentUser.educationsCompulsary[0].percentage),
                backlog1.val(currentUser.educationsCompulsary[0].backlog)
            }

            {
                degree2.val(currentUser.educationsCompulsary[1].degree);
                college2.val(currentUser.educationsCompulsary[1].college);
                startYear2.val(currentUser.educationsCompulsary[1].startYear);
                passoutYear2.val(currentUser.educationsCompulsary[1].passoutYear);
                percentage2.val(currentUser.educationsCompulsary[1].percentage);
                backlog2.val(currentUser.educationsCompulsary[1].backlog);
            }

            $('#educationTableBody').empty();
            $.each(currentUser.educations, function(index, education) {
                console.log(education)
                let {degree, college, startYear, passoutYear, percentage, backlog} = education
                $('#educationTableBody').append(`
                    <tr>
                        <td class="pb-0">
                            <input type="text" class="form-control degree" placeholder="Degree" value="${degree}">
                            <p class="msgDegree text-danger fs-6"></p>
                        </td>
                        <td>
                            <input type="text" class="form-control college" placeholder="College" value="${college}">
                            <p class="msgCollege text-danger fs-6"></p>
                        </td>
                        <td>
                            <input type="month" class="form-control startYear" placeholder="Start Year" value="${startYear}">
                            <p class="msgStartYear text-danger fs-6"></p>
                        </td>
                        <td>
                            <input type="month" class="form-control passoutYear" placeholder="Passout Year" value="${passoutYear}">
                            <p class="msgPassoutYear text-danger fs-6"></p>
                        </td>
                        <td>
                            <input type="text" class="form-control percentage" placeholder="Percentage" min="0" max="100" step="0.01" value="${percentage}">
                            <p class="msgPercentage text-danger fs-6"></p>
                        </td>
                        <td>
                            <input type="number" class="form-control backlog" placeholder="Backlog" min="0" max="100" value="${backlog}">
                            <p class="msgBacklog text-danger fs-6"></p>
                        </td>
                        <td>
                            <button type="button" onclick="removeEducationRow(this)" class="btn btn-outline-danger remove-education-btn"><i class="fa-solid fa-minus"></i></button>
                        </td>
                    </tr>
                `);
            });
            // Update the button attribute to indicate it's an update action
            add.attr('data-action', 'update')
            add.attr('data-user-id', currentUser.id)
        }
    }

    // function to update users in the array or list
    function updateUserInList() {

        let userIdToUpdate = add.dataset.userId; // Retrieve the user ID from the button attribute
        console.log('inside updateuserlist')

        // Find the user in the list and update their data
        let index = users.findIndex((user) => user.id == userIdToUpdate);
        if (index !== -1) {
            let updatedUser = {
                id: userIdToUpdate,
                firstName: firstName.val(),
                lastName: lastName.val(),
                email: email.val(),
                address: address.val(),
                dob: dob.val(),
                graduation: graduation.val(),
                educationsCompulsary: [ 
                    {
                        degree: degree1.val(),
                        college: college1.val(),
                        startYear: startYear1.val(),
                        passoutYear: passoutYear1.val(),
                        percentage: percentage1.val(),
                        backlog: backlog1.val()
                    },
                    {
                        degree: degree2.val(),
                        college: college2.val(),
                        startYear: startYear2.val(),
                        passoutYear: passoutYear2.val(),
                        percentage: percentage2.val(),
                        backlog: backlog2.val()
                    }],
                educations: []
            };

            let educationRows = $('#educationTableBody tr');
            educationRows.each(function(){
                let education = {  
                    degree: $(this).find('.degree').val(),
                    college: $(this).find('.college').val(),
                    startYear: $(this).find('.startYear').val(),
                    passoutYear: $(this).find('.passoutYear').val(),
                    percentage: $(this).find('.percentage').val(),
                    backlog: $(this).find('.backlog').val()
                }
                updatedUser.educations.push(education);
            })
            users[index]= updatedUser;
            renderUsers(); // Update the UI
            alert('User updated successfully!');
        }
    }

    function deleteUser (index) {
        let result = confirm('Are you sure?')
        if(result){
            users.splice(index, 1)
            renderUsers();
        }
    }

    function reset(){

        // remove highlights from input
        firstName.removeClass('is-invalid');
        email.removeClass('is-invalid');
        address.removeClass('is-invalid');
        dob.removeClass('is-invalid');
        graduation.removeClass('is-invalid');

        // reset labels 
        msgFname.text('First Name');
        msgEmail.text('Email');
        msgAddress.text('Address');
        msgDob.text('Date Of Birth');
        msgGraduation.text('Graduation Year');
        
        // remove text danger 
        msgFname.removeClass('text-danger');
        msgEmail.removeClass('text-danger');
        msgAddress.removeClass('text-danger');
        msgDob.removeClass('text-danger');
        msgGraduation.removeClass('text-danger');

        let msgDegrees = $('.msgDegree');
        let msgColleges = $('.msgCollege');
        let msgStartYears = $('.msgStartYear');
        let msgPassoutYears = $('.msgPassoutYear');
        let msgPercentages = $('.msgPercentage');
        let msgBacklogs = $('.msgBacklo');
        let inputs = $('.table input');

        for(let i =0; i<inputs.length; i++){
            $(inputs[i]).removeClass('is-invalid');
        }

        for(let i =0; i<msgDegrees.length; i++){
            $(msgDegrees[i]).text(' ');
            $(msgColleges[i]).text(' ');
            $(msgStartYears[i]).text(' ');
            $(msgPassoutYears[i]).text(' ');
            $(msgPercentages[i]).text(' ');
            $(msgBacklogs[i]).text(' ');
        }

    }

    function resetForm() {
        firstName.val(' ');
        lastName.val(' ');
        email.val(' ');
        address.val(' ');
        dob.val('');
        graduation.val('');
        add.attr('data-action', 'add');
        add.attr('data-user-id', '');
    }

    function resetEducationRows() {
        $('#educationTableBody').html(' ');
    }

