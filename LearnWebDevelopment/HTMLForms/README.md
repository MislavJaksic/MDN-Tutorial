## [Your first form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)

TODO: return after you know something about CSS and JavaScript

```
## [HTML forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms) (hidden tutorial)

Extermly important\! [Input data to a server](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data).

Label1\: TextBox1

Label2\: TextBox2

Label3\: TextBox3

### First HTML form

Widget\: make up a form.
        label, text fields, boxes, buttons, checkboxes, radio buttons.
        \<div\>, \<p\> or \<ul\> are often used to group them up.

\<form\>\: the main element
  \<label\>
    for=\"\" links the label to another widget's id=\"\"
  \<input\>\: text box; different types depending on input
  \<textarea\>\: large text box
    id=\"\" linked to a label
    name=\"\" names the data
  \<button\>\: types\: submit\: send data
                   reset\: reset the form (don't do it\!)
                   button\: implement a custom JavaScript action

### How to structure an HTML

Demonstrated in index.html.

### [Native form widgets](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/The_native_form_widgets)

Common attributes\: autofocus\: boolean attribute, should the element have a focus upon the page being loaded?
                   disabled\: can the user interact with the element?
                   form\: form with which the widget is associated; must equal to the id=\"\" of the \<form\>.
                   name\: element name, used when submitting data.
                   value\: the initial value.

\<input\>\: readonly=\"\", disabled=\"\", placeholder=\"\", size=\"\", maxlength=\"\", spellcheck=\"\"
         type=\"\" can radically change the widget.
           type=\"text\"     is a text field.
           type=\"email\"    is an email text field.
           type=\"password\" is a password field.
           type=\"search\"   is a search field.
           type=\"tel\"      is a phone number field.
           type=\"url\"      is a URI field.

\<textarea\>\: multiline text field.
            cols=\"\", rows=\"\" determines the size.
            wrap=\"\" says how the text is wrapped.
            content between the tags is considered the initial value.

\<select\>\: dropdown menu, multiple choice, autocomplete option.
          in index.html.

\<input\>\: special checked widgets.
           checked\: boolean attribute, sets the initial state
         type=\"radio\"
         type=\"checkbox\"

\<button\>\: types\: submit\: send data
                 reset\: reset the form (don't do it\!)
                 button\: implement a custom JavaScript action

\<input\>\: advanced types.
           type=\"number\" has step=\"\", max=\"\" and min=\"\".

           type=\"range\" is a slider with step=\"\", max=\"\" and min=\"\".

           type=\"datetime-local\"
           type=\"month\"
           type=\"time\"   
           type=\"week\"     
           type=\"date\"

           type=\"color\"  

           type=\"file\" to send files to the server.

           type=\"hidden\" used to send data to the user, but not display it.
           type=\"image\" \<img\>, but behaves like a button.

\<meter\> and \<progress\>\:       

### Sending form data

https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data

A client sends a HTTP request to the server and the server sends a response using HTTP. Forms are an interface for configuring the HTTP request.

HTTP request\: made of a header and body.

action=\"\" says to which URI the data is sent.
method=\"\" defines the HTTP method.
  \"get\"\: sends an empty body
  \"post\"\: sends a body that the server should take into account.

The way a server will recieve a request depends on the technology\:
  Symfony       for PHP
  Django, Flask for Python
  Express       for Node.js
  Ruby On Rails for Ruby
  Grails        for Java

Sending files\: enctype=\"multipart/form-data\" changes the Content-Type HTTP header to nable file transfer.

Security concerns\: HTML forms are not a threat, but the way the server handles them.
                   XSS, CSRF, SQL injection, HTTP header injection, email injection, and the list goes on...
                   always sanitize all data\!

### Form data validation

Stopped at\: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation

```
