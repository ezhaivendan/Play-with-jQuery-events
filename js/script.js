const data = {
    "txt" : "hey",
    "details" : [
        {
            "date" : "date1",
            "name" : "name1"
        },
        {
            "date" : "date2",
            "name" : "name2"
        },
        {
            "date" : "date3",
            "name" : "name3"
        }
    ]
}

$(document).ready(function() {
    $(".input-txt").focusout(function(){
    let txtVal = $('.input-txt').val();
    if(txtVal === data.txt) {
        if(data.details.length > 1) {
            $('.bind-date').addClass('hidden');
            $('.bind-multiple-dates').removeClass('hidden');
            $('.bind-multiple-dates').append($("<option>Select Dates</option>"))
            const appendOption = data.details.map( ele => {
                $('.bind-multiple-dates').append($("<option></option>")
                .text(ele.date));
            })
            $('.bind-multiple-dates').on('change', function() {
                alert(this.value)
                if(this.value === 'Select Dates'){
                    alert("Hey buddy select the date from dropdown");
                    $('.bind-name').val('')
                }
                let getDate = data.details.filter(ele => ele.date === this.value);
                $('.bind-name').val(getDate[0].name)
            });
        } 
        else if(data.details.length == 1) {
            $('.bind-date').val(data.details[0].date)
            $('.bind-name').val(data.details[0].name)
        }
    }

    else{
        alert('Please check your input')
        $('.bind-date').removeClass('hidden');
        $('.bind-multiple-dates').addClass('hidden');
        $('.bind-multiple-dates').find('option').remove()
        $('.bind-name').val('')
    }
    })
});
