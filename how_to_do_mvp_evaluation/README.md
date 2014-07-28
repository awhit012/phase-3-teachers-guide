## How I Do Evaluation

Hi, this is how I do the evaluation of the MVPs

1.  Clone it
2.  Can start a console: `bundle && rake db:create:all db:migrate db:seed db:test:prepare && rails c`
3.  Can run RSpec: `bundle exec rspec`
4.  Evaluate the Controllers:
  1.  Flog `find app/controllers -name \*.rb -exec flog {} \; `
  2.  Manual investigation of the controllers
    A. Long method smell
    B. Private methods?
    C. Proper use of AR association has_many methods `.build(), .create()`
    D. Use of helpers (gross)
5.  Investigate the Models
  1.  Appropriate concerns
  2.  Any non-DB Models? Are they tested?
6.  Evaluate the views
  1.  Logic in view?
  2.  Views over-large
  3.  Corect use of partials
7.  Evaluate the JavaScript
  1. Any sense of code organization (OO) or is it jQuery soup?
  2. Any file division?
  3. Did they use templates?
8. Examine the migrations
  1. Constraints used properly
9. Examine the tests
  1. Any tests beyond mere validations and trivial ActiveRecord testing?
  2. Are critical controller routes tested?
  3. Are they testing implementation over interface?

## MISC

1.  Misuse of Enumerables

