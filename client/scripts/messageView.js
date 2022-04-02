// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(
    "<div class='chat'>" +
<<<<<<< HEAD
        "<div class='username'> <%- username %> </div>" +
        "<div class='text'> <%- text %> </div>" +
    "</div>"
=======
        "<div class='username'><%-username%></div>" +
        "<div class='text<%-friend%>'> <%-text%> </div>" +
      "</div>"
>>>>>>> 4380bc33ed370174c19e1830ea05fa45cd055c26
  )

};