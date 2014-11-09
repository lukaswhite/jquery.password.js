#jquery.password.js

A really simple JQuery plugin which, given a password element, creates a plaintext version.

Specifically, it:

- Wraps the field in a Bootstrap-friendly "input-group" container
- Creates a text field which mirrors the contents of the password field
- Synchronises the two
- Appends a toggle button after the element, allowing user to switch between the two

##Usage

```
$('SELECTOR').password({
	// options
});
```

##Options

| Option        | Default                                | Description                                                  |
|---------------|----------------------------------------|--------------------------------------------------------------|
| `buttonClass`   | `toggle-password btn btn-default btn-lg` | CSS class to apply to the generated button                   |
| `showText`      | `Show Password`                         | The text to display on the button for showing the text field |
| `hideText`      | `Hide Password`                          | The text to display on the button for hiding the text field  |
| `iconClass`    | `fa`                                    | Class to designate an icon                                   |
| `showIconClass` | `fa-eye`                                 | Class to assign to the icon on the "Show password" button    |
| `hideIconClass` | `fa-eye-slash`                           | Class to assign to the icon on the "Hide password" button    |
| `hideByDefault` | `true`                                   |                                                    Whether to hide the plaintext password by default