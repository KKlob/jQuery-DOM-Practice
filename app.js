// ensure nothing runs until after DOM loads
$(function () {
    $('#submit-btn').on('click', function (evt) {
        evt.preventDefault();
        let movieTitle = $('#movieTitle').val();
        let movieRating = $('#movieRating').val();

        if (!(movieTitle.length >= 2)) {
            alert('Title must have at least 2 characters!');
            return;
        }
        if (!(movieRating >= 0) || !(movieRating <= 10)) {
            alert('Rating must be between 0 and 10');
            return;
        }
        // Add movie to list
        $('#movieList').append(`<li>Movie: ${movieTitle} | Rating: ${movieRating} <button class="remove-btn">Remove</button></li>`);
        // clear inputs
        $('#movieTitle').val("");
        $('#movieRating').val("");
    });
    $('#movieList').on('click', '.remove-btn', function (evt) {
        $(this).parent().remove();
    });
});