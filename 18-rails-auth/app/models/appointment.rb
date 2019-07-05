class Appointment < ApplicationRecord
  belongs_to :doctor
  belongs_to :patient

  validate :date_cannot_be_in_the_past, :doctor_cannot_be_unavailable, :time_cannot_be_outside_opening_hours, :patient_cannot_be_unavailable

  def date_as_object
    Date.parse(self.date)
  end

  def date_cannot_be_in_the_past
    if self.date_as_object < Date.today
      errors.add(:date, "must be in the future")
    end
  end

  def doctor_cannot_be_unavailable
    clashing_appt = self.doctor.appointments.find {|appt| appt.date == self.date && appt.time == self.time }
    if clashing_appt
      errors.add(:"doctor #{self.doctor.name}", "is not available at that time")
    end
  end

  def time_cannot_be_outside_opening_hours
    hour = self.time.to_i
    if hour < 9 || hour > 16
      errors.add(:time, "must be between 09:00 and 17:00")
    end
  end

  def patient_cannot_be_unavailable
    clashing_appt = self.patient.appointments.find {|appt| appt.date == self.date && appt.time == self.time }
    if clashing_appt
      errors.add(:"patient #{self.patient.name}", "is not available at that time")
    end
  end

end
