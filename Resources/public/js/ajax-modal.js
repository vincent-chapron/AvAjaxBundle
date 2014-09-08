$(document).ready(function() {

    // Support for AJAX loaded modal window.
    // Focuses on first input textbox after it loads the window.
    // To use it  : <a href="/url/to/load/modal_window.htm" data-toggle="modal">link</a>
    $(document).on('click', '[data-toggle="ajax-modal"]', function(e) {
        e.preventDefault();
        var url = $(this).attr('href');
        var customClass = $(this).attr('data-modal-class') ? $(this).attr('data-modal-class') : '';
        if (url.indexOf('#') == 0) {
            $(url).modal('show');
        } else {
            $.get(url, function(data) {
                var modalContent = '<div id="ajax-modal" class="modal fade' + customClass + '">' + data + '</div>';
                $('body').append(modalContent);
                $(modalContent).modal('show');
            }).success(function() { $('input:text:visible:first').focus(); });
        }
    });

});

