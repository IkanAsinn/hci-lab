$(document).ready(() => {
  $('.chat-input').submit(e => {
    e.preventDefault();
    if ($('#chat-input-field').val() === '') return;
    $('.chat-body').append(`
    <div class="chat-message buyer">
    <div class="sender">
    <p>John Doe (Buyer)</p>
    </div>
    <div class="chat-message-content">
    <p>${$('#chat-input-field').val()}</p>
    </div>
    <div class="chat-message-time">
    <p>12.00</p>
    </div>
    </div>`);
    $('#chat-input-field').val('');
    $('.chat-container').scrollTop($('.chat-container')[0].scrollHeight);
  });
});