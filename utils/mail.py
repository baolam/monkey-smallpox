from mailer import Mailer
from mailer import Message

def build_message(from_mail, to_mail, subject) -> Message:
  msg = Message(From=from_mail, To=to_mail)
  msg.Subject = subject
  
  return msg