class AppointmentsController < ApplicationController

    before_action :authorize_user, only: [:new, :create]

    def new
        @appointment = Appointment.new
        @doctor = params[:doctor_id] ? Doctor.find(params[:doctor_id]) : nil
        @patient = params[:patient_id] ? Patient.find(params[:patient_id]) : nil
    end

    def create
        appointment = Appointment.create appointment_params
        if appointment.valid?
            redirect_to appointment
        else
            flash[:errors] = appointment.errors.full_messages
            redirect_to new_appointment_path
        end
    end

    def show
        @appointment = Appointment.find params[:id]
    end

    private

    def appointment_params
        params.require(:appointment).permit(:date, :time, :doctor_id, :patient_id)
    end
end
