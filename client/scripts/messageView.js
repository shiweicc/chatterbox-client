// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
<<<<<<< HEAD
    <div class='chat'>
      <div class='username'><%-username%></div>
      <div class='text<%-friend%>'> <%-text%> </div>
    </div>
  `)
=======
      <!--

      -->
      <div class="chat">
        <div
          class="username <%= Friends.isFriend(username) ? 'friend' : '' %>"
          data-username="<%- username %>">
          <%- username %>
        </div>
        <div><%- text %></div>
      </div>
      <!--
            -->
    `)
>>>>>>> 4c5afc6514192a47ccc7e9b37168db43e5c4d185

};