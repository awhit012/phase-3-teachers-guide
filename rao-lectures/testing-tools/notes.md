## Testing Tools


All libraries on top of RSPEC

How to Test:
- Rspec: a way to do basic assertions.
- Rails Rspec helpers: A way to test instance variables getting set, sessions, flash, etc.
- Shoulda Matchers: a way to test associations and validations on your active record models. these are not particularly important.
- Factory Girl: a way to create fake objects for the purpose of testing.
- Capybara: A way to do integration testing.

ALL OF THESE THINGS ARE WELL DOCUMENTED.

Why test?
- keeps your code from running.
- good code is tested code. If you are a rails developer, you are likely a TDD developer. Testing separates

Learn
Build
Ensure
Document

What to test? We'll talk more about that tomorrow with Shadi. I don't like stupid tests, though. Test things that change.

- As much of your custom complexity as possible should live in your model. Use simple rspec tests to deal with that.
- Controller actions end up having logic too, usually around if statements. Personally, I would simply test all instance variable and paths through my program.
- Feature tests aren't great -- they are brittle, and its hard to get a valid assertion. But they are good for testing that everything fits together well, and that all your rails helpers (form for, link to, etc) are effective.