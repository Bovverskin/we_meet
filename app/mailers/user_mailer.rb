class UserMailer < ApplicationMailer
  def welcome_email(group)
    recipients = group.members.map(&:user)
    mail(
      from:'noreply@meetup.com',
      to: recipients.pluck(:email), 
      subject: "Notification from WeMeet"
    )
  end
end
