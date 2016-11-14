class ApplicationMailer < ActionMailer::Base
  default from: 'noreply@microblogger.com'
  layout 'mailer'
end
